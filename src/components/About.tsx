
import React from 'react'

const About: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent"></div>
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-4">About AgentCamp 2026</h2>
          <p className="text-lg sm:text-xl font-semibold text-brand-blue text-center mb-2">From Prompt to Production — Community AI in a Day</p>
          <p className="text-sm sm:text-base text-gray-light text-center mb-10">Where builders and decision‑makers ship value, safely and at scale.</p>
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-light leading-relaxed px-4">
              AgentCamp 2026 is a global initiative featuring a series of community-led, one-day conferences and workshops dedicated to production-ready AI solutions. These events are scheduled to take place around the world throughout early 2026. As the official successor to the Global AI Bootcamp, AgentCamp 2026 is organized by the Global AI Community and brings together AI practitioners focused on shipping real-world value.
            </p>
          </div>
          <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-3">
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-brand mb-4">🚀</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">Prompt to Production</div>
              <p className="text-sm text-gray-light leading-relaxed">Learn to take AI from concept to production-ready solutions</p>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-brand mb-4">🛡️</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">Safe & Scalable</div>
              <p className="text-sm text-gray-light leading-relaxed">Ship AI value safely and at scale with confidence</p>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-brand mb-4">👥</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">Builders & Decision-Makers</div>
              <p className="text-sm text-gray-light leading-relaxed">Community-led event for practitioners and leaders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
