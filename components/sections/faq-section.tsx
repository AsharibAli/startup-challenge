"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Clock, ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need to register to participate in the challenge?",
      answer:
        "No registration required! Simply start building your startup and submit your project anytime during the 3-month challenge period. This removes barriers and lets you focus on what matters - building your product.",
    },
    {
      question: "When can I submit my startup project?",
      answer:
        "Submissions are open throughout the entire 4-month period (June 30 - November 15, 2025). You can submit anytime and update your submission multiple times as your revenue and metrics improve. Final deadline is November 15, 2025.",
    },
    {
      question: "Can I update my submission if my revenue increases?",
      answer:
        "Absolutely! You're encouraged to update your submission whenever you achieve new milestones, earn more revenue, or gain more users. We track your progress over the full 3 months to see who builds the most successful startup.",
    },
    {
      question: "What information do I need to provide when submitting?",
      answer:
        "Submit your project details (name, description, demo link), current revenue with proof, user metrics, your personal info, team details if applicable, and tech stack used. Revenue tracking is crucial for evaluation.",
    },
    {
      question: "Who can participate in the GIAIC Sir Asharib Class Startup Challenge?",
      answer:
        "The challenge is exclusively open to students enrolled in the GIAIC Sir Asharib Class. You can participate either solo or form teams of up to 4 members. All team members must be from the Sir Asharib Class.",
    },
    {
      question: "What kind of projects can I build?",
      answer:
        "You have complete freedom to build any type of product you're passionate about - web applications, mobile apps, APIs, SaaS platforms, or any innovative digital solution. The focus is on creating something that solves a real problem and generates revenue.",
    },
    {
      question: "How important is revenue for winning?",
      answer:
        "Revenue and business metrics account for 25% of your evaluation, but they're not everything. Code quality (25%), innovation (30%), and marketing (20%) are equally important. Even early-stage projects with strong potential can win.",
    },
    {
      question: "Are there any technology restrictions?",
      answer:
        "No! You can use any technology stack, programming language, framework, or platform you prefer. Whether it's React, Python, Flutter, or any other technology - the choice is entirely yours.",
    },
    {
      question: "Can I work on an existing project or idea?",
      answer:
        "Projects must be original work started during the challenge period (June 30 - November 15, 2025). However, you can use open-source libraries, frameworks, and tools. The core product and business should be developed during the challenge timeframe.",
    },
    {
      question: "How will projects be evaluated?",
      answer:
        "Projects are evaluated on four criteria: Product Innovation & Market Fit (30%), Code Quality & Technical Excellence (25%), Business Metrics & Growth (25%), and Marketing & Distribution (20%). Sir Asharib Ali will personally review all submissions.",
    },
    {
      question: "What exactly is the $1000 prize in rewards?",
      answer:
        "Startup Challenge Winners will receive a cash reward of $1000, equally divided among the winners.",
    },
    {
      question: "What happens to my project and intellectual property?",
      answer:
        "You retain 100% intellectual property rights to your creation regardless of the outcome. The challenge is designed for your growth and learning. Even if you don't win the laptop, you'll have gained valuable entrepreneurial experience and potentially a profitable business.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section
      id="faqs"
      className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-br from-blue-50 to-purple-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -inset-4 sm:-inset-8"
          >
            <svg width="100%" height="100" viewBox="0 0 600 100" className="w-full sm:h-[140px]">
              <defs>
                <linearGradient id="faq-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.2" />
                </linearGradient>
              </defs>
              <path
                d="M60,50 Q180,20 320,40 Q460,60 540,45 Q500,70 320,65 Q180,80 60,50 Z"
                fill="url(#faq-gradient)"
                className="animate-pulse"
              />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-center text-gray-900 relative z-10 px-2"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Frequently Asked Questions
          </motion.h2>

          {/* Decorative question mark - Hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, rotate: -15 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 right-1/4 text-blue-400 hidden sm:block"
          >
            <HelpCircle className="w-6 h-6 sm:w-8 sm:h-8" />
          </motion.div>
        </div>

        {/* Reading Time */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-8 sm:mb-12"
        >
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-600 mr-2" />
          <span className="text-blue-600 font-medium text-sm sm:text-base" style={{ fontFamily: "Kalam, cursive" }}>
            Reading time 5 minutes
          </span>
        </motion.div>

        {/* FAQ List - Mobile Optimized */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-purple-50 transition-colors duration-300"
              >
                <h3
                  className="text-base sm:text-lg font-semibold text-gray-900 pr-3 sm:pr-4 leading-relaxed"
                  style={{ fontFamily: "Kalam, cursive" }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  )}
                </motion.div>
              </button>

              <AnimatePresence>
                {openFAQ === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="border-t border-gray-100 pt-3 sm:pt-4">
                        <p className="text-gray-700 leading-relaxed text-sm sm:text-base lg:text-lg">{faq.answer}</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Watercolor accent for open FAQ - Hidden on mobile for performance */}
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 pointer-events-none hidden sm:block"
                >
                  <svg width="100%" height="100%" viewBox="0 0 80 80">
                    <circle cx="60" cy="20" r="12" fill="#E879F9" opacity="0.1" />
                    <circle cx="65" cy="15" r="8" fill="#C084FC" opacity="0.15" />
                  </svg>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-100 to-blue-100 border-2 border-purple-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden"
        >
          {/* Background decoration - Hidden on mobile for performance */}
          <div className="absolute inset-0 opacity-5 hidden sm:block">
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <path d="M0,100 Q100,50 200,80 Q300,110 400,90 L400,200 L0,200 Z" fill="#8B5CF6" />
            </svg>
          </div>

          <div className="relative z-10">
            <HelpCircle className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mx-auto mb-3 sm:mb-4" />
            <h3
              className="text-xl sm:text-2xl font-bold text-purple-800 mb-3 sm:mb-4"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Still Have Questions?
            </h3>
            <p className="text-purple-700 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto px-2">
              Feel free to ask Sir Asharib Ali during Sunday class sessions or reach out through the GIAIC Discord
              server. I'm here to help you succeed in this challenge!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
