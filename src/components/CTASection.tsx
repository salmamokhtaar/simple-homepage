
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-maroon-900 via-maroon-800 to-maroon-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-maroon-100 mb-12 max-w-2xl mx-auto">
            Join thousands of users who have already transformed their financial lives with Dhaqaaleeye. 
            Start your journey to financial freedom today.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center space-x-3 text-maroon-100">
              <CheckCircle className="text-maroon-400" size={20} />
              <span>100% Free to Start</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-maroon-100">
              <CheckCircle className="text-maroon-400" size={20} />
              <span>No Credit Card Required</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-maroon-100">
              <CheckCircle className="text-maroon-400" size={20} />
              <span>Setup in 2 Minutes</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-maroon-900 hover:bg-maroon-50 px-8 py-4 text-lg font-semibold"
            >
              Start Free Trial
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-maroon-300 text-maroon-100 hover:bg-maroon-800 px-8 py-4 text-lg"
            >
              Schedule Demo
            </Button>
          </div>

          <p className="text-maroon-300 text-sm mt-6">
            Trusted by 10,000+ users worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
