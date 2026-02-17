
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-subtle bg-navy/95 backdrop-blur-sm">
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0" aria-label="AgentCamp 2026 home">
          <img src="/Global-AI-Community-Logos/global-AI-community-white.png" alt="Global AI Community" className="h-8 sm:h-10" />
          <img src="/logo.png" alt="Global AI Community" className="h-8 sm:h-10" />
          <span className="text-white font-bold text-sm sm:text-base">Lagos, Nigeria Chapter</span>
        </Link>
        <nav className="flex items-center gap-4 lg:gap-6 text-sm">
          <NavLink to="/speakers" className={({isActive}) => isActive ? 'transition-colors text-brand' : 'transition-colors hover:text-white text-gray-light'}>Speakers</NavLink>
          <NavLink to="/sessions" className={({isActive}) => isActive ? 'transition-colors text-brand' : 'transition-colors hover:text-white text-gray-light'}>Sessions</NavLink>
          <a className="btn-primary text-sm hidden sm:inline-block" href="https://forms.gle/your-registration-link" target="_blank" rel="noopener noreferrer">Register Now</a>
          <a className="btn-primary text-sm hidden sm:inline-block" href="https://globalai.community/agentcamp/lagos/" target="_blank" rel="noopener noreferrer">Register Now</a>
          <a className="btn-outline text-sm hidden lg:inline-block" href="#call-for-speakers">Call for Speakers</a>
          <a className="sm:hidden btn-primary text-xs px-3 py-2" href="https://forms.gle/your-registration-link" target="_blank" rel="noopener noreferrer" aria-label="Register">Register</a>
          <a className="sm:hidden btn-primary text-xs px-3 py-2" href="https://globalai.community/agentcamp/lagos/" target="_blank" rel="noopener noreferrer" aria-label="Register">Register</a>
        </nav>
      </div>
    </header>
  )
}
export default Header
