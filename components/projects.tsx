"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js and Tailwind CSS. Features smooth scrolling, animations, and a clean design.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product listings, shopping cart, user authentication, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered application that generates content based on user prompts. Utilizes natural language processing to create unique text.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Python", "TensorFlow", "React", "Flask"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

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
        >
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
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
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold mb-2 text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
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
