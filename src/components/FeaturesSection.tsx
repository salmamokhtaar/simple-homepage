
import { Card, CardContent } from "@/components/ui/card";
import { 
  Wallet, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Bell, 
  Target,
  CreditCard,
  Calendar,
  Users
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Wallet,
      title: "Expense Tracking",
      description: "Automatically categorize and track all your expenses with smart detection."
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Get detailed insights with interactive charts and spending analysis."
    },
    {
      icon: Shield,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Track expenses on the go with our intuitive mobile application."
    },
    {
      icon: Bell,
      title: "Smart Alerts",
      description: "Receive notifications when you're approaching budget limits."
    },
    {
      icon: Target,
      title: "Goal Setting",
      description: "Set and track financial goals with milestone achievements."
    },
    {
      icon: CreditCard,
      title: "Multi-Account Support",
      description: "Connect multiple bank accounts and credit cards in one place."
    },
    {
      icon: Calendar,
      title: "Recurring Transactions",
      description: "Automatically track subscriptions and recurring payments."
    },
    {
      icon: Users,
      title: "Family Sharing",
      description: "Share budgets and expenses with family members securely."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-maroon-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-maroon-900 mb-4">
            Everything You Need to Manage Your Money
          </h2>
          <p className="text-xl text-maroon-600 max-w-3xl mx-auto">
            Dhaqaaleeye provides all the tools you need to take control of your finances 
            and build a better financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-maroon-200 hover:border-maroon-400 transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-maroon-100 rounded-lg flex items-center justify-center group-hover:bg-maroon-600 transition-colors duration-300">
                    <feature.icon className="text-maroon-600 group-hover:text-white transition-colors duration-300" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-maroon-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-maroon-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
