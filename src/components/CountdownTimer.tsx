import React, { useEffect, useState } from 'react'

interface CountdownParts {
  days: number
  hours: number
  minutes: number
  seconds: number
  isComplete: boolean
}

interface CountdownTimerProps {
  variant?: 'default' | 'compact'
}

const EVENT_START_ISO = '2026-05-23T08:00:00+01:00'

const getCountdownParts = (targetIso: string): CountdownParts => {
  const targetTime = new Date(targetIso).getTime()
  const nowTime = Date.now()
  const diffMs = targetTime - nowTime

  if (diffMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true }
  }

  const totalSeconds = Math.floor(diffMs / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return { days, hours, minutes, seconds, isComplete: false }
}

const pad = (value: number) => value.toString().padStart(2, '0')

const CountdownTimer: React.FC<CountdownTimerProps> = ({ variant = 'default' }) => {
  const [countdown, setCountdown] = useState<CountdownParts>(() => getCountdownParts(EVENT_START_ISO))

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts(EVENT_START_ISO))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [])

  if (countdown.isComplete && variant === 'compact') {
    return (
      <div className="rounded-full border border-gray-subtle bg-black/15 px-3 py-1.5 text-xs text-gray-light whitespace-nowrap" role="status" aria-live="polite">
        AgentCamp is live
      </div>
    )
  }

  if (countdown.isComplete) {
    return (
      <div className="mt-7 card px-4 py-4 sm:px-5 sm:py-5 max-w-xl" role="status" aria-live="polite">
        <p className="text-sm sm:text-base font-semibold text-brand">AgentCamp 2026 is live now.</p>
        <p className="mt-1 text-xs sm:text-sm text-gray-light">Doors open at 8:00 AM WAT at The Zone, Lagos.</p>
      </div>
    )
  }

  if (variant === 'compact') {
    return (
      <div className="rounded-full border border-gray-subtle bg-black/20 px-3 py-1.5 text-xs font-medium text-brand-blue whitespace-nowrap" role="timer" aria-live="polite" aria-label="Countdown to AgentCamp 2026">
        T-{countdown.days}d {pad(countdown.hours)}h {pad(countdown.minutes)}m
      </div>
    )
  }

  const items = [
    { label: 'Days', value: countdown.days.toString() },
    { label: 'Hours', value: pad(countdown.hours) },
    { label: 'Minutes', value: pad(countdown.minutes) },
    { label: 'Seconds', value: pad(countdown.seconds) },
  ]

  return (
    <div className="mt-7 card px-4 py-4 sm:px-5 sm:py-5 max-w-xl" role="timer" aria-live="polite" aria-label="Countdown to AgentCamp 2026 start time">
      <p className="text-xs sm:text-sm font-semibold uppercase tracking-wide text-brand-blue">Countdown to kickoff</p>
      <div className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
        {items.map(item => (
          <div key={item.label} className="rounded-lg border border-gray-subtle bg-black/15 px-2 py-3 text-center sm:px-3 sm:py-3.5">
            <p className="font-display text-xl sm:text-2xl leading-none text-white-primary">{item.value}</p>
            <p className="mt-1 text-[10px] sm:text-xs text-gray-light">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CountdownTimer