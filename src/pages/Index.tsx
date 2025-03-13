
import { motion } from "framer-motion";
import { Send as SendIcon } from "lucide-react";
import { PricingCard } from "@/components/PricingCard";
import { FAQ } from "@/components/FAQ";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="container mx-auto text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Launch Your MVP at Lightning Speed
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Skip the lengthy development cycles. Get your software product to market
              faster with our focused MVP development approach.
            </p>
            <a 
              href="https://app.youform.com/forms/7wz0fofp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Get Started
            </a>
          </motion.div>
          <div className="relative h-32">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatDelay: 0,
              }}
            >
              <SendIcon className="w-16 h-16 text-primary animate-paper-plane" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            We Handle Everything
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Rapid Development",
                description:
                  "Focus on shipping key features that matter most to your business",
              },
              {
                title: "Full Stack Service",
                description:
                  "From frontend to backend, we handle all aspects of development",
              },
              {
                title: "Product Strategy",
                description:
                  "We help turn your product dream into a successful revenue generating business",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200 animate-float"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* New CTA Button after the Features section */}
          <div className="mt-12">
            <a 
              href="https://app.youform.com/forms/7wz0fofp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 bg-white/80">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trusted By Innovative Startups
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Founders love our speed and focus on delivering what actually matters
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                company: "Podcast Show Notes",
                author: "Alex, Founder",
                quote: "We went from idea to working product in just 4 weeks. Fly MVP delivered exactly what we needed without the bloat.",
              },
              {
                company: "SEO Writer",
                author: "Samantha, CEO",
                quote: "Their sprint-based approach saved us months of development time compared to traditional agencies.",
              },
              {
                company: "Shorts Maker",
                author: "David, CTO",
                quote: "The technical expertise was impressive, but their focus on shipping only what matters was the real game-changer.",
              },
              {
                company: "StaffGeek",
                author: "Michelle, Founder",
                quote: "Fly MVP built our entire platform in 6 weeks for a fraction of what other dev shops quoted us.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-white shadow-md border border-gray-100 flex flex-col h-full"
              >
                <div className="flex-grow">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.author}</p>
                  <p className="text-primary text-sm">{testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* New CTA Button after the Social Proof section */}
          <div className="mt-12">
            <a 
              href="https://app.youform.com/forms/7wz0fofp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Join These Success Stories
            </a>
          </div>
        </div>
      </section>

      {/* Competitor Comparison Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How We Compare
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            See why startups choose Fly MVP over traditional development agencies
          </p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Fly MVP Column */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-primary/20 p-6 transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-bold text-primary mb-6">Fly MVP</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium">2-6 weeks</span> to MVP launch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium">Fixed pricing</span> with no surprises</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium">Focused development</span> on key features</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium">Strategy included</span> at every tier</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-primary flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span><span className="font-medium">Flexible sprints</span> that adapt to your needs</span>
                  </li>
                </ul>
              </div>
              
              {/* Traditional Dev Shop Column */}
              <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-md border border-gray-200 p-6">
                <h3 className="text-2xl font-bold text-gray-700 mb-6">Traditional Dev Shop</h3>
                <ul className="space-y-4 text-left text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><span className="font-medium">3-6 months</span> to MVP launch</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><span className="font-medium">Hourly billing</span> with unpredictable costs</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><span className="font-medium">Feature bloat</span> and overengineering</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><span className="font-medium">Extra fees</span> for strategic guidance</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-gray-400 flex-shrink-0 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span><span className="font-medium">Rigid contracts</span> with change request fees</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <a 
              href="https://app.youform.com/forms/7wz0fofp" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
            >
              Start Your MVP Journey
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Choose Your Speed
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Fast"
              price="$1,000"
              buildTime="6 weeks"
              sprintTime="6 week"
            />
            <PricingCard
              title="Faster"
              price="$2,500"
              buildTime="4 weeks"
              sprintTime="4 week"
              isPopular
            />
            <PricingCard
              title="Fastest"
              price="$5,000"
              buildTime="2 weeks"
              sprintTime="2 week"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <FAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Take Off?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Your MVP is just a click away. Join successful founders who launched in weeks, not months, for a fraction of the cost.
          </p>
          <a 
            href="https://app.youform.com/forms/7wz0fofp" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200"
          >
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
