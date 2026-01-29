
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
  return (
    <section className="container py-24 text-center">
      <h1 className="text-6xl font-extrabold">404</h1>
      <p className="mt-4 text-slate-300">The page you are looking for does not exist.</p>
      <Link to="/" className="btn-primary mt-6 inline-block">Go home</Link>
    </section>
  )
}
export default NotFound
