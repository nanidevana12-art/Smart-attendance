import { useState, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle, X, User, Clock, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentApp = () => {
  const [step, setStep] = useState<'otp' | 'camera' | 'processing' | 'success' | 'failed'>('otp');
  const [otpInput, setOtpInput] = useState("");
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  const handleOtpSubmit = () => {
    if (otpInput.length === 4) {
      setStep('camera');
      startCamera();
    } else {
      toast({
        variant: "destructive",
        title: "Invalid OTP",
        description: "Please enter a 4-digit OTP code",
      });
    }
  };

  const startCamera = useCallback(async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user' }
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Camera Error",
        description: "Could not access camera. Please check permissions.",
      });
    }
  }, [toast]);

  const capturePhoto = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      
      if (context) {
        context.drawImage(video, 0, 0);
        const imageData = canvas.toDataURL('image/jpeg');
        setCapturedImage(imageData);
        
        // Stop camera
        if (stream) {
          stream.getTracks().forEach(track => track.stop());
        }
        
        // Simulate processing
        setStep('processing');
        
        // Simulate AI processing delay
        setTimeout(() => {
          // 85% success rate simulation
          const success = Math.random() > 0.15;
          setStep(success ? 'success' : 'failed');
        }, 3000);
      }
    }
  };

  const resetApp = () => {
    setStep('otp');
    setOtpInput("");
    setCapturedImage(null);
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
    }
    setStream(null);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
            Smart Attendance
          </h1>
          <p className="text-muted-foreground">Secure & Intelligent</p>
        </div>

        {/* OTP Input Step */}
        {step === 'otp' && (
          <Card className="p-6 bg-card border-primary/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Enter OTP Code</h2>
              <p className="text-muted-foreground text-sm">
                Look at the classroom display for the current code
              </p>
            </div>
            
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Enter 4-digit OTP"
                value={otpInput}
                onChange={(e) => setOtpInput(e.target.value.replace(/\D/g, '').slice(0, 4))}
                className="text-center text-2xl font-mono tracking-widest h-14"
                maxLength={4}
              />
              <Button 
                onClick={handleOtpSubmit}
                disabled={otpInput.length !== 4}
                className="w-full h-12 bg-gradient-primary text-primary-foreground font-semibold"
              >
                Verify OTP
              </Button>
            </div>
          </Card>
        )}

        {/* Camera Step */}
        {step === 'camera' && (
          <Card className="p-6 bg-card border-primary/20">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-success" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Face Verification</h2>
              <p className="text-muted-foreground text-sm">
                Position your face in the camera frame
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-black aspect-square">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-4 border-2 border-primary rounded-lg opacity-50"></div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={resetApp}
                  variant="outline"
                  className="flex-1"
                >
                  <X className="h-4 w-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  onClick={capturePhoto}
                  className="flex-1 bg-gradient-success text-success-foreground"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  Capture
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* Processing Step */}
        {step === 'processing' && (
          <Card className="p-6 bg-card border-primary/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-info/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <User className="h-8 w-8 text-info" />
              </div>
              <h2 className="text-xl font-semibold mb-2">Processing...</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Verifying your identity and location
              </p>
              
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                  <span className="text-sm">OTP Code Verified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-warning rounded-full animate-pulse"></div>
                  <span className="text-sm">Face Recognition in Progress...</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-muted-foreground rounded-full"></div>
                  <span className="text-sm text-muted-foreground">Location Verification</span>
                </div>
              </div>
            </div>
          </Card>
        )}

        {/* Success Step */}
        {step === 'success' && (
          <Card className="p-6 bg-card border-success/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-success">Attendance Marked!</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Your attendance has been successfully recorded
              </p>
              
              <Badge variant="outline" className="mb-4 border-success/40 text-success">
                Verified at {new Date().toLocaleTimeString()}
              </Badge>
              
              <Button 
                onClick={resetApp}
                className="w-full bg-gradient-success text-success-foreground"
              >
                Done
              </Button>
            </div>
          </Card>
        )}

        {/* Failed Step */}
        {step === 'failed' && (
          <Card className="p-6 bg-card border-destructive/20">
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertCircle className="h-8 w-8 text-destructive" />
              </div>
              <h2 className="text-xl font-semibold mb-2 text-destructive">Verification Failed</h2>
              <p className="text-muted-foreground text-sm mb-6">
                Face verification unsuccessful. Please try again.
              </p>
              
              <Button 
                onClick={resetApp}
                className="w-full bg-gradient-primary text-primary-foreground"
              >
                Try Again
              </Button>
            </div>
          </Card>
        )}

        <canvas ref={canvasRef} className="hidden" />
      </div>
    </div>
  );
};

export default StudentApp;