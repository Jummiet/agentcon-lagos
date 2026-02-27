
import React from 'react'

const CtaBanner: React.FC = () => {
  return (
    <section id="call-for-speakers" className="container py-12 sm:py-16">
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
          <a className="btn-primary px-6 py-3 text-center whitespace-nowrap" target="_blank" rel="noopener noreferrer" href="https://sessionize.com/agentcamp-lagos-2026">Submit a Talk</a>
        </div>
      </div>
    </section>
  )
}
export default CtaBanner
