
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-subtle mt-auto">
      <div className="container py-8 sm:py-10 text-xs sm:text-sm text-gray-light">
        <div className="flex flex-col items-center gap-4 mb-8">
          <img src="/Global-AI-Community-Logos/global-AI-community-white.png" alt="Global AI Community" className="h-12" />
          <p className="text-center max-w-2xl leading-relaxed font-semibold text-brand-blue">From Prompt to Production — Community AI in a Day</p>
          <p className="text-center max-w-2xl leading-relaxed">Proudly organized by the Global AI Community - Lagos, Nigeria Chapter</p>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-t border-gray-subtle pt-6">
          <p className="text-center sm:text-left">&copy; {new Date().getFullYear()} AgentCamp 2026. All rights reserved.</p>
          <p className="text-center sm:text-right">
            <a href="#call-for-speakers" className="text-brand transition-colors hover:opacity-80">Speak at AgentCamp</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer
