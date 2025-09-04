import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Monitor, Smartphone, Shield, Zap, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-secondary opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent animate-float">
              Smart Attendance
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed">
              Revolutionary attendance tracking with dynamic OTP and AI-powered face recognition.
              <br />
              <span className="text-primary">Secure • Intelligent • Fraud-Proof</span>
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <Link to="/teacher">
                <Button size="lg" className="w-64 h-16 text-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
                  <Monitor className="mr-3 h-6 w-6" />
                  Teacher Display
                </Button>
              </Link>
              <Link to="/student">
                <Button size="lg" variant="outline" className="w-64 h-16 text-lg border-primary/40 hover:bg-primary/10">
                  <Smartphone className="mr-3 h-6 w-6" />
                  Student App
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A three-layer security system that ensures authentic attendance marking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center border-primary/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Dynamic OTP</h3>
              <p className="text-muted-foreground">
                Auto-refreshing OTP every 2 seconds ensures only physically present students can access
              </p>
            </Card>

            <Card className="p-8 text-center border-primary/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-success-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">AI Face Recognition</h3>
              <p className="text-muted-foreground">
                Advanced AI verifies student identity and detects proxy attendance attempts
              </p>
            </Card>

            <Card className="p-8 text-center border-primary/20 bg-card/50 hover:shadow-glow transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Secure Validation</h3>
              <p className="text-muted-foreground">
                Double verification ensures 98.5% accuracy in attendance marking
              </p>
            </Card>
          </div>

          {/* Workflow Steps */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">Workflow Process</h3>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Teacher Starts Session</h4>
                  <p className="text-muted-foreground">Smart board displays dynamic OTP that refreshes every 2 seconds, visible only to students physically present in classroom.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-success rounded-full flex items-center justify-center text-success-foreground font-bold text-lg flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Student Opens App</h4>
                  <p className="text-muted-foreground">Students enter the current OTP code from the classroom display to initiate attendance process.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-warning rounded-full flex items-center justify-center text-warning-foreground font-bold text-lg flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Face Verification</h4>
                  <p className="text-muted-foreground">AI-powered face recognition matches student identity and verifies classroom environment to prevent external cheating.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-info rounded-full flex items-center justify-center text-info-foreground font-bold text-lg flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-2 text-foreground">Attendance Confirmation</h4>
                  <p className="text-muted-foreground">System validates both OTP and face scan before marking attendance. Failed verification is rejected automatically.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Experience the future of attendance tracking with our intelligent system
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/teacher">
              <Button size="lg" className="w-64 h-16 text-lg bg-gradient-primary text-primary-foreground font-semibold shadow-glow">
                <Monitor className="mr-3 h-6 w-6" />
                Launch Teacher View
              </Button>
            </Link>
            <Link to="/student">
              <Button size="lg" variant="outline" className="w-64 h-16 text-lg border-primary/40 hover:bg-primary/10">
                <Smartphone className="mr-3 h-6 w-6" />
                Open Student App
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;