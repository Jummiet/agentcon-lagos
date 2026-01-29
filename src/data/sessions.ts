
import type { Session } from '../components/SessionCard'

export const sessions: Session[] = [
  {
    id: 'ses-keynote',
    title: 'Opening Keynote: Agentic AI in the Enterprise',
    abstract: 'How autonomous agents are reshaping workflows, decisioning, and governance for real business outcomes.',
    track: 'Keynote',
    level: 'Beginner',
    start: '2026-05-23T08:30:00+01:00',
    end: '2026-05-23T09:15:00+01:00',
    speakers: ['spk-olajumoke'],
  },
  {
    id: 'ses-copilot',
    title: 'From Prompts to Products: Copilot Patterns that Scale',
    abstract: 'Engineering patterns, evaluation, and safety for Copilot experiences across the enterprise.',
    track: 'Engineering',
    level: 'Intermediate',
    start: '2026-05-23T10:00:00+01:00',
    end: '2026-05-23T10:40:00+01:00',
    speakers: ['spk-ade'],
  },
  {
    id: 'ses-rrai',
    title: 'Responsible AI for Agents: Policy to Practice',
    abstract: 'Translating principles into concrete guardrails, monitoring, and incident response for agent systems.',
    track: 'Governance',
    level: 'Advanced',
    start: '2026-05-23T14:00:00+01:00',
    end: '2026-05-23T14:40:00+01:00',
    speakers: ['spk-chioma','spk-olajumoke'],
  },
]
