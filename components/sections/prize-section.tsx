"use client"

import { motion } from "framer-motion"
import { Trophy, Gift, Star, Sparkles, Award } from "lucide-react"

export default function PrizeSection() {
  return (
    <section id="prize" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            The Grand Prize Pool
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Compete for rewards that kickstart your entrepreneurial journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Prize Image and Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-yellow-100 relative overflow-hidden">
              <div className="relative z-10 text-center">
                {/* Laptop Mockup with Video */}
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }} className="mb-8">
                  <div className="relative bg-gray-900 rounded-xl p-2 shadow-2xl">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black">
                      <iframe
                        src="https://www.youtube.com/embed/ugNNZR9sX0k"
                        title="GIAIC Sir Asharib Class Startup Challenge Video"
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <div className="flex flex-col items-center justify-center">
                    <div className="p-4 bg-yellow-100 rounded-full mb-4">
                      <Trophy className="w-8 h-8 text-yellow-600" />
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      $1000 in Rewards
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    Startup Challenge Winners will receive a cash reward of $1000, equally divided among the winners.
                  </p>

                  <div className="inline-block bg-white px-6 py-3 rounded-full border border-yellow-200 shadow-sm">
                    <p className="text-yellow-700 font-medium text-sm">
                      🎯 Personally sponsored by Sir Asharib Ali
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Prize Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900">
              What You'll Gain Beyond the Prize
            </h3>

            <div className="grid gap-6">
              {[
                {
                  icon: Award,
                  title: "Recognition & Portfolio",
                  description: "Showcase your winning project and gain recognition in the tech community",
                  color: "purple",
                },
                {
                  icon: Star,
                  title: "Entrepreneurial Experience",
                  description: "Real-world experience in building, marketing, and monetizing a product",
                  color: "blue",
                },
                {
                  icon: Trophy,
                  title: "Mentorship Access",
                  description: "Continued guidance from Sir Asharib Ali and industry connections",
                  color: "green",
                },
                {
                  icon: Sparkles,
                  title: "Career Opportunities",
                  description: "Open doors to internships, jobs, and future entrepreneurial ventures",
                  color: "orange",
                },
              ].map((benefit, index) => {
                const Icon = benefit.icon
                const colorClasses = {
                  purple: "bg-purple-50 text-purple-600",
                  blue: "bg-blue-50 text-blue-600",
                  green: "bg-green-50 text-green-600",
                  orange: "bg-orange-50 text-orange-600",
                }

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${colorClasses[benefit.color as keyof typeof colorClasses]}`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Winner Announcement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-900 rounded-2xl p-8 text-center text-white relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">
              Winner Announcement: Early December 2025
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
              The winner will be announced in a special ceremony, celebrating not just the prize recipient, but all
              participants who took on this entrepreneurial challenge!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
