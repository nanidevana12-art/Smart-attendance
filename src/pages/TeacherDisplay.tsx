import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Shield, CheckCircle } from "lucide-react";

const TeacherDisplay = () => {
  const [otp, setOtp] = useState("8547");
  const [timeLeft, setTimeLeft] = useState(2);
  const [studentsPresent, setStudentsPresent] = useState(0);

  // Simulate OTP refresh every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          // Generate new OTP
          setOtp(Math.floor(1000 + Math.random() * 9000).toString());
          return 2;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulate students joining
  useEffect(() => {
    const interval = setInterval(() => {
      setStudentsPresent((prev) => Math.min(prev + Math.floor(Math.random() * 3), 42));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Smart Attendance System
          </h1>
          <p className="text-2xl text-muted-foreground">
            Computer Science - Room 301
          </p>
        </div>

        {/* Main OTP Display */}
        <Card className="mb-8 p-12 text-center bg-gradient-secondary border-primary/20 shadow-glow">
          <div className="mb-8">
            <Badge variant="outline" className="text-lg px-4 py-2 mb-4 border-primary/40">
              Current OTP Code
            </Badge>
            <div className="text-8xl font-mono font-bold text-primary mb-4 animate-pulse-glow tracking-widest">
              {otp}
            </div>
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-xl">
              <Clock className="h-6 w-6" />
              <span>Refreshes in {timeLeft}s</span>
            </div>
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-primary/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/20 rounded-full">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{studentsPresent}</p>
                <p className="text-muted-foreground">Students Present</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-primary/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-info/20 rounded-full">
                <Shield className="h-6 w-6 text-info" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">98.5%</p>
                <p className="text-muted-foreground">Accuracy Rate</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card border-primary/10">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/20 rounded-full">
                <CheckCircle className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">Active</p>
                <p className="text-muted-foreground">System Status</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Instructions */}
        <Card className="mt-8 p-6 bg-card/50 border-primary/10">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Instructions for Students:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">1.</span>
              <p>Open the Smart Attendance app on your device</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">2.</span>
              <p>Enter the current OTP code displayed above</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">3.</span>
              <p>Complete the face verification process</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold">4.</span>
              <p>Wait for attendance confirmation</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TeacherDisplay;