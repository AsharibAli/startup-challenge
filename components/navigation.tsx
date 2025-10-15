"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside or on link
  useEffect(() => {
    const handleClickOutside = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside)
      document.body.style.overflow = "hidden" // Prevent background scroll
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.removeEventListener("click", handleClickOutside)
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Rules", href: "#rules" },
    { name: "Timeline", href: "#timeline" },
    { name: "Prize", href: "#prize" },
    { name: "FAQs", href: "#faqs" },
  ]

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    // Small delay to allow menu to close before scrolling
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3 sm:py-4">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <h1 className="text-lg sm:text-2xl font-bold text-purple-600" style={{ fontFamily: "Kalam, cursive" }}>
              <span className="hidden sm:inline">Startup Challenge</span>
              <span className="sm:hidden">Startup Challenge</span>
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative text-gray-700 hover:text-purple-600 transition-colors duration-300 text-base xl:text-lg font-medium group py-2 px-1"
                style={{ fontFamily: "Kalam, cursive" }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all duration-300 group-hover:w-full"></span>

                {/* Watercolor hover effect */}
                <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 40" className="absolute inset-0">
                    <path
                      d="M10,20 Q30,10 50,18 Q70,25 90,20 Q85,30 50,25 Q30,30 10,20 Z"
                      fill="#E879F9"
                      opacity="0.2"
                    />
                  </svg>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              className="text-purple-600 p-2 hover:bg-purple-50"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
              style={{ top: "70px" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl mx-3 mt-4 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="px-4 py-6 space-y-1">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => handleNavClick(item.href)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="block w-full text-left text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300 text-lg font-medium py-3 px-4 rounded-xl"
                      style={{ fontFamily: "Kalam, cursive" }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
