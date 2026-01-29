
export function formatDateRange(startISO: string, endISO: string) {
  const start = new Date(startISO)
  const end = new Date(endISO)
  const opts: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' }
  return `${start.toLocaleTimeString([], opts)} – ${end.toLocaleTimeString([], opts)}`
}
