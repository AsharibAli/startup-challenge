"use client"

import { motion } from "framer-motion"
import { Clock, Trophy, Gift, Star, Sparkles, Award } from "lucide-react"

export default function PrizeSection() {
  return (
    <section id="prize" className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50">
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
              <defs>
                <linearGradient id="prize-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
                  <stop offset="50%" stopColor="#EAB308" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F97316" stopOpacity="0.3" />
                </linearGradient>
              </defs>
              <path
                d="M60,70 Q180,25 320,55 Q460,85 540,60 Q500,95 320,85 Q180,105 60,70 Z"
                fill="url(#prize-gradient)"
                className="animate-pulse"
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
            The Grand Prize
          </motion.h2>

          {/* Floating sparkles */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="absolute -top-4 left-1/4 text-yellow-400"
          >
            <Sparkles className="w-8 h-8 fill-current" />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, -5, 5, 0],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
            className="absolute -top-2 right-1/4 text-orange-400"
          >
            <Star className="w-6 h-6 fill-current" />
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
          <Clock className="w-4 h-4 text-orange-600 mr-2" />
          <span className="text-orange-600 font-medium" style={{ fontFamily: "Kalam, cursive" }}>
            Reading time 2 minutes
          </span>
        </motion.div>

        {/* Main Prize Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Prize Image and Details */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-yellow-200 relative overflow-hidden">
              {/* Watercolor background */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 300 200">
                  <path d="M50,100 Q100,50 150,80 Q200,110 250,90 Q220,140 150,120 Q100,150 50,100 Z" fill="#F59E0B" />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                {/* Laptop Mockup with Video */}
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="mb-6">
                  <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4">
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
                    <div className="h-2 bg-gray-700 rounded-b-lg"></div>
                  </div>
                </motion.div>

                <div className="space-y-4">
                  <div className="flex items-center justify-center mb-4">
                    <Trophy className="w-12 h-12 text-yellow-600 mr-3" />
                    <h3 className="text-3xl font-bold text-gray-900" style={{ fontFamily: "Kalam, cursive" }}>
                      $1000 Laptop
                    </h3>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    A brand new, high-performance laptop worth $1000 - perfect for your future development projects and
                    entrepreneurial journey.
                  </p>

                  <div className="bg-yellow-50 rounded-2xl p-4 border border-yellow-200">
                    <p className="text-yellow-800 font-medium" style={{ fontFamily: "Kalam, cursive" }}>
                      🎯 Personally sponsored by Sir Asharib Ali
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-4 -right-4 text-yellow-400"
            >
              <Gift className="w-12 h-12 fill-current opacity-80" />
            </motion.div>
          </motion.div>

          {/* Prize Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontFamily: "Kalam, cursive" }}>
              What You'll Gain Beyond the Prize
            </h3>

            <div className="space-y-4">
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
                  purple: "bg-purple-100 text-purple-600 border-purple-200",
                  blue: "bg-blue-100 text-blue-600 border-blue-200",
                  green: "bg-green-100 text-green-600 border-green-200",
                  orange: "bg-orange-100 text-orange-600 border-orange-200",
                }

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${colorClasses[benefit.color as keyof typeof colorClasses]}`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1" style={{ fontFamily: "Kalam, cursive" }}>
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Winner Announcement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-400 to-orange-400 rounded-3xl p-8 text-center text-white relative overflow-hidden"
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-20">
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <pattern id="stars" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="20" cy="20" r="2" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#stars)" />
            </svg>
          </div>

          <div className="relative z-10">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="inline-block mb-4"
            >
              <Trophy className="w-16 h-16 mx-auto" />
            </motion.div>

            <h3 className="text-3xl font-bold mb-4" style={{ fontFamily: "Kalam, cursive" }}>
              Winner Announcement: Early December 2025
            </h3>
            <p className="text-xl leading-relaxed max-w-2xl mx-auto">
              The winner will be announced in a special ceremony, celebrating not just the prize recipient, but all
              participants who took on this entrepreneurial challenge!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
