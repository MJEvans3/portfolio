"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { useRef, useState, useEffect } from "react"

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
  const [isMobile, setIsMobile] = useState(false)
  const [videoStates, setVideoStates] = useState<boolean[]>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(hover: none) and (pointer: coarse)').matches)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const projects: Project[] = [
    {
      title: "Algorithmic Trading Backtest Dashboard",
      description:
      "Full stack backtesting platform for quantitative trading implementing nine algorithmic strategies I created with python, risk metrics calculation, and performance analytics including Sharpe ratios, drawdown analysis, and portfolio optimisation.",
      video: "/images/projectvids/Sequence01.mp4",
      image: "/images/projectvids/Sequence01-poster.jpg.png",
      tags: ["Financial Risk Metrics", "Python",  "Next.js","Statistical Modelling", "React"],
      liveUrl: "/images/projectvids/Sequence01.mp4",
      githubUrl: "https://github.com/MJEvans3/BacktestApp",
    },
    {
      title: "Black-Scholes Option Pricer with P&L",
      description:
      "Full stack advanced derivatives pricing model implementing Black-Scholes framework with Greeks calculation, implied volatility analysis, risk surface visualisation, and profit-loss scenario modeling for options trading with AI chat feature.",
      video: "/images/projectvids/Sequence02.mp4",
      image: "/images/projectvids/Sequence02-poster.jpg.png",
      tags: ["Options Pricing", "Risk Management","NumPy","Financial Mathematics", "Plotly", "Streamlit"],
      liveUrl: "/images/projectvids/Sequence02.mp4",
      githubUrl: "https://github.com/MJEvans3/Black-Scholes-Option-Pricer",
    },
    {
      title: "Tennis Match Prediction ML System",
      description:
      "Machine learning tournament predictor using ELO rating systems, feature engineering, and ensemble methods to forecast match outcomes through Monte Carlo simulations and probabilistic modelling frameworks based on large amounts of past tennis matches.",
      video: "/images/projectvids/Sequence03.mp4",
      image: "/images/projectvids/Sequence03-poster.jpg.png",
      tags: ["Machine Learning", "Feature Engineering", "XGBoost", "Random Forest", "Predictive Modelling"],
      liveUrl: "/images/projectvids/Sequence03.mp4",
      githubUrl: "https://github.com/MJEvans3/WimbledonMLPredictor",
    },
  ]

  useEffect(() => {
    setVideoStates(new Array(projects.length).fill(false))
  }, [])

  // Create refs for each video
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const timeoutRefs = useRef<(ReturnType<typeof setTimeout> | null)[]>([])

  const handleMouseEnter = (index: number) => () => {
    if (isMobile) return
    
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
    if (isMobile) return
    
    // Clear any existing timeout for this video
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]!)
    }
    
    // Pause the video
    videoRefs.current[index]?.pause()
  }

  const handleMobileClick = (index: number) => () => {
    if (!isMobile) return
    
    const video = videoRefs.current[index]
    const isPlaying = videoStates[index]
    
    if (isPlaying) {
      video?.pause()
    } else {
      video?.play()
    }
    
    setVideoStates(prev => {
      const newStates = [...prev]
      newStates[index] = !isPlaying
      return newStates
    })
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
          onClick={project.video && isMobile ? handleMobileClick(index) : undefined}
        >
          <div className="relative h-52 w-full overflow-hidden">
            {project.video ? (
              <>
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={project.video}
                  poster={project.image}
                  loop
                  muted
                  playsInline
                  preload={isMobile ? "metadata" : "auto"}
                  className="object-cover w-full h-full"
                  style={{ aspectRatio: '16/9', objectFit: 'cover' }}
                  onLoadedMetadata={() => {
                    if (isMobile) {
                      const video = videoRefs.current[index]
                      if (video) {
                        video.currentTime = 0.1
                      }
                    }
                  }}
                  onPlay={() => {
                    if (isMobile) {
                      setVideoStates(prev => {
                        const newStates = [...prev]
                        newStates[index] = true
                        return newStates
                      })
                    }
                  }}
                  onPause={() => {
                    if (isMobile) {
                      setVideoStates(prev => {
                        const newStates = [...prev]
                        newStates[index] = false
                        return newStates
                      })
                    }
                  }}
                />
                <div className={`absolute inset-0 bg-black/40 ${isMobile ? '' : 'group-hover:bg-transparent'} transition-colors duration-300`}></div>
                {isMobile && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`w-16 h-16 rounded-full bg-white/80 flex items-center justify-center transition-opacity duration-300 ${videoStates[index] ? 'opacity-0' : 'opacity-100'}`}>
                      <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                )}
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
