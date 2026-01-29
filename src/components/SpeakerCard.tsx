
import React from 'react'

export interface Speaker {
  id: string
  name: string
  title: string
  company: string
  bio: string
  photo?: string
  twitter?: string
  linkedin?: string
}

const SpeakerCard: React.FC<{ speaker: Speaker }> = ({ speaker }) => {
  return (
    <article className="card p-4 sm:p-5 h-full flex flex-col">
      <div className="flex items-center gap-3 sm:gap-4">
        {speaker.photo ? (
          <img src={speaker.photo} alt={speaker.name} className="h-14 w-14 sm:h-16 sm:w-16 rounded-full object-cover flex-shrink-0" />
        ) : (
          <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full bg-brand flex items-center justify-center text-white font-bold text-lg sm:text-xl flex-shrink-0">
            {speaker.name.split(' ').map(s=>s[0]).slice(0,2).join('')}
          </div>
        )}
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold truncate text-white">{speaker.name}</h3>
          <p className="text-xs sm:text-sm text-gray-light line-clamp-2 mt-1">{speaker.title} · {speaker.company}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-light leading-relaxed flex-grow">{speaker.bio}</p>
      <div className="mt-4 flex gap-3 pt-3 text-sm border-t-gray-subtle">
        {speaker.twitter && <a href={speaker.twitter} className="text-brand-blue transition-colors hover:opacity-80" target="_blank" rel="noreferrer">Twitter</a>}
        {speaker.linkedin && <a href={speaker.linkedin} className="text-brand-blue transition-colors hover:opacity-80" target="_blank" rel="noreferrer">LinkedIn</a>}
      </div>
    </article>
  )
}
export default SpeakerCard
