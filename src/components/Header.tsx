
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CountdownTimer from './CountdownTimer'

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 border-b border-gray-subtle bg-navy/95 backdrop-blur-sm">
      <div className="container flex h-14 sm:h-16 items-center justify-between gap-2 sm:gap-4">
        <Link to="/" className="flex items-center gap-2 flex-shrink-0 min-w-0" aria-label="AgentCamp 2026 home">
          <img src="/logo.png" alt="Global AI Community" className="h-8 sm:h-10" />
          <span className="hidden sm:inline text-white font-bold text-sm md:text-base truncate">Lagos, Nigeria Chapter</span>
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center">
            <CountdownTimer variant="compact" />
          </div>
          <nav className="flex items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
          <NavLink to="/speakers" className={({isActive}) => isActive ? 'transition-colors text-brand' : 'transition-colors hover:text-white text-gray-light'}>Speakers</NavLink>
          <NavLink to="/sessions" className={({isActive}) => isActive ? 'transition-colors text-brand' : 'transition-colors hover:text-white text-gray-light'}>Sessions</NavLink>
          <a className="btn-primary text-sm hidden md:inline-flex" href="https://globalai.community/agentcamp/lagos/" target="_blank" rel="noopener noreferrer">Register Now</a>
          <a className="btn-outline text-sm hidden xl:inline-flex" href="https://sessionize.com/agentcamp-lagos-2026" target="_blank" rel="noopener noreferrer">Call for Speakers</a>
          <a className="sm:hidden btn-primary text-xs px-3 py-2" href="https://globalai.community/agentcamp/lagos/" target="_blank" rel="noopener noreferrer" aria-label="Register">Register</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
export default Header
