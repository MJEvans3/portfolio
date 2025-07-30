"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { useRef } from "react"

interface Project {
  title: string
  description: string
  image?: string
  video?: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Algorithmic Trading Backtest Dashboard",
      description:
      "Full stack backtesting platform for quantitative trading implementing nine algorithmic strategies I created with python, risk metrics calculation, and performance analytics including Sharpe ratios, drawdown analysis, and portfolio optimisation.",
      video: "/images/projectvids/Sequence01.mov",
      tags: ["Financial Risk Metrics", "Python",  "Next.js","Statistical Modelling", "React"],
      liveUrl: "/images/projectvids/Sequence01.mov",
      githubUrl: "https://github.com/MJEvans3/BacktestApp",
    },
    {
      title: "Black-Scholes Option Pricer with P&L",
      description:
      "Full stack advanced derivatives pricing model implementing Black-Scholes framework with Greeks calculation, implied volatility analysis, risk surface visualisation, and profit-loss scenario modeling for options trading with AI chat feature.",
      video: "/images/projectvids/Sequence02.mov",
      tags: ["Options Pricing", "Risk Management","NumPy","Financial Mathematics", "Plotly", "Streamlit"],
      liveUrl: "/images/projectvids/Sequence02.mov",
      githubUrl: "https://github.com/MJEvans3/Black-Scholes-Option-Pricer",
    },
    {
      title: "Tennis Match Prediction ML System",
      description:
      "Machine learning tournament predictor using ELO rating systems, feature engineering, and ensemble methods to forecast match outcomes through Monte Carlo simulations and probabilistic modelling frameworks based on large amounts of past tennis matches.",
      video: "/images/projectvids/Sequence03.mov",
      tags: ["Machine Learning", "Feature Engineering", "XGBoost", "Random Forest", "Predictive Modelling"],
      liveUrl: "/images/projectvids/Sequence03.mov",
      githubUrl: "https://github.com/MJEvans3/WimbledonMLPredictor",
    },
  ]

  // Create refs for each video
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const timeoutRefs = useRef<(ReturnType<typeof setTimeout> | null)[]>([])

  const handleMouseEnter = (index: number) => () => {
    // Clear any existing timeout for this video
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]!)
    }
    
    // Set new timeout to play the video
    timeoutRefs.current[index] = setTimeout(() => {
      videoRefs.current[index]?.play()
    }, 1000)
  }

  const handleMouseLeave = (index: number) => () => {
    // Clear any existing timeout for this video
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]!)
    }
    
    // Pause the video
    videoRefs.current[index]?.pause()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 hover:border-blue-100 hover:shadow-lg transition-all duration-500 flex flex-col h-full group"
          whileHover={{
            y: -10,
            transition: { duration: 0.3 },
          }}
          onMouseEnter={project.video ? handleMouseEnter(index) : undefined}
          onMouseLeave={project.video ? handleMouseLeave(index) : undefined}
        >
          <div className="relative h-52 w-full overflow-hidden">
            {project.video ? (
              <>
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={project.video}
                  loop
                  muted
                  playsInline
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300"></div>
              </>
            ) : (
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
              <div className="p-4 w-full">
                <div className="flex gap-3 justify-end">
                  {project.liveUrl && (
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <ExternalLink size={14} />
                    </Link>
                  )}
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center text-slate-800 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                    >
                      <Github size={14} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-lg font-semibold mb-1 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-600 mb-2 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-full border border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
