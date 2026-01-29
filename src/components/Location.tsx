
import React from 'react'

const Location: React.FC = () => {
  return (
    <section id="location" className="container py-12 sm:py-16">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">Event Location & Directions</h2>
        <p className="mt-3 text-gray-light max-w-2xl mx-auto">Find us at The Zone in the heart of Lagos</p>
      </div>
      <div className="card p-6 sm:p-8 md:p-10">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">The Zone</h3>
            <p className="text-gray-light mb-6 leading-relaxed">
              Plot 9 Gbagada Industrial Scheme<br />
              Beside UPS, Araromi<br />
              Gbagada Expressway<br />
              Lagos 105102, Nigeria
            </p>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-white text-sm mb-2">Date & Time</h4>
                <p className="text-gray-light text-sm leading-relaxed">Friday, May 23, 2026</p>
                <p className="text-gray-light text-sm leading-relaxed">8:00 AM - 5:00 PM WAT</p>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-2">Parking</h4>
                <p className="text-gray-light text-sm leading-relaxed">Free parking available on-site</p>
              </div>
              <div>
                <h4 className="font-semibold text-white text-sm mb-2">Public Transport</h4>
                <p className="text-gray-light text-sm leading-relaxed">Accessible via bus routes along Gbagada Expressway</p>
              </div>
            </div>
            <a 
              href="https://www.google.com/maps/search/?api=1&query=The+Zone+Plot+9+Gbagada+Industrial+Scheme+Lagos" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary mt-6 inline-flex"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="h-80 lg:h-full rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.7526892736977!2d3.3872!3d6.5569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzMnMjQuOCJOIDPCsDIzJzEzLjkiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              className="border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Zone - AgentCamp 2026 Venue Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
