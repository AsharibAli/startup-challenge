"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"

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
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Everything you need to know about the challenge.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-gray-400"
                >
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
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
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Still Have Questions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4">
            <HelpCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Feel free to ask Sir Asharib Ali during Sunday class sessions or reach out through the GIAIC Discord
            server.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
