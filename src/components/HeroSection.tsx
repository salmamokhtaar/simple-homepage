
import { Button } from "@/components/ui/button";
import { TrendingUp, DollarSign, PieChart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-maroon-950 via-maroon-900 to-maroon-800 min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-maroon-500 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-24 h-24 border border-maroon-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-maroon-600 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Master Your
                <span className="block bg-gradient-to-r from-maroon-300 to-maroon-100 bg-clip-text text-transparent">
                  Financial Future
                </span>
              </h1>
              <p className="text-xl text-maroon-100 leading-relaxed max-w-lg">
                Dhaqaaleeye helps you track expenses, manage budgets, and achieve your financial goals with intelligent insights and beautiful reports.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-maroon-600 hover:bg-maroon-700 text-white px-8 py-4 text-lg">
                Start Tracking Free
              </Button>
              <Button size="lg" variant="outline" className="border-maroon-400 text-maroon-100 hover:bg-maroon-800 px-8 py-4 text-lg">
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10K+</div>
                <div className="text-maroon-200 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$2M+</div>
                <div className="text-maroon-200 text-sm">Money Tracked</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99%</div>
                <div className="text-maroon-200 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative">
            <div className="grid gap-6">
              {/* Card 1 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-maroon-700 hover:border-maroon-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-maroon-600 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Smart Analytics</h3>
                    <p className="text-maroon-200">AI-powered insights into your spending patterns</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-maroon-700 hover:border-maroon-500 transition-all duration-300 transform hover:-translate-y-2 ml-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-maroon-600 rounded-lg flex items-center justify-center">
                    <DollarSign className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Budget Management</h3>
                    <p className="text-maroon-200">Set and track budgets with real-time alerts</p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-maroon-700 hover:border-maroon-500 transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-maroon-600 rounded-lg flex items-center justify-center">
                    <PieChart className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">Visual Reports</h3>
                    <p className="text-maroon-200">Beautiful charts and comprehensive reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
