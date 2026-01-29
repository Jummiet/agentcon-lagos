
import React from 'react'
import { speakers } from '../data/speakers'
import SpeakerCard from '../components/SpeakerCard'

const Speakers: React.FC = () => {
  return (
    <section className="container py-12 sm:py-16">
      <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">Speakers</h1>
      <p className="text-sm sm:text-base text-gray-light max-w-2xl leading-relaxed">Community leaders and practitioners sharing hands‑on insights on AI agents, Copilot, and responsible innovation.</p>
      <div className="mt-8 sm:mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map(sp => <SpeakerCard key={sp.id} speaker={sp} />)}
      </div>
    </section>
  )
}

export default Speakers
