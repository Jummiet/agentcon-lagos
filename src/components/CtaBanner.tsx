
import React from 'react'
import volunteerQrImage from './volunteer-qr.png'

const CtaBanner: React.FC = () => {
  const volunteerFormUrl = 'https://forms.office.com/e/JjdaYNwXEL'

  return (
    <section id="call-for-speakers" className="container py-12 sm:py-16">
      <div className="grid gap-6">
        <div className="card p-5 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Call for Speakers</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-light max-w-2xl leading-relaxed">
                Have you shipped AI to production? Solved real-world challenges at scale? Built systems that deliver value safely? Share your story! We're looking for practitioners who can show the community how to turn prompts into production-ready solutions.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-light max-w-2xl leading-relaxed">
                Topics include AI agents, production deployment, safety & governance, scalable architectures, MLOps, and responsible AI.
              </p>
            </div>
            <a className="btn-primary px-6 py-3 text-center whitespace-nowrap" target="_blank" rel="noopener noreferrer" href="https://sessionize.com/agentcamp-lagos-2026">Apply to Speak</a>
          </div>
        </div>

        <div className="card p-5 sm:p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Call for Volunteers</h2>
              <p className="mt-2 text-sm sm:text-base text-gray-light max-w-2xl leading-relaxed">
                Join the team making AgentCamp Lagos happen. We’re looking for volunteers to support registration, logistics, speaker coordination, and attendee experience.
              </p>
            </div>
            <div className="flex flex-col items-start sm:items-center gap-3">
              <a className="btn-primary px-6 py-3 text-center whitespace-nowrap" target="_blank" rel="noopener noreferrer" href={volunteerFormUrl}>Call for Volunteers</a>
              <a href={volunteerFormUrl} target="_blank" rel="noopener noreferrer" aria-label="Open volunteer form QR code link">
                <img src={volunteerQrImage} alt="QR code for AgentCamp Lagos volunteer form" className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg" loading="lazy" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default CtaBanner
