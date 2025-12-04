"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Trophy,
  Users,
  Sparkles,
  Star,
  Zap,
  MessageCircle,
  Clock,
} from "lucide-react";
import Navigation from "@/components/navigation";
import AboutSection from "@/components/sections/about-section";
import RulesSection from "@/components/sections/rules-section";
import TimelineSection from "@/components/sections/timeline-section";
import EvaluationSection from "@/components/sections/evaluation-section";
import PrizeSection from "@/components/sections/prize-section";
import FAQSection from "@/components/sections/faq-section";

export default function Page() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Challenge ends on November 15, 2025 at 11:59 PM PKT (UTC+5)
      const endDate = new Date("2025-11-15T23:59:59+05:00");
      const now = new Date();
      const difference = endDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const isTimeUp =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navigation />

      {/* Hero Section - Completely Redesigned */}
      <section className="relative min-h-screen flex items-center justify-center px-3 sm:px-4 py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 font-medium text-sm sm:text-base"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                <Sparkles className="w-4 h-4 mr-2" />
                GIAIC Sir Asharib Class Exclusive
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                Build Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Dream Startup
                </span>
                <span className="block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-gray-600 font-medium mt-2">
                  Win $1000 in Rewards
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                Transform your innovative ideas into reality. Join the ultimate
                4-month startup challenge and compete for a{" "}
                <span className="font-bold text-yellow-600">
                  $1000 in Rewards
                </span>
                .
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px]"
                  style={{ fontFamily: "Kalam, cursive" }}
                  onClick={() =>
                    window.open("https://forms.gle/YQvWdj8sS4stP99D7", "_blank")
                  }
                >
                  Submit Your Startup
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg rounded-2xl transition-all duration-300 min-h-[56px] bg-white/80 backdrop-blur-sm"
                  style={{ fontFamily: "Kalam, cursive" }}
                  onClick={() =>
                    document
                      .getElementById("faqs")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Learn More
                </Button>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4"
              >
                <div className="flex items-center text-gray-600">
                  <Calendar className="w-5 h-5 mr-2 text-purple-600" />
                  <span
                    className="font-medium"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    4+ Months
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="w-5 h-5 mr-2 text-blue-600" />
                  <span
                    className="font-medium"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Solo or Team
                  </span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                  <span
                    className="font-medium"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Any Tech Stack
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Visual Elements */}
            <div className="relative">
              {/* Main Prize Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative bg-white rounded-3xl shadow-2xl p-6 sm:p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-300"
              >
                {/* Prize Header */}
                <div className="text-center mb-6">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                    className="inline-block"
                  >
                    <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  </motion.div>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Prize Poll
                  </h3>
                  <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                    $1000
                  </div>
                  <p
                    className="text-gray-600 font-medium"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                  In Rewards
                  </p>
                </div>

                {/* Laptop Mockup */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-4 mb-6">
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

                {/* Sponsor Info */}
                <div className="text-center bg-purple-50 rounded-2xl p-4">
                  <p
                    className="text-purple-700 font-medium"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    🎯 Personally Sponsored by
                  </p>
                  <p
                    className="text-purple-900 font-bold text-lg"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    Sir Asharib Ali
                  </p>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-4 h-4 text-white fill-current" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 8, 0],
                    rotate: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-2 -left-2 w-6 h-6 bg-pink-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-3 h-3 text-white" />
                </motion.div>
              </motion.div>

              {/* Timeline Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-gray-900 text-sm"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      July - November 2025
                    </p>
                    <p className="text-gray-600 text-xs">4+ Months to Build</p>
                  </div>
                </div>
              </motion.div>

              {/* Participants Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 hidden lg:block"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p
                      className="font-bold text-gray-900 text-sm"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      Sir Asharib Class
                    </p>
                    <p className="text-gray-600 text-xs">Exclusive Challenge</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Countdown Timer Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 lg:mt-24"
          >
            <div className="bg-gradient-to-br from-purple-100 via-pink-50 to-orange-100 rounded-3xl p-8 sm:p-12 border-2 border-purple-200 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" viewBox="0 0 400 200">
                  <path
                    d="M0,100 Q100,50 200,80 Q300,110 400,90 Q350,140 200,120 Q100,150 0,100 Z"
                    fill="#A855F7"
                  />
                  <path
                    d="M50,120 Q150,70 250,100 Q350,130 400,110 Q380,160 250,140 Q150,170 50,120 Z"
                    fill="#EC4899"
                  />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                {/* Timer Header */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="w-8 h-8 text-purple-600 mr-3" />
                    <h2
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      {isTimeUp ? "Challenge Completed!" : "Time Remaining"}
                    </h2>
                  </div>
                  <p
                    className="text-lg sm:text-xl text-gray-600"
                    style={{ fontFamily: "Kalam, cursive" }}
                  >
                    {isTimeUp
                      ? "Submissions are now closed. Winner announcement coming soon!"
                      : "Until submission deadline: November 15, 2025 at 11:59 PM PKT"}
                  </p>
                </motion.div>

                {/* Timer Display */}
                {!isTimeUp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
                  >
                    {[
                      { label: "Days", value: timeLeft.days, color: "purple" },
                      { label: "Hours", value: timeLeft.hours, color: "blue" },
                      {
                        label: "Minutes",
                        value: timeLeft.minutes,
                        color: "pink",
                      },
                      {
                        label: "Seconds",
                        value: timeLeft.seconds,
                        color: "orange",
                      },
                    ].map((item, index) => {
                      const colorClasses = {
                        purple:
                          "bg-purple-500 border-purple-300 shadow-purple-200",
                        blue: "bg-blue-500 border-blue-300 shadow-blue-200",
                        pink: "bg-pink-500 border-pink-300 shadow-pink-200",
                        orange:
                          "bg-orange-500 border-orange-300 shadow-orange-200",
                      };

                      return (
                        <motion.div
                          key={item.label}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: 1.8 + index * 0.1,
                          }}
                          className={`bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border-2 ${
                            colorClasses[
                              item.color as keyof typeof colorClasses
                            ].split(" ")[1]
                          } shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}
                        >
                          <div
                            className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${
                              colorClasses[
                                item.color as keyof typeof colorClasses
                              ].split(" ")[0]
                            } rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 shadow-lg`}
                          >
                            <span
                              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white"
                              style={{ fontFamily: "Kalam, cursive" }}
                            >
                              {item.value.toString().padStart(2, "0")}
                            </span>
                          </div>
                          <p
                            className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800"
                            style={{ fontFamily: "Kalam, cursive" }}
                          >
                            {item.label}
                          </p>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                )}

                {/* Challenge Completed Message */}
                {isTimeUp && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1.6 }}
                    className="bg-white rounded-2xl p-8 border-2 border-green-300 shadow-lg"
                  >
                    <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
                    <h3
                      className="text-3xl font-bold text-gray-900 mb-4"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      Thank You for Participating!
                    </h3>
                    <p
                      className="text-xl text-gray-600"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      All submissions are now being reviewed. The winner will be
                      announced soon!
                    </p>
                  </motion.div>
                )}

                {/* Motivational Message */}
                {!isTimeUp && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2.2 }}
                    className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-purple-200"
                  >
                    <p
                      className="text-lg sm:text-xl text-gray-700 font-medium"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      🚀 Every second counts! Build, iterate, and make your
                      startup dreams a reality.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-purple-400 rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Content Sections */}
      <AboutSection />
      <RulesSection />
      <TimelineSection />
      <EvaluationSection />
      <PrizeSection />
      <FAQSection />

      {/* WhatsApp Channel Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-3 sm:px-4 bg-gradient-to-br from-green-50 to-emerald-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 400 200">
              <path
                d="M0,100 Q100,50 200,80 Q300,110 400,90 L400,200 L0,200 Z"
                fill="#10B981"
              />
            </svg>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* WhatsApp Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Stay Connected
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Kalam, cursive" }}
            >
              Join Sir Asharib Class WhatsApp channel for tips, updates, and
              announcements.
            </motion.p>

            {/* WhatsApp Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="group bg-green-500 hover:bg-green-600 text-white px-8 py-4 text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl min-h-[56px]"
                style={{ fontFamily: "Kalam, cursive" }}
                onClick={() =>
                  window.open(
                    "https://whatsapp.com/channel/0029Vb30Egq2Jl8NZ7t3BA0A",
                    "_blank"
                  )
                }
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join WhatsApp Channel
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
