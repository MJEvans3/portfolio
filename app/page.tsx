"use client"
import Navbar from "@/components/navbar"
import WorkExperience from "@/components/work-experience"
import Projects from "@/components/projects"
import MyStory from "@/components/my-story"
import Footer from "@/components/footer"
import EducationCertifications from "@/components/education-certifications"
import TiltedCard from "@/components/TiltedCard"
import Masonry from "../components/Masonry"

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen relative">
      <Navbar />
      {/* Hero Section with extended background paths */}
      <section id="home" className="h-screen flex items-center relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-20">
          <div className="flex flex-col lg:flex-row items-center h-full w-full justify-between">
            {/* Text Content */}
            <div className="flex flex-col space-y-6 text-left items-start lg:pl-24 flex-1">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
                  Computer Science Class of 26'
                </h1>
                <div className="space-y-2">
                  <p className="text-lg md:text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
                    Live Growth Project Manager at TikTok
                  </p>
                  <p className="text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
                    Ex-IBM Platform Engineer, Ex-Wimbledon Data Analyst
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 justify-start mt-8 w-full">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-gradient-to-r from-slate-800 to-blue-600 px-8 text-sm font-medium text-white shadow transition-all duration-300 hover:from-slate-700 hover:to-blue-500 hover:shadow-lg hover:scale-105"
                >
                  Contact Me
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="inline-flex h-12 items-center justify-center rounded-md border border-slate-200 bg-white/80 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-all duration-300 hover:bg-white hover:shadow hover:scale-105"
                >
                  View My Work
                </button>
              </div>
            </div>
            {/* Tilted Card */}
            <div className="flex flex-1 justify-end lg:pr-24 mt-12 lg:mt-0">
              <TiltedCard
                imageSrc="/images/tilted-card.jpg"
                altText="Mehmet John Evans"
                containerHeight="384px"
                containerWidth="384px"
                imageHeight="384px"
                imageWidth="384px"
                rotateAmplitude={6}
                scaleOnHover={1.06}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div className="relative inline-block">
                    <p className="tilted-card-demo-text text-gray-400 group-hover:opacity-0 transition-opacity duration-0">Mehmet John Evans</p>
                    <p className="tilted-card-demo-text absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-0 bg-clip-text text-transparent bg-gradient-to-r group-hover:from-gray-200 group-hover:to-gray-400">Mehmet John Evans</p>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
      {/* Masonry Gallery + About Me Section */}
      <section className="flex flex-row w-full mx-auto max-w-7xl mb-16" style={{ height: '900px' }}>
        {/* Masonry Gallery (3/5) */}
        <div className="w-3/5 h-full pr-8 flex items-start pt-8 ml-6">
          <Masonry
            items={[
              { id: "1", img: "/images/masonry/7ce213c8-ba4b-40ec-873f-ef4c485aa32a.JPG", url: "#1", height: 400 },
              { id: "2", img: "/images/masonry/aws-me-and-thomas.png", url: "#2", height: 300 },
              { id: "3", img: "/images/masonry/8631819D-494C-4621-9E6F-8BA9A019874A.jpeg", url: "#3", height: 500 },
              { id: "4", img: "/images/masonry/screenshot2.jpeg", url: "#4", height: 235 },
              { id: "5", img: "/images/masonry/IMG_6518.jpeg", url: "#5", height: 350 },
              { id: "6", img: "/images/masonry/exported_E5670672-8A5D-4928-8978-70285197B61B.jpeg", url: "#6", height: 350},
              { id: "7", img: "/images/masonry/FullSizeRender.jpeg", url: "#7", height: 450 },
              { id: "8", img: "/images/masonry/IMG_0187.JPG", url: "#8", height: 350 },
              { id: "9", img: "/images/masonry/IMG_8149.jpg", url: "#9", height: 285 },
              { id: "10", img: "/images/masonry/IMG_3708.jpg", url: "#10", height: 460 },
              { id: "11", img: "/images/masonry/FNSTRXPO1.jpg", url: "#11", height: 400 },
              { id: "12", img: "/images/masonry/IMG_1058.jpg", url: "#12", height: 250 },
              { id: "13", img: "/images/masonry/IMG_8972.jpg", url: "#13", height: 400 },
              { id: "14", img: "/images/masonry/IMG_9530.JPG", url: "#14", height: 502 },
              { id: "15", img: "/images/masonry/Screenshot1.jpeg", url: "#15", height: 220 },
              { id: "16", img: "/images/masonry/Volunteers-Group-Picture-2.JPG", url: "#16", height: 350 },
              { id: "17", img: "/images/masonry/DSC00039.JPG", url: "#17", height: 300 },
              { id: "18", img: "/images/masonry/CE-talent-show-rubiks.JPG", url: "#18", height: 240},
            ]}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.95}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>
        {/* About Me (2/5) */}
        <div className="w-2/5 h-full flex flex-col justify-start items-start pt-8 mr-3">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600 mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-l text-slate-700 mb-4">
          I'm a final-year Computer Science student at Queen Mary University of London with a relentless passion for the intersection of technology and finance. Currently working as a Live Project Management Growth Analyst at TikTok, I've spent the past year building AI-powered solutions for global financial institutions during my placement at IBM, where I achieved a 55% client conversion rate across 8 MVP deliveries.          
          </p>
          <p className="text-lg md:text-l text-slate-700 mb-4">
          My journey spans from delivering real-time AI insights at Wimbledon's prestigious tournament to designing sophisticated financial models and trading algorithms. I've had the privilege of presenting live demos to senior executives at Barclays, NatWest, and Finastra, translating complex technical concepts into strategic business value.          </p>
          <p className="text-lg md:text-l text-slate-700 mb-4">
          Born in Liverpool and raised in Istanbul, I bring a unique global perspective shaped by 13 years of international experience. This multicultural foundation, combined with my technical expertise in Python, machine learning, and financial modeling, drives my ambition to revolutionise how technology transforms capital markets.
          </p>
          <p className="text-lg md:text-l text-slate-700 mb-4">
          With a predicted First Class degree and extensive certifications in quantitative finance, I'm actively seeking Graduate opportunities in quantitative finance and fintech for 2026, where I can apply my proven track record of delivering data-driven solutions that create measurable impact.          
          </p>
        </div>
      </section>
      
      {/* Work Experience Section - No gap, directly after gallery */}
      <section id="work" className="pt-12 pb-16 relative z-10">
        <div className="relative mx-auto">
          {/* Blurred background with margins */}
          <div className="absolute left-[5%] right-[5%] -top-10 -bottom-8 bg-slate-50/30 backdrop-blur-sm -z-10 rounded-lg"></div>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
              Work Experience
            </h2>
            <WorkExperience />
          </div>
        </div>
      </section>
      {/* Education & Certifications Section */}
      <section id="education" className="py-16 relative z-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
            Education & Certifications
          </h2>
          <EducationCertifications />
        </div>
      </section>
      {/* Projects Section - This is where the background transition starts */}
      <section id="projects" className="py-16 relative z-10">
        <div className="relative mx-auto">
          {/* Blurred background with margins - slightly longer for projects section */}
          <div className="absolute inset-y-0 left-[1%] right-[1%] -top-10 -bottom-8 bg-slate-50/30 backdrop-blur-sm -z-10 rounded-lg"></div>
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
              Projects
            </h2>
            <Projects />
          </div>
        </div>
      </section>
      {/* My Story Section - Background gradually darkens through this section */}
      <section id="story" className="py-16 relative z-10">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-blue-600">
            My Story
          </h2>
          <MyStory />
        </div>
      </section>
      {/* Contact Section (Footer) */}
      <Footer />
    </main>
  )
}
