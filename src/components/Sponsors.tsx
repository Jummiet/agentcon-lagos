
import React from 'react'

const Sponsors: React.FC = () => {
  return (
    <section id="sponsors" className="container py-12 sm:py-16">
      <div className="card p-5 sm:p-6 md:p-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Become a Sponsor</h2>
          <p className="mt-3 text-gray-light max-w-2xl mx-auto">
            Support the AI community and gain visibility among developers, engineers, and AI enthusiasts from across Nigeria and beyond.
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">🎯</div>
            <h3 className="text-lg font-bold text-white mb-2">Targeted Audience</h3>
            <p className="text-sm text-gray-light">Connect with AI practitioners, developers, and decision-makers</p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="text-lg font-bold text-white mb-2">Community Impact</h3>
            <p className="text-sm text-gray-light">Support the growth of AI education and innovation in Nigeria</p>
          </div>
          
          <div className="card p-6 text-center">
            <div className="text-3xl mb-3">📢</div>
            <h3 className="text-lg font-bold text-white mb-2">Brand Visibility</h3>
            <p className="text-sm text-gray-light">Showcase your brand to attendees through multiple touchpoints</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-gray-light mb-6">
            Various sponsorship packages available including Platinum, Gold, Silver, and Community tiers.
          </p>
          <a 
            className="btn-primary px-8 py-3 text-center inline-flex" 
            target="_blank" 
            rel="noopener noreferrer" 
            href="mailto:sponsors@agentcamplagos.com?subject=AgentCamp%202026%20Lagos%20Sponsorship%20Inquiry"
          >
            Contact Us for Sponsorship
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors
