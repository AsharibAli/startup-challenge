"use client"

import { motion } from "framer-motion"
import { Code, Target, TrendingUp, Trophy } from "lucide-react"

export default function EvaluationSection() {
  const criteria = [
    {
      icon: Code,
      title: "Code Quality & Technical Excellence",
      weight: "25%",
      description: "Clean, maintainable, and scalable code architecture",
      details: [
        "Code structure and organization",
        "Best practices implementation",
        "Documentation quality",
        "Technical innovation",
      ],
      color: "blue",
    },
    {
      icon: Target,
      title: "Product Innovation & Market Fit",
      weight: "30%",
      description: "Uniqueness of idea and problem-solving approach",
      details: ["Originality of concept", "Problem identification", "Solution effectiveness", "User experience design"],
      color: "purple",
    },
    {
      icon: TrendingUp,
      title: "Business Metrics & Growth",
      weight: "25%",
      description: "Revenue generation and user acquisition success",
      details: ["User engagement metrics", "Revenue or monetization", "Growth trajectory", "Market validation"],
      color: "green",
    },
    {
      icon: Trophy,
      title: "Marketing & Distribution",
      weight: "20%",
      description: "Effectiveness of marketing strategy and reach",
      details: ["Marketing strategy execution", "Brand positioning", "User acquisition channels", "Community building"],
      color: "orange",
    },
  ]

  return (
    <section id="evaluation" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Evaluation Criteria
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Your startup will be evaluated based on a balanced mix of technical execution, business viability, and growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon
            const colorClasses = {
              blue: "bg-blue-50 text-blue-600 border-blue-100",
              purple: "bg-purple-50 text-purple-600 border-purple-100",
              green: "bg-green-50 text-green-600 border-green-100",
              orange: "bg-orange-50 text-orange-600 border-orange-100",
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
                <div className="flex items-start justify-between mb-6">
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center ${colorClasses[criterion.color as keyof typeof colorClasses]}`}
                  >
                    <Icon className="w-7 h-7" />
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-bold bg-gray-900 text-white`}
                  >
                    {criterion.weight}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {criterion.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{criterion.description}</p>

                <ul className="space-y-3">
                  {criterion.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mr-3" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>

        {/* Judging Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white border border-gray-200 rounded-2xl p-8 text-center max-w-4xl mx-auto shadow-sm"
        >
          <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            The Judging Process
          </h3>
          <p className="text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
            Sir Asharib Ali will personally evaluate each submission based on the criteria above. The evaluation
            process will be transparent, fair, and focused on recognizing genuine innovation and entrepreneurial
            spirit.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-gray-700">
            <span className="bg-gray-50 px-4 py-2 rounded-full border border-gray-100">📊 Data-Driven Analysis</span>
            <span className="bg-gray-50 px-4 py-2 rounded-full border border-gray-100">🎯 Fair & Transparent</span>
            <span className="bg-gray-50 px-4 py-2 rounded-full border border-gray-100">🚀 Innovation Focused</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
