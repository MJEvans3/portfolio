"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        message: "",
      })

      // Reset the submitted state after 5 seconds instead of immediately
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <footer id="contact" className="bg-slate-900 text-white py-16 relative z-10">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            <div className="space-y-4">
              <motion.div className="flex items-center group" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Mail
                  className="mr-3 text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
                  size={20}
                />
                <a href="mailto:m.johnevans3@gmail.com" className="hover:text-blue-300 transition-colors duration-300">
                m.johnevans3@gmail.com
                </a>
              </motion.div>

              <motion.div className="flex items-center group" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <Phone
                  className="mr-3 text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
                  size={20}
                />
                <a href="tel:+447873609837" className="hover:text-blue-300 transition-colors duration-300">
                  +44 7873609837
                </a>
              </motion.div>

              <motion.div className="flex items-center group" whileHover={{ x: 5, transition: { duration: 0.2 } }}>
                <MapPin
                  className="mr-3 text-slate-400 group-hover:text-blue-400 transition-colors duration-300"
                  size={20}
                />
                <span>London, United Kingdom</span>
              </motion.div>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-medium mb-3">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://www.linkedin.com/in/mehmet-john-evans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="LinkedIn Profile"
                  whileHover={{ y: -5, scale: 1.2, transition: { duration: 0.2 } }}
                >
                  <Linkedin size={24} />
                </motion.a>
                <motion.a
                  href="https://github.com/MJEvans3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors duration-300"
                  aria-label="GitHub Profile"
                  whileHover={{ y: -5, scale: 1.2, transition: { duration: 0.2 } }}
                >
                  <Github size={24} />
                </motion.a>
                <motion.a
                  href="https://www.instagram.com/mehmetjohnevans/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-500 transition-colors duration-300"
                  aria-label="Instagram Profile"
                  whileHover={{ y: -5, scale: 1.2, transition: { duration: 0.2 } }}
                >
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <circle
                      cx="17"
                      cy="7"
                      r="1.2"
                      fill="currentColor"
                    />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Send Me a Message</h3>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-slate-800 p-6 rounded-lg text-center"
              >
                <h4 className="text-lg font-medium mb-2">Thank You!</h4>
                <p className="text-slate-300">Your message has been sent successfully. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all duration-300"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2 px-4 bg-gradient-to-r from-slate-700 to-blue-600 hover:from-slate-600 hover:to-blue-500 text-white font-medium rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-70"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Mehmet John Evans. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
