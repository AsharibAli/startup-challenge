"use client"

import { motion } from "framer-motion"
import { Clock, Users, Lightbulb } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with Watercolor Background */}
        <div className="relative mb-8 sm:mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="absolute -inset-2 sm:-inset-4"
          >
            <svg width="100%" height="80" viewBox="0 0 600 80" className="w-full sm:h-[120px]">
              <path
                d="M50,40 Q150,15 300,30 Q450,45 550,35 Q500,60 300,50 Q150,65 50,40 Z"
                fill="#E879F9"
                opacity="0.3"
              />
              <path
                d="M80,35 Q180,20 320,28 Q460,35 520,30 Q480,50 320,45 Q180,55 80,35 Z"
                fill="#C084FC"
                opacity="0.2"
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
            Here's Where We Start
          </motion.h2>
        </div>

        {/* Reading Time */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center mb-6 sm:mb-8"
        >
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-purple-600 mr-2" />
          <span className="text-purple-600 font-medium text-sm sm:text-base" style={{ fontFamily: "Kalam, cursive" }}>
            Reading time 3 minutes
          </span>
        </motion.div>

        {/* Content Cards - Mobile First */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-purple-100 hover:border-purple-200 transition-colors">
              <h3
                className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                A Blueprint for Innovation
              </h3>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">
                This isn't just another coding challenge. It's your gateway to entrepreneurship, designed to transform
                Monday 6-9 students into startup founders.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                Over four months, you'll build, market, and monetize your ideas while competing for a $1000 laptop prize
                personally sponsored by Sir Asharib Ali.
              </p>
            </div>
          </motion.div>

          {/* Feature Cards - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 sm:space-y-6"
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900" style={{ fontFamily: "Kalam, cursive" }}>
                  Innovation Focus
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Build any product you're passionate about - web apps, mobile apps, APIs, or innovative solutions.
              </p>
            </div>

            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900" style={{ fontFamily: "Kalam, cursive" }}>
                  Solo or Team
                </h4>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Work independently or form teams. Collaboration and individual excellence are both celebrated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
