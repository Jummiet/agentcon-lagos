
import React from 'react'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import Speakers from './pages/Speakers'
import Sessions from './pages/Sessions'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/speakers', element: <Speakers /> },
      { path: '/sessions', element: <Sessions /> },
      { path: '*', element: <NotFound /> },
    ],
  },
])
