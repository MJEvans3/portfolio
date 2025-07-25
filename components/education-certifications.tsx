"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Education {
  institution: string
  degree: string[]
  details: string[]
}

interface Certification {
  title: string
  issuer: string
  image: string
  description: string
}

export default function EducationCertifications() {
  const education: Education[] = [
    {
      institution: "Queen Mary University of London",
      degree: [
        "BSc Computer Science with Industrial Experience",
        "Expected: First Class (1:1)",
      ],
      details: [

        "Relevant Modules: Bayesian Decision & Risk Analysis, Data Mining, Big Data Processing, Neural Networks & Deep Learning, Software Engineering, Web Development, OOP, Computer Networks, Operating Systems, Databases",
        "Societies: Jiu Jitsu, Chess Club",
      ],
    },
    {
      institution: "Tarabya British Schools",
      degree: [
        "Valedictorian of Middle School",
        "Valedictorian of High School",
        "Head Boy of the Student Council"
      ],
      details: [
        "A Levels: Physics (A*), Economics (A*), Turkish (A*), Mathematics (A)",
        "IGCSE: 7 A*s",
        "Final GPA: 98.8%",
      ],
    },
  ]

  const certifications: Certification[] = [
    {
      title: "IBM Core Specialty: Technical Specialist (Foundational)",
      issuer: "IBM",
      image: "/images/certifications/core-specialty-ibm-technical-specialist.png",
      description: "Demonstrated foundational skills and experience as an IBM Technical Specialist, contributing to solutions and understanding business needs.",
    },
    {
      title: "Enterprise Design Thinking Practitioner",
      issuer: "IBM",
      image: "/images/certifications/entreprise-design-thinking-practitioner.png",
      description: "Acquired and applied Enterprise Design Thinking principles to drive user-centered innovation in real-world projects.",
    },
    {
      title: "Financial Markets",
      issuer: "Yale University (Coursera)",
      image: "/images/certifications/Financial Markets (Yale University) – Coursera.png",
      description: "Completed an in-depth course on financial markets, risk management, and behavioral finance, with a focus on real-world applications.",
    },
    {
      title: "Game Theory",
      issuer: "Stanford University (Coursera)",
      image: "/images/certifications/Game Theory (Stanford University) – Coursera .png",
      description: "Studied strategic interaction, Nash equilibrium, and applications of game theory in economics and social sciences.",
    },
    {
      title: "IBM AI Developer Professional Certificate",
      issuer: "IBM (Coursera)",
      image: "/images/certifications/IBM AI Developer Professional Certificate (10 Course Series) – Coursera                                                 .png",
      description: "Earned a 10-course certificate in AI development, covering generative AI, chatbots, and hands-on software engineering projects.",
    },
    {
      title: "InstructLab: Democratizing AI Models at Scale",
      issuer: "IBM",
      image: "/images/certifications/instructlab-democratising-ai-models-at-scale.png",
      description: "Demonstrated foundational knowledge of InstructLab, LAB methodology, and customizing open-source AI language models.",
    },
    {
      title: "Node-RED: Basics to Bots",
      issuer: "IBM / Cognitive Class",
      image: "/images/certifications/node-red-basics-to-bots.png",
      description: "Built applications in Node-RED, including REST APIs and cognitive bots using IBM Watson services and IBM Cloud.",
    },
    {
      title: "Python and Statistics for Financial Analysis",
      issuer: "HK University (Coursera)",
      image: "/images/certifications/Python and Statistics for Financial Analysis (Honk Kong University) – Coursera.png",
      description: "Applied Python and statistical methods to analyze financial data, build trading models, and visualize results.",
    },
    {
      title: "The Complete Investment Banking Course 2024",
      issuer: "Udemy",
      image: "/images/certifications/The Complete Investment Banking Course – Udemy                                                                                    .png",
      description: "Comprehensive training in investment banking, financial modeling, valuation, and capital markets.",
    },
    {
      title: "IBM watsonx.ai Technical Essentials",
      issuer: "IBM",
      image: "/images/certifications/watonx.ai-technical-essentials.png",
      description: "Gained foundational knowledge of IBM watsonx.ai, generative AI, and prompt engineering on the watsonx platform.",
    },
    {
      title: "watsonx Assistant Sales Foundation",
      issuer: "IBM",
      image: "/images/certifications/watsonx-assistant-data-and-ai.png",
      description: "Demonstrated expertise in IBM watsonx Assistant sales, product value, and customer use cases.",
    },
    {
      title: "IBM watsonx Essentials",
      issuer: "IBM",
      image: "/images/certifications/watsonx-essentials-data-and-ai.png",
      description: "Understands IBM watsonx platform use cases, responsible AI workflows, and IBM's AI strategy.",
    },
    {
      title: "watsonx.ai Data Science and MLOps",
      issuer: "IBM",
      image: "/images/certifications/watsonx.ai-data-science-and-mlops.png",
      description: "Hands-on with IBM watsonx.ai Data Science and MLOps. Supports all MLOps lifecycle phases.",
    },
    {
      title: "Quantitative Finance and Algorithmic Trading",
      issuer: "Udemy",
      image: "/images/certifications/quantitative finance and algorithmic trading udemy.png",
      description: "Financial engineering, portfolio theory, Black-Scholes, and Python for quantitative finance basics.",
    },
    {
      title: "watsonx Assistant Sales Intermediate",
      issuer: "IBM",
      image: "/images/certifications/watsonx-assistant-sales-inermediate.png",
      description: "Advanced IBM watsonx Assistant knowledge. Demonstrated live demo and technical sales expertise.",
    },
    // Add any additional certificates here if needed (currently 13, but only 13 real images are listed in the folder)
  ]

  const certificationLinks: Record<string, string | undefined> = {
    "IBM Core Specialty: Technical Specialist (Foundational)": "https://www.credly.com/badges/7251f0a3-0fa2-453a-8bad-f5ed4b8902ad/public_url",
    "IBM watsonx Essentials": "https://www.credly.com/badges/ed98a448-5b9e-49e3-8633-ea6fb5a72d6b/public_url",
    "Enterprise Design Thinking Practitioner": "https://www.credly.com/badges/a0afe838-52ac-4a4d-ab20-ecbe95b9bd1c/public_url",
    "IBM watsonx.ai Technical Essentials": "https://www.credly.com/badges/7fe21062-7fb0-4e24-8262-fb7c90b37fd8/public_url",
    "watsonx Assistant Sales Intermediate": "https://www.credly.com/badges/49d91da5-e7fc-4a48-8c0d-4d55877f9e74/public_url",
    "InstructLab: Democratizing AI Models at Scale": "https://www.credly.com/badges/01b6e57f-f0b7-414b-8be1-3b38562600fa/public_url",
    "watsonx.ai Data Science and MLOps": "https://www.credly.com/badges/eca09ae8-682d-4386-adb1-89e8c1cacb5d/public_url",
    "watsonx Assistant Sales Foundation": "https://www.credly.com/badges/de529160-8c66-4bc5-9fef-9fec0ebf9154/public_url",
  }

  return (
    <div className="space-y-12">
      {/* Education Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-sm border border-slate-200 p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{edu.institution}</h3>
            <div className="text-blue-600 font-medium mb-4">
            {edu.degree.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
            <div className="space-y-2">
              {edu.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="text-slate-600">
                  {detail}
                </p>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications - 3 rows of 5 */}
      <div className="space-y-4">
        {[0, 1, 2].map((row) => (
          <div key={row} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {certifications.slice(row * 5, row * 5 + 5).map((cert, index) => {
              const externalLink = certificationLinks[cert.title]
              const imageLink = cert.image
              // Remove link for Udemy Quantitative Finance and Algorithmic Trading
              const isUdemyQuant = cert.title === "Quantitative Finance and Algorithmic Trading"
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.5) }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:border-blue-100 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex flex-col"
                >
                  <div className="p-4 flex items-center">
                    <div className="w-1/3 relative h-16">
                      {isUdemyQuant ? (
                        <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-contain" />
                      ) : externalLink ? (
                        <a href={externalLink} target="_blank" rel="noopener noreferrer">
                          <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-contain cursor-pointer" />
                        </a>
                      ) : (
                        <a href={imageLink} target="_blank" rel="noopener noreferrer">
                          <Image src={cert.image || "/placeholder.svg"} alt={cert.title} fill className="object-contain cursor-pointer" />
                        </a>
                      )}
                    </div>
                    <div className="w-2/3 pl-4">
                      <h4 className="text-sm font-semibold text-slate-900 line-clamp-2">{cert.title}</h4>
                      <p className="text-xs text-slate-500">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="p-3 bg-slate-50 text-xs text-slate-600 border-t border-slate-100 mt-auto">
                    {cert.description}
                  </div>
                </motion.div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}
