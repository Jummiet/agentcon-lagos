
import React from 'react'

const CtaBanner: React.FC = () => {
  return (
    <section id="call-for-speakers" className="container py-12 sm:py-16">
      <div className="card p-5 sm:p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Call for Speakers</h2>
            <p className="mt-2 text-sm sm:text-base text-gray-light max-w-2xl leading-relaxed">
              Share your expertise on AI agents, Copilot, MLOps, data governance, or responsible AI. Lightning talks (15–20m) and deep dives (40m) welcome.
            </p>
          </div>
          <a className="btn-primary px-6 py-3 text-center whitespace-nowrap" target="_blank" rel="noopener noreferrer" href="https://example.com/call-for-speakers">Submit a Talk</a>
        </div>
      </div>
    </section>
  )
}
export default CtaBanner
