
import React, { useState } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import CtaBanner from '../components/CtaBanner'
import Sponsors from '../components/Sponsors'
import Location from '../components/Location'
import { speakers } from '../data/speakers'
import { sessions } from '../data/sessions'
import SpeakerCard from '../components/SpeakerCard'
import SessionCard from '../components/SessionCard'
import jsPDF from 'jspdf'

const Home: React.FC = () => {
  const [selectedSessions, setSelectedSessions] = useState<Set<string>>(new Set())
  const speakerLookup = Object.fromEntries(speakers.map(s => [s.id, s.name]))

  const toggleSession = (sessionId: string) => {
    setSelectedSessions(prev => {
      const newSet = new Set(prev)
      if (newSet.has(sessionId)) {
        newSet.delete(sessionId)
      } else {
        newSet.add(sessionId)
      }
      return newSet
    })
  }

  const exportToPDF = () => {
    if (selectedSessions.size === 0) {
      alert('Please select at least one session to export')
      return
    }

    const doc = new jsPDF()
    const selectedSessionData = sessions.filter(s => selectedSessions.has(s.id))
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

    // Title
    doc.setFontSize(18)
    doc.setTextColor(210, 88, 60) // Brand orange
    doc.text('AgentCamp 2026 - My Schedule', 15, 20)
    
    doc.setFontSize(10)
    doc.setTextColor(100, 100, 100)
    doc.text('Lagos, Nigeria | May 23, 2026', 15, 28)
    doc.text('The Zone, Gbagada Industrial Scheme', 15, 33)

    let yPos = 45

    selectedSessionData.forEach((session, index) => {
      // Check if we need a new page
      if (yPos > 270) {
        doc.addPage()
        yPos = 20
      }

      // Session time
      const startTime = new Date(session.start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      const endTime = new Date(session.end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      
      doc.setFontSize(9)
      doc.setTextColor(150, 150, 150)
      doc.text(`${startTime} - ${endTime}`, 15, yPos)

      // Track & Level badges
      doc.setFontSize(8)
      doc.setTextColor(210, 88, 60)
      doc.text(`${session.track} | ${session.level}`, 50, yPos)

      yPos += 5

      // Session title
      doc.setFontSize(12)
      doc.setTextColor(0, 0, 0)
      const titleLines = doc.splitTextToSize(session.title, 180)
      doc.text(titleLines, 15, yPos)
      yPos += titleLines.length * 6

      // Abstract
      doc.setFontSize(9)
      doc.setTextColor(80, 80, 80)
      const abstractLines = doc.splitTextToSize(session.abstract, 180)
      doc.text(abstractLines, 15, yPos)
      yPos += abstractLines.length * 5

      // Speakers
      doc.setFontSize(9)
      doc.setTextColor(150, 150, 150)
      const speakerNames = session.speakers.map(id => speakerLookup[id]).join(', ')
      doc.text(`Speaker(s): ${speakerNames}`, 15, yPos)
      yPos += 10

      // Divider line
      if (index < selectedSessionData.length - 1) {
        doc.setDrawColor(200, 200, 200)
        doc.line(15, yPos, 195, yPos)
        yPos += 10
      }
    })

    // Footer on last page
    const pageCount = doc.getNumberOfPages()
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i)
      doc.setFontSize(8)
      doc.setTextColor(150, 150, 150)
      doc.text(`Generated from agentcamp-lagos.com | Page ${i} of ${pageCount}`, 15, 287)
    }

    doc.save('AgentCamp2026-MySchedule.pdf')
  }

  return (
    <>
      <Hero />
      
      <About />

      <CtaBanner />

      <section id="sessions" className="container py-12 sm:py-16" aria-labelledby="sessions-heading">
        <div className="text-center mb-10 sm:mb-12">
          <h2 id="sessions-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Event Sessions</h2>
          <p className="text-gray-light max-w-2xl mx-auto leading-relaxed">Explore our carefully curated sessions covering AI agents, modern engineering practices, and responsible innovation</p>
        </div>
        {selectedSessions.size > 0 && (
          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-sm text-gray-light font-medium">
              {selectedSessions.size} selected
            </span>
            <button
              onClick={exportToPDF}
              className="btn-primary text-sm px-5 py-2.5"
            >
              📥 Export to PDF
            </button>
          </div>
        )}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map(s => (
            <SessionCard
              key={s.id}
              session={s}
              speakerLookup={speakerLookup}
              isSelected={selectedSessions.has(s.id)}
              onToggleSelect={toggleSession}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="/sessions" className="btn-outline px-6 py-3">View Full Agenda</a>
        </div>
      </section>

      <section className="container py-12 sm:py-16" aria-labelledby="speakers-heading">
        <div className="text-center mb-10 sm:mb-12">
          <h2 id="speakers-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">Featured Speakers</h2>
          <p className="text-gray-light max-w-2xl mx-auto leading-relaxed">Learn from industry experts and thought leaders in AI and machine learning</p>
        </div>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map(sp => <SpeakerCard key={sp.id} speaker={sp} />)}
        </div>
        <div className="text-center mt-8">
          <a href="/speakers" className="btn-outline px-6 py-3">View All Speakers</a>
        </div>
      </section>

      <Location />

      <Sponsors />
    </>
  )
}
export default Home
