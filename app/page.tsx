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
    <div className="min-h-screen bg-white font-sans selection:bg-purple-100 selection:text-purple-900">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob" />
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-pink-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-32 left-1/3 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-600">
              GIAIC Sir Asharib Class Exclusive
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-6"
          >
            Build Your <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Dream Startup
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transform your innovative ideas into reality. Join the ultimate
            4-month startup challenge and compete for a{" "}
            <span className="font-semibold text-gray-900">
              $1000 Prize Pool
            </span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold bg-gray-900 text-white hover:bg-gray-800 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              onClick={() =>
                window.open("https://forms.gle/YQvWdj8sS4stP99D7", "_blank")
              }
            >
              Submit Your Startup
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base font-semibold border-gray-200 hover:bg-gray-50 text-gray-700 rounded-full transition-all"
              onClick={() =>
                document
                  .getElementById("about")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-10 border-t border-gray-100"
          >
            <div className="flex flex-col items-center">
              <div className="p-3 bg-purple-50 rounded-2xl mb-4">
                <Calendar className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">4+ Months</h3>
              <p className="text-sm text-gray-500">Duration</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-blue-50 rounded-2xl mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Solo or Team</h3>
              <p className="text-sm text-gray-500">Participation</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-3 bg-green-50 rounded-2xl mb-4">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">$1000 Pool</h3>
              <p className="text-sm text-gray-500">Rewards</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-50 rounded-full blur-3xl -ml-32 -mb-32 opacity-50" />
            
            <div
              className={`relative z-10 flex flex-col items-center gap-12 ${
                isTimeUp ? "justify-center" : "lg:flex-row justify-between"
              }`}
            >
              <div
                className={`text-center max-w-xl ${
                  isTimeUp ? "mx-auto" : "lg:text-left"
                }`}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  {isTimeUp ? "Challenge Completed" : "Time is Ticking"}
                </h2>
                <p className="text-lg text-gray-600">
                  {isTimeUp
                    ? "The submission window has closed. Winners will be Announce on 7th December 2025 (on-site) in the GIAIC Class by Sir Asharib Ali."
                    : "Don't miss out on this opportunity. Submit your startup idea before the deadline."}
                </p>
              </div>

              {!isTimeUp && (
                <div className="grid grid-cols-4 gap-4 sm:gap-6">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col items-center">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-2xl flex items-center justify-center mb-2 shadow-lg">
                        <span className="text-2xl sm:text-3xl font-bold text-white font-mono">
                          {item.value.toString().padStart(2, "0")}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <AboutSection />
      <RulesSection />
      <TimelineSection />
      <EvaluationSection />
      <PrizeSection />
      <FAQSection />

      {/* WhatsApp CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex p-4 bg-green-50 rounded-full mb-6">
            <MessageCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Join the official WhatsApp channel for real-time updates, tips, and announcements regarding the challenge.
          </p>
          <Button
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 h-14 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all"
            onClick={() =>
              window.open(
                "https://whatsapp.com/channel/0029Vb30Egq2Jl8NZ7t3BA0A",
                "_blank"
              )
            }
          >
            Join WhatsApp Channel
          </Button>
        </div>
      </section>
    </div>
  );
}
