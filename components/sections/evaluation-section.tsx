"use client"

import { motion } from "framer-motion"
import { Clock, Code, Target, TrendingUp, Trophy, Star } from "lucide-react"

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
    <section id="evaluation" className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="relative mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -inset-8"
          >
            <svg width="100%" height="140" viewBox="0 0 600 140" className="w-full">
              <path
                d="M70,70 Q190,30 330,60 Q470,90 530,65 Q490,100 330,90 Q190,110 70,70 Z"
                fill="#F59E0B"
                opacity="0.25"
              />
              <path
                d="M90,60 Q210,40 350,55 Q490,70 520,60 Q485,85 350,80 Q210,90 90,60 Z"
                fill="#EAB308"
                opacity="0.2"
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
            Evaluation Criteria
          </motion.h2>

          {/* Decorative stars */}
          <motion.div
            initial={{ opacity: 0, rotate: -45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute top-0 left-1/4 text-yellow-400"
          >
            <Star className="w-8 h-8 fill-current animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 45 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute top-0 right-1/4 text-yellow-400"
          >
            <Star className="w-6 h-6 fill-current animate-pulse" />
          </motion.div>
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
            Reading time 4 minutes
          </span>
        </motion.div>

        {/* Criteria Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {criteria.map((criterion, index) => {
            const Icon = criterion.icon
            const colorClasses = {
              blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600 border-blue-200",
              purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600 border-purple-200",
              green: "from-green-500 to-green-600 bg-green-100 text-green-600 border-green-200",
              orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-600 border-orange-200",
            }

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl relative overflow-hidden group"
              >
                {/* Watercolor background on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                  <svg width="100%" height="100%" viewBox="0 0 300 200">
                    <path
                      d="M50,100 Q100,50 150,80 Q200,110 250,90 Q220,140 150,120 Q100,150 50,100 Z"
                      fill={`url(#gradient-${criterion.color})`}
                    />
                    <defs>
                      <linearGradient id={`gradient-${criterion.color}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop
                          offset="0%"
                          stopColor={
                            criterion.color === "blue"
                              ? "#3B82F6"
                              : criterion.color === "purple"
                                ? "#A855F7"
                                : criterion.color === "green"
                                  ? "#10B981"
                                  : "#F59E0B"
                          }
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            criterion.color === "blue"
                              ? "#1D4ED8"
                              : criterion.color === "purple"
                                ? "#7C3AED"
                                : criterion.color === "green"
                                  ? "#059669"
                                  : "#D97706"
                          }
                        />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${colorClasses[criterion.color as keyof typeof colorClasses].split(" ").slice(2).join(" ")}`}
                  >
                    <Icon className="w-8 h-8" />
                  </div>
                  <div
                    className={`px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${colorClasses[criterion.color as keyof typeof colorClasses].split(" ").slice(0, 2).join(" ")} text-white`}
                  >
                    {criterion.weight}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3" style={{ fontFamily: "Kalam, cursive" }}>
                    {criterion.title}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">{criterion.description}</p>

                  {/* Details List */}
                  <ul className="space-y-2">
                    {criterion.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + detailIndex * 0.05 }}
                        className="flex items-center text-gray-700"
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 ${colorClasses[criterion.color as keyof typeof colorClasses].split(" ")[2]}`}
                        />
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Judging Process */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-3xl p-8 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <path d="M0,100 Q100,50 200,80 Q300,110 400,90 L400,200 L0,200 Z" fill="#A855F7" />
            </svg>
          </div>

          <div className="relative z-10">
            <Trophy className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-purple-800 mb-4" style={{ fontFamily: "Kalam, cursive" }}>
              The Judging Process
            </h3>
            <p className="text-purple-700 text-lg leading-relaxed max-w-3xl mx-auto mb-6">
              Sir Asharib Ali will personally evaluate each submission based on the criteria above. The evaluation
              process will be transparent, fair, and focused on recognizing genuine innovation and entrepreneurial
              spirit.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-purple-600 font-medium">
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">📊 Data-Driven Analysis</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">🎯 Fair & Transparent</span>
              <span className="bg-white px-4 py-2 rounded-full shadow-sm">🚀 Innovation Focused</span>
            </div>
          </div>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center mt-16"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-orange-400 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
