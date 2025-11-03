"use client"

import { motion } from "framer-motion"
import { Clock, PlayCircle, CheckCircle, Flag, Trophy } from "lucide-react"

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
    <section id="timeline" className="py-20 px-4 relative overflow-hidden">
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
                d="M70,60 Q180,30 320,55 Q460,80 530,50 Q490,85 320,75 Q180,90 70,60 Z"
                fill="#C084FC"
                opacity="0.3"
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
            Timeline & Milestones
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

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 to-purple-500 rounded-full hidden md:block"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon
              const isEven = index % 2 === 0

              const colorClasses = {
                green: "bg-green-100 text-green-600 border-green-300",
                blue: "bg-blue-100 text-blue-600 border-blue-300",
                orange: "bg-orange-100 text-orange-600 border-orange-300",
                purple: "bg-purple-100 text-purple-600 border-purple-300",
              }

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"} flex-col`}
                >
                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${isEven ? "md:pr-8" : "md:pl-8"}`}>
                    <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-100 hover:border-purple-200 transition-all duration-300 hover:shadow-xl">
                      <div className="flex items-center mb-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center mr-4 border-2 ${colorClasses[event.color as keyof typeof colorClasses]}`}
                        >
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: "Kalam, cursive" }}>
                            {event.title}
                          </h3>
                          <p className="text-purple-600 font-medium">{event.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-purple-500 rounded-full z-10"></div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
