"use client"

import { motion } from "framer-motion"
import { Clock, CheckCircle, Users, Code, Trophy, AlertCircle } from "lucide-react"

export default function RulesSection() {
  const rules = [
    {
      icon: Users,
      title: "Eligibility",
      description: "Open to all Monday 6-9 students at GIAIC. Solo participation or teams up to 4 members.",
      color: "blue",
    },
    {
      icon: Code,
      title: "Tech Freedom",
      description: "Use any technology stack you prefer. No restrictions on frameworks, languages, or platforms.",
      color: "green",
    },
    {
      icon: CheckCircle,
      title: "Originality",
      description:
        "Projects must be original work started during the challenge period. Open-source libraries are encouraged.",
      color: "purple",
    },
    {
      icon: Trophy,
      title: "Ownership",
      description:
        "You retain 100% intellectual property rights to your creation. This is about your growth and success.",
      color: "yellow",
    },
  ]

  return (
    <section id="rules" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -inset-4"
          >
            <svg width="100%" height="120" viewBox="0 0 600 120" className="w-full">
              <path
                d="M80,60 Q200,25 350,50 Q500,75 520,55 Q480,85 350,70 Q200,95 80,60 Z"
                fill="#A855F7"
                opacity="0.25"
              />
            </svg>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-center text-gray-900 relative z-10"
            style={{ fontFamily: "Kalam, cursive" }}
          >
            Challenge Rules
          </motion.h2>
        </div>

        {/* Reading Time */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-12"
        >
          <Clock className="w-4 h-4 text-purple-600 mr-2" />
          <span className="text-purple-600 font-medium" style={{ fontFamily: "Kalam, cursive" }}>
            Reading time 2 minutes
          </span>
        </motion.div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            const colorClasses = {
              blue: "bg-blue-100 text-blue-600 border-blue-200",
              green: "bg-green-100 text-green-600 border-green-200",
              purple: "bg-purple-100 text-purple-600 border-purple-200",
              yellow: "bg-yellow-100 text-yellow-600 border-yellow-200",
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorClasses[rule.color as keyof typeof colorClasses]}`}
                >
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Kalam, cursive" }}>
                  {rule.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{rule.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-orange-50 border-2 border-orange-200 rounded-3xl p-8 text-center"
        >
          <AlertCircle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-orange-800 mb-4" style={{ fontFamily: "Kalam, cursive" }}>
            Fair Play & Respect
          </h3>
          <p className="text-orange-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Maintain a spirit of collaboration, respect, and fair play throughout the challenge. Any form of academic
            dishonesty or unsportsmanlike conduct will result in disqualification. Let's build an environment where
            everyone can thrive and learn!
          </p>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-purple-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
