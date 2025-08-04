import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectOverview: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center mb-8 text-navy">Contact Us</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          Ready to transform your business with data science? Get in touch for a free consultation.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-navy">Get a Free Consultation</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="projectOverview" className="block text-sm font-semibold text-gray-700 mb-2">
                  Project Overview
                </label>
                <textarea
                  id="projectOverview"
                  name="projectOverview"
                  rows={4}
                  value={formData.projectOverview}
                  onChange={handleChange}
                  placeholder="Tell us about your project, challenges, or goals..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-vertical"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-teal hover:bg-teal/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-navy">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-teal text-xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">info@dataprecision.com.au</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-teal text-xl">✉️</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Mail</h3>
                    <p className="text-gray-600">
                      PO Box 3244 Rostrevor, SA 5073
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="text-teal text-xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">
                      Adelaide, South Australia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-heading font-semibold mb-6 text-navy">Schedule a Call</h2>
              <p className="text-gray-600 mb-6">
                Prefer to speak directly? Schedule a free 30-minute consultation to discuss your data science needs.
              </p>
              <button
                  className="w-full bg-navy hover:bg-navy/90 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Book a Call
              </button>
            </div>

            <div className="bg-gray-light rounded-lg p-6">
              <h3 className="text-lg font-heading font-semibold mb-4 text-navy">What to Expect</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-teal">•</span>
                  <span>Initial consultation within 24 hours</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal">•</span>
                  <span>Custom proposal within 3-5 business days</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-teal">•</span>
                  <span>Transparent pricing with no hidden costs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact