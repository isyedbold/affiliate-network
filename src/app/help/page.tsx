import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search, ArrowRight } from "lucide-react";
import Footer from "@/components/sections/footer";

function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-6 py-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-black tracking-wider">
          NINEBYFIVE
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/work" className="text-base font-medium hover:text-[#CCFF00] transition-colors">Work</a>
          <a href="/services" className="text-base font-medium hover:text-[#CCFF00] transition-colors">Services</a>
          <a href="/about" className="text-base font-medium hover:text-[#CCFF00] transition-colors">About</a>
          <a href="/news" className="text-base font-medium hover:text-[#CCFF00] transition-colors">News</a>
          <a href="/contact" className="text-base font-medium hover:text-[#CCFF00] transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
}

const helpCategories = [
  {
    title: "Kickoff Guide",
    description: "Everything you need to get started with our platform.",
    href: "#cat-kickoff",
  },
  {
    title: "Growth Playbook", 
    description: "Strategies and tactics to scale your business effectively.",
    href: "#cat-growth",
  },
  {
    title: "Payments Hub",
    description: "Manage payments, invoices, and financial transactions.",
    href: "#cat-payments",
  },
  {
    title: "Finance Glossary",
    description: "Definitions and explanations of financial terms and concepts.",
    href: "#cat-finance",
  },
  {
    title: "Common Questions",
    description: "Answers to frequently asked questions and common issues.",
    href: "#cat-questions",
  },
  {
    title: "Contact Support",
    description: "Reach out to our team for personalized assistance.",
    href: "#cat-contact",
  },
];

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-white">
      <div id="help-top" />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-black mb-6">
                Support Hub
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-12">
                Get the answers you need. Our comprehensive help center is here to guide you through every step of your journey.
              </p>
              
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search help…"
                  className="w-full pl-12 pr-4 py-4 text-base bg-gray-50 border-gray-200 rounded-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section id="help-categories" className="py-20 md:py-24">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {helpCategories.map((category, index) => (
                <Card key={index} className="border border-gray-200 hover:border-[#CCFF00] transition-colors duration-300 bg-white">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-6">
                      {category.description}
                    </CardDescription>
                    <Button 
                      variant="ghost" 
                      className="p-0 text-black font-medium hover:bg-transparent hover:text-[#CCFF00] transition-colors"
                      asChild
                    >
                      <a href={category.href} className="flex items-center" aria-label={`Learn more about ${category.title}`}>
                        Learn more
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-6 py-20 max-w-4xl">
          
          <section id="cat-kickoff" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Kickoff Guide</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-bold mb-2">Getting Started with Your First Campaign</h3>
                <p className="text-gray-600">Learn the fundamentals of setting up and launching your first successful marketing campaign.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Platform Overview and Navigation</h3>
                <p className="text-gray-600">A comprehensive tour of all features and how to navigate the platform efficiently.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Quick Setup: Account Configuration</h3>
                <p className="text-gray-600">Essential settings and configurations to get your account ready in under 10 minutes.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Understanding Your Dashboard Analytics</h3>
                <p className="text-gray-600">Decoding key metrics and insights from your personalized dashboard.</p>
              </li>
            </ul>
          </section>

          <section id="cat-growth" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Growth Playbook</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-bold mb-2">Scaling Strategies for Small Businesses</h3>
                <p className="text-gray-600">Proven tactics to grow your revenue without breaking the bank.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Advanced Customer Acquisition Techniques</h3>
                <p className="text-gray-600">Modern approaches to finding and converting high-value customers.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Optimization: A/B Testing Framework</h3>
                <p className="text-gray-600">Systematic methods for testing and improving your marketing performance.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Partner Channel Expansion Guide</h3>
                <p className="text-gray-600">Building strategic partnerships to accelerate your growth trajectory.</p>
              </li>
            </ul>
          </section>

          <section id="cat-payments" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Payments Hub</h2>
            <ul className="space-y-6">
              <li>
                <h3 className="text-xl font-bold mb-2">Setting Up Multiple Payment Methods</h3>
                <p className="text-gray-600">Complete guide to configuring credit cards, ACH, and alternative payment options.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Managing Recurring Billing Cycles</h3>
                <p className="text-gray-600">Best practices for subscription-based billing and automated payment processing.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Handling Failed Payments and Retries</h3>
                <p className="text-gray-600">Strategies for recovering revenue from declined transactions.</p>
              </li>
              <li>
                <h3 className="text-xl font-bold mb-2">Tax Compliance and Reporting Tools</h3>
                <p className="text-gray-600">Navigate tax requirements with integrated compliance and reporting features.</p>
              </li>
            </ul>
          </section>

          <section id="cat-finance" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Finance Glossary</h2>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">Customer Acquisition Cost (CAC)</h3>
                <p className="text-gray-600">The total cost of acquiring a new customer.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Monthly Recurring Revenue (MRR)</h3>
                <p className="text-gray-600">Predictable income calculated monthly from subscriptions.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Lifetime Value (LTV)</h3>
                <p className="text-gray-600">The projected revenue from a customer throughout their relationship.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Churn Rate</h3>
                <p className="text-gray-600">The percentage of customers who stop using your service.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Payment Processing Fee</h3>
                <p className="text-gray-600">The costs associated with accepting online payments.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Return on Investment (ROI)</h3>
                <p className="text-gray-600">The profitability ratio between net profit and total investment.</p>
              </div>
            </div>
          </section>

          <section id="cat-questions" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Common Questions</h2>
            <ul className="space-y-6">
              <li>
                <button className="block text-xl font-bold text-black hover:text-[#CCFF00] transition-colors" aria-label="How do I migrate from another platform?">
                  How do I migrate from another platform?
                </button>
              </li>
              <li>
                <button className="block text-xl font-bold text-black hover:text-[#CCFF00] transition-colors" aria-label="What security measures protect my data?">
                  What security measures protect my data?
                </button>
              </li>
              <li>
                <button className="block text-xl font-bold text-black hover:text-[#CCFF00] transition-colors" aria-label="Can I customize the branding?">
                  Can I customize the branding?
                </button>
              </li>
              <li>
                <button className="block text-xl font-bold text-black hover:text-[#CCFF00] transition-colors" aria-label="What happens if I exceed my plan limits?">
                  What happens if I exceed my plan limits?
                </button>
              </li>
              <li>
                <button className="block text-xl font-bold text-black hover:text-[#CCFF00] transition-colors" aria-label="Are there any setup fees?">
                  Are there any setup fees?
                </button>
              </li>
              <li>
                <button className="block text-xl font-bold text-black hover:text-[#CCFF00] transition-colors" aria-label="How does the referral program work?">
                  How does the referral program work?
                </button>
              </li>
            </ul>
          </section>

          <section id="cat-contact" className="mb-24">
            <h2 className="text-3xl md:text-4xl font-black mb-8">Contact Support</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              We're here to help you succeed. Our dedicated support team is ready to assist with any questions or concerns you might have. Get in touch via email, phone, or our contact form below.
            </p>
            <div id="help-contact-form-slot" className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              <p className="text-gray-500 italic">Contact form placeholder</p>
            </div>
          </section>

        </div>
      </main>
      
      {/* Back to top link */}
      <div className="container mx-auto px-6 py-8 border-t border-gray-200">
        <div className="text-center">
          <button 
            onClick={() => document.getElementById('help-top')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm font-medium text-black hover:text-[#CCFF00] transition-colors" 
            aria-label="Back to top of page"
          >
            Back to top
          </button>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}