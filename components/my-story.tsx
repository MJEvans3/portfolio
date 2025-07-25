"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

interface TimelineItem {
  year: string
  title: string
  description: string
  image?: string
  align: "left" | "right"
}

interface TimelineItemComponentProps {
  item: TimelineItem
  index: number
}

function TimelineItemComponent({ item, index }: TimelineItemComponentProps) {
  // Use inView for per-card animation
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })

  // Determine text alignment for description based on card index (1-based: 1,3,5 left; 2,4,6 right)
  const descriptionAlignment =
    index % 2 === 0
      ? "text-left" // 0,2,4 (1st,3rd,5th)
      : "text-right" // 1,3,5 (2nd,4th,6th)

  // Determine alignment for year and title
  const yearTitleAlignment =
    index % 2 === 0
      ? "text-left items-start" // 0,2,4 (1st,3rd,5th)
      : "text-right items-end"  // 1,3,5 (2nd,4th,6th)

  // Animation variants for each card
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative flex items-center mb-12 ${item.align === "left" ? "flex-row" : "flex-row-reverse"}`}
      style={{
        minHeight: '200px'
      }}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-slate-700 to-blue-500 z-10 shadow-md"></div>
      {/* Content */}
      <div className={`w-1/2 ${item.align === "left" ? "pr-8" : "pl-8"}`}>
        <motion.div
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
            transition: { duration: 0.3 },
          }}
          className={`bg-white/95 backdrop-blur-sm p-6 rounded-lg shadow-sm border border-slate-200 hover:border-blue-100 transition-all duration-300 ${
            item.align === "left" ? "ml-auto" : "mr-auto"
          } group flex flex-col ${yearTitleAlignment}`}
        >
          <div className={`text-sm font-semibold text-blue-500 mb-1 group-hover:text-blue-600 transition-colors duration-300 ${yearTitleAlignment}`}>
            {item.year}
          </div>
          <h3 className={`text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-800 transition-colors duration-300 ${yearTitleAlignment}`}>
            {item.title}
          </h3>
          <p
            className={`text-slate-600 mb-4 group-hover:text-slate-700 transition-colors duration-300 ${descriptionAlignment}`}
          >
            {item.description}
          </p>
          {item.image && (
            <div className="relative h-48 w-full rounded-md overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          )}
        </motion.div>
      </div>
      {/* Empty space for the other side */}
      <div className="w-1/2"></div>
    </motion.div>
  )
}

export default function MyStory() {
  // No need for parent animation controls, just render the timeline
  const ref = useRef(null)

  const timelineItems: TimelineItem[] = [
    {
      year: "2022",
      title: "From Istanbul to Queen Mary",
      description: "After graduating as Valedictorian with a 98.8% GPA from Tarabya British Schools in Istanbul, I made the bold decision to move to London alone to pursue Computer Science at Queen Mary University. Leaving behind 13 years in Turkiye, I embraced the challenge of starting fresh in a new country, determined to build my future at the intersection of technology and finance.",
      image: "/images/my-story/londonskyline.jpeg",
      align: "left",
    },
    {
      year: "2022",
      title: "Kitchen Floors to Tutorial Screens",
      description: "Within weeks of arriving in London, I went door-to-door until I landed my first job as a kitchen worker at Nando's. While mastering the art of high-pressure service, I simultaneously launched my online tutoring business, teaching GCSE and A-Level students. The contrast between flipping chicken and explaining calculus taught me that success comes from embracing every opportunity.",
      image: "/images/my-story/IMG_3497.jpeg",
      align: "right",
    },
    {
      year: "2023",
      title: "From Side Hustle to Business Experience",
      description: "What started as weekend tutoring sessions grew into a thriving business. By my second year, I was teaching 30+ hours per week during peak seasons, helping over 90 students achieve their academic goals with a 50%+ A* rate. This success allowed me to leave Nando's and take on a part-time Data Analyst role at BFT Consult, where I automated bid analysis processes and maintained their web presence.",
      image: "",
      align: "left",
    },
    {
      year: "2024",
      title: "Joining Tech Giants",
      description:
        "Landing a 12-month placement at IBM Technology Global Sales was a pivotal moment. As a Platform AI Engineer, I built 8 AI-powered MVPs for major financial clients, achieving a 55% conversion rate. From designing RAG pipelines for fintech investment teams to delivering live demos at Barclays and NatWest, I discovered my passion for applying AI to solve real financial challenges. IBM became my classroom for enterprise-scale innovation.",
      image: "/placeholder.svg?height=400&width=400",
      align: "right",
    },
    {
      year: "2025",
      title: "Selected for Wimbledon's Elite Team",
      description:
        "Being chosen from IBM's entire intern cohort to join the prestigious Wimbledon Project Team was surreal. For two weeks, I worked alongside tennis legends, delivering real-time data-driven insights to coaches, players, and global media. From umpire tablet setups to AI-powered content generation, I experienced firsthand how cutting-edge technology enhances the world's most prestigious sporting events.",
      image: "/placeholder.svg?height=400&width=400",
      align: "left",
    },
    {
      year: "2025",
      title: "Data Analytics at Scale",
      description:
        "Before I entered my final year, TikTok offered me the opportunity to dive into live commerce analytics as a Growth Analyst. Analysing seller KPIs and developing livestream content strategies taught me how data drives user engagement at unprecedented scale. This role perfectly bridges my technical skills with commercial insight, preparing me for the dynamic world of fintech.",
      image: "/images/my-story/IMG_4782.jpeg",
      align: "right",
    },
    {
      year: "What's Next?",
      title: "Ready for Quantitative Finance",
      description:
        "With graduation approaching in 2026, I'm actively pursuing Graduate opportunities in quantitative finance and fintech. Armed with real-world experience from IBM, Wimbledon, and TikTok, plus deep technical expertise in financial modeling and AI, I'm ready to contribute to the next generation of financial technology. The intersection of data, technology, and capital markets isn't just my career goal. It's my calling.",
      image: "/placeholder.svg?height=400&width=400",
      align: "left",
    },
  ]

  // Animation container for stagger effect
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <div className="max-w-4xl mx-auto" ref={ref}>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
        style={{ minHeight: '100px' }}
      >
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-slate-200 via-blue-100 to-slate-200"></div>

        {timelineItems.map((item, index) => (
          <TimelineItemComponent item={item} index={index} key={index} />
        ))}
      </motion.div>
    </div>
  )
}
