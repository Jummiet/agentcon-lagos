
import React from 'react'

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden border-b border-gray-200/10">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark to-navy"></div>
        <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full blur-3xl opacity-20 bg-brand-glow"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full blur-3xl opacity-15 bg-blue-glow"></div>
      </div>
      <div className="container py-12 sm:py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="flex-1 text-center lg:text-left">
            <span className="badge text-xs sm:text-sm">In‑person • The Zone, Lagos • May 23, 2026</span>
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-white-primary">
              AgentCamp 2026
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-semibold text-brand-blue leading-relaxed">
              Lagos, Nigeria Edition
            </p>
            <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-light">
              Join developers and AI enthusiasts from around the world for a full-day event focused on AI agents, modern engineering, and responsible innovation.
            </p>
            <div className="mt-6 space-y-2.5">
              <p className="text-sm font-medium text-brand-blue leading-relaxed">
                <strong className="font-semibold">Venue:</strong> The Zone, Plot 9 Gbagada Industrial Scheme, Beside UPS, Araromi, Gbagada Expressway
              </p>
              <p className="text-sm font-medium text-brand-blue leading-relaxed">
                <strong className="font-semibold">Event Time:</strong> 8:00 AM – 5:00 PM WAT
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-md sm:max-w-none lg:justify-start justify-center">
              <a href="https://sessionize.com/agentcamp-lagos-2026" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm md:text-base text-center px-6 py-3">Apply to Speak</a>
              <a href="#sessions" className="btn-outline text-sm md:text-base text-center px-6 py-3">Explore Sessions</a>
              <a href="#location" className="btn-outline text-sm md:text-base text-center px-6 py-3">Get Directions</a>
            </div>
          </div>
          <div className="flex-shrink-0 w-full max-w-md lg:max-w-lg">
            <img src="/agentcamp-yaba.jpg" alt="AgentCamp 2026 - Lagos, Nigeria" className="w-full h-auto rounded-2xl shadow-2xl shadow-brand" />
          </div>
        </div>
      </div>
    </section>
  )
}
export default Hero
