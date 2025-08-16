"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronDown } from "lucide-react"

interface WorkExperienceItem {
  company: string
  role: string
  period: string
  description: string[]
  skills: string[]
}

interface WorkExperienceCardProps {
  experience: WorkExperienceItem
  index: number
  isFirst: boolean
}

function WorkExperienceCard({ experience, index, isFirst }: WorkExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(isFirst)
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, {
    margin: "-20% 0px -20% 0px",
  })

  // Removed useEffect for auto-expansion

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.05 }} // Reduced delay
      viewport={{ once: true }}
      className={`bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 ${
        isExpanded ? "border-blue-100 shadow-md" : ""
      }`}
    >
      <div className="p-6 cursor-pointer flex justify-between items-center" onClick={toggleExpand}>
        <div>
          <h3 className="text-xl font-semibold text-slate-900">{experience.company}</h3>
          <p className="text-slate-600">
            {experience.role} | {experience.period}
          </p>
        </div>
        <ChevronDown
          className={`text-slate-500 transition-transform duration-500 ${isExpanded ? "rotate-180" : ""}`}
          size={20}
        />
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: {
                height: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }, // Faster animation
                opacity: { duration: 0.2, delay: 0.1 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                opacity: { duration: 0.1 },
              },
            }}
            className="border-t border-slate-100 overflow-hidden"
          >
            <div className="px-6 pb-6 pt-4">
              <ul className="text-slate-700 mb-4 list-disc list-inside space-y-2">
                {experience.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full hover:bg-blue-50 hover:text-blue-700 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function WorkExperience() {
  const experiences: WorkExperienceItem[] = [
    {
      company: "TikTok",
      role: "Live Product Management Growth Analyst",
      period: "August 2025 - Present",
      description: [
        "Analysing seller KPIs to deliver performance insights and recommend livestream content strategies, contributing to growth planning through data-driven reports and identifying emerging live commerce trends.",
        "Activated high-potential merchants through targeted outreach, livestream onboarding, and growth support.",
      ],
      skills: [
        "Data Analysis",
        "Growth Strategy",
        "Product Management",
        "Operations",
        "Strategic Planning",
      ],
    },
    {
      company: "Wimbledon",
      role: "Project Management Team Match Data Analytics",
      period: "June 2025 - July 2025",
      description: [
        "Selected from IBM’s intern cohort to join the elite Wimbledon Project Team to deliver real-time data-driven insights to coaches, players, and global media using advanced match intelligence tools.",
        "Collaborated across technical and broadcast teams to optimise data workflows, including umpire tablet setups, live match data capture, and AI-powered content generation on the Wimbledon app. This unique opportunity allowed me to contribute to one of tennis's most iconic tournaments while honing my technical and communication skills."
      ],
      skills: [
        "Project Management",
        "AI Analytics",
        "Data Workflows",
        "Sports Technology",
        "Live Systems",
      ],
    },
    {
      company: "IBM",
      role: "Platform AI Engineer - Client Engineering - Technology Sales",
      period: "August 2024 - July 2025",
      description: [
        "Delivered 8+ AI-powered MVPs for financial and public sector clients, achieving a 55% client conversion rate in 12 months using IBM Cloud Pak for Data and watsonx.",
        "Designed and implemented advanced AI solutions, including chatbot upgrades for Tier 1 banks and agent-based RAG pipelines for extracting insights from unstructured financial data.",
        "Showcased technical leadership through high-profile demos and presentations, such as a 60-minute live demo at Finastra GEN AI XPO 2025 and leading AI solution showcases for hackathons at Barclays, Lloyds, and NatWest."
      ],
      skills: [
        "Artificial Intelligence",
        "Python Dev",
        "Technical Consulting",
        "Client Relations",
        "MVP Dev",
        "RAG Systems",
        "Cloud Technologies",
        "Presentation Skills",
        "Financial Technology",
      ],
    },
    {
      company: "GCSE & A Level Tutor",
      role: "for Maths, Physics, Economics",
      period: "December 2022 – July 2025",
      description: [
        "Delivered over 800 hours of personalized instruction to 90+ students in mathematics, physics, and economics, with more than 50% achieving A* grades.",
        "Developed a talent for communicating complex concepts clearly and adapting teaching methods to diverse learning needs while maintaining motivation."
      ],
      skills: ["Teaching", "Communication", "Mentorship", "Curriculum Design"],
    },
    {
      company: "BFT Consult",
      role: "Data Analyst",
      period: "December 2022 – July 2023",
      description: [
        "Streamlined the company's bid analysis process by automating Excel-based data analysis workflows, enabling efficient identification of trends and risk mitigation strategies.",
        "Maintained and updated the company website to ensure real-time information delivery on bid opportunities for clients."
      ],
      skills: ["Data Analysis", "Excel Automation", "Web Dev", "Risk Analysis", "Process Improvement"],
    },
    {
      company: "Nando's",
      role: "Waiter / Kitchen Worker",
      period: "August – December 2022",
      description: [
        "Consistently delivered exceptional customer service while managing high-pressure situations and efficiently resolving customer concerns.",
        "Strengthened my ability to work effectively in team-oriented, time-sensitive environments."
      ],
      skills: ["Customer Service", "Teamwork", "Problem-solving", "Time Management"],
    },
  ]

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {experiences.map((exp, index) => (
        <WorkExperienceCard key={index} experience={exp} index={index} isFirst={index === 0} />
      ))}
    </div>
  )
}
