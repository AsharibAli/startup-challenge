"use client"

import { motion } from "framer-motion"
import { Users, Lightbulb, Target, Rocket } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            About the Challenge
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            A comprehensive program designed to transform students into founders.
            Build, launch, and scale your ideas with support from the community.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 text-purple-600">
                  <Target className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  A Blueprint for Innovation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  This isn't just another coding challenge. It's your gateway to
                  entrepreneurship, designed to transform Sir Asharib Class
                  students into startup founders.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-pink-100 text-pink-600">
                  <Rocket className="w-6 h-6" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Real-World Impact
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Over four months, you'll build, market, and monetize your
                  ideas while competing for a $1000 prize pool personally
                  sponsored by Sir Asharib Ali.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid gap-6"
          >
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Innovation Focus
                </h4>
              </div>
              <p className="text-gray-600">
                Build any product you're passionate about - web apps, mobile
                apps, APIs, or innovative solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Solo or Team
                </h4>
              </div>
              <p className="text-gray-600">
                Work independently or form teams. Collaboration and individual
                excellence are both celebrated.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
