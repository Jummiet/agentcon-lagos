
import React from 'react'

const About: React.FC = () => {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent"></div>
      <div className="container relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8">About AgentCamp 2026</h2>
          <div className="text-center">
            <p className="text-base sm:text-lg text-gray-light leading-relaxed px-4">
              AgentCamp 2026 is a global initiative featuring a series of community-led, one-day conferences and workshops dedicated to artificial intelligence. These events are scheduled to take place around the world throughout early 2026. As the official successor to the Global AI Bootcamp, AgentCamp 2026 is organized by the Global AI Community and brings together AI enthusiasts from diverse backgrounds.
            </p>
          </div>
          <div className="mt-12 sm:mt-14 grid gap-6 sm:grid-cols-3">
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-brand mb-4">🌍</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">Global</div>
              <p className="text-sm text-gray-light leading-relaxed">Worldwide events bringing AI communities together</p>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-brand mb-4">👥</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">Community-Led</div>
              <p className="text-sm text-gray-light leading-relaxed">Organized by passionate AI enthusiasts and practitioners</p>
            </div>
            <div className="card p-6 text-center hover:scale-105 transition-transform duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-brand mb-4">⚡</div>
              <div className="text-lg sm:text-xl font-bold text-white mb-3">One-Day</div>
              <p className="text-sm text-gray-light leading-relaxed">Intensive conferences and hands-on workshops</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
