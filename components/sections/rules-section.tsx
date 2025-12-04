"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, Code, Trophy, AlertCircle } from "lucide-react"

export default function RulesSection() {
  const rules = [
    {
      icon: Users,
      title: "Eligibility",
      description: "Open to all Sir Asharib class students at GIAIC. Solo participation or teams up to 4 members.",
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
    <section id="rules" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Challenge Rules
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Simple, transparent guidelines to ensure a fair and exciting competition for everyone.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {rules.map((rule, index) => {
            const Icon = rule.icon
            const colorClasses = {
              blue: "bg-blue-50 text-blue-600",
              green: "bg-green-50 text-green-600",
              purple: "bg-purple-50 text-purple-600",
              yellow: "bg-yellow-50 text-yellow-600",
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClasses[rule.color as keyof typeof colorClasses]}`}
                >
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {rule.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{rule.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-orange-50 border border-orange-100 rounded-2xl p-8 text-center max-w-4xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <AlertCircle className="w-10 h-10 text-orange-600 mb-4" />
            <h3 className="text-xl font-bold text-orange-900 mb-2">
              Fair Play & Respect
            </h3>
            <p className="text-orange-800 leading-relaxed max-w-2xl">
              Maintain a spirit of collaboration, respect, and fair play throughout the challenge. Any form of academic
              dishonesty or unsportsmanlike conduct will result in disqualification. Let's build an environment where
              everyone can thrive and learn!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
