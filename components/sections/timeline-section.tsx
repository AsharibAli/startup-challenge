"use client"

import { motion } from "framer-motion"
import { PlayCircle, CheckCircle, Flag, Trophy } from "lucide-react"

export default function TimelineSection() {
  const timelineEvents = [
    {
      date: "June 30, 2025",
      title: "Challenge Kickoff",
      description: "Registration opens and the challenge officially begins. Start building your innovative startup!",
      icon: PlayCircle,
      color: "green",
    },
    {
      date: "August 15, 2025",
      title: "Mid-Point Check-in",
      description:
        "Optional progress sharing session. Get feedback, connect with mentors, and showcase your development.",
      icon: CheckCircle,
      color: "blue",
    },
    {
      date: "September 15, 2025",
      title: "Final Sprint",
      description: "Last six weeks! Focus on polishing your product, marketing strategy, and user acquisition.",
      icon: Flag,
      color: "orange",
    },
    {
      date: "November 15, 2025",
      title: "Submission Deadline",
      description: "Final project submissions due. Include your product, demo video, and business metrics.",
      icon: Trophy,
      color: "purple",
    },
  ]

  return (
    <section id="timeline" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Timeline & Milestones
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Key dates and checkpoints to keep you on track for success.
          </motion.p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              const colorClasses = {
                green: "bg-green-50 text-green-600 border-green-100",
                blue: "bg-blue-50 text-blue-600 border-blue-100",
                orange: "bg-orange-50 text-orange-600 border-orange-100",
                purple: "bg-purple-50 text-purple-600 border-purple-100",
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-600 rounded-full z-10 mt-6 md:mt-0"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 border ${colorClasses[event.color as keyof typeof colorClasses]}`}
                        >
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900">
                            {event.title}
                          </h3>
                          <p className="text-sm text-purple-600 font-medium">{event.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
