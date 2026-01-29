
import React from 'react'

export interface Session {
  id: string
  title: string
  abstract: string
  track: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  start: string // ISO time
  end: string   // ISO time
  speakers: string[] // speaker ids
  room?: string
}

interface SessionCardProps {
  session: Session
  speakerLookup: Record<string, string>
  isSelected?: boolean
  onToggleSelect?: (sessionId: string) => void
}

const SessionCard: React.FC<SessionCardProps> = ({ session, speakerLookup, isSelected = false, onToggleSelect }) => {
  return (
    <article className="card p-4 sm:p-5 h-full flex flex-col relative">
      {onToggleSelect && (
        <div className="absolute top-3 right-3">
          <input
            type="checkbox"
            id={`select-${session.id}`}
            checked={isSelected}
            onChange={() => onToggleSelect(session.id)}
            className="w-5 h-5 rounded border-gray-600 bg-navy-dark text-brand focus:ring-2 focus:ring-brand cursor-pointer"
            aria-label={`Select ${session.title}`}
          />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2 text-xs pr-8">
        <span className="badge">{session.track}</span>
        <span className="badge">{session.level}</span>
        <span className="text-gray-disabled whitespace-nowrap">{new Date(session.start).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})} – {new Date(session.end).toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</span>
      </div>
      <h3 className="mt-4 text-base sm:text-lg font-semibold leading-snug text-white">{session.title}</h3>
      <p className="mt-3 text-sm text-gray-light leading-relaxed flex-grow">{session.abstract}</p>
      <p className="mt-4 text-xs sm:text-sm text-gray-light pt-3 border-t-gray-subtle">By {session.speakers.map(id => speakerLookup[id]).join(', ')}</p>
    </article>
  )
}
export default SessionCard
