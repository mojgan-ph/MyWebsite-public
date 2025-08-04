import { Link } from 'react-router-dom'

const Home = () => {
  const services = [
    {
      title: "Data Strategy & Roadmapping",
      description: "Transform your business with data-driven strategies and comprehensive roadmaps.",
      icon: "📊"
    },
    {
      title: "Predictive Modeling & AI Prototyping", 
      description: "Build intelligent systems that predict outcomes and automate decisions.",
      icon: "🤖"
    },
    {
      title: "Data Engineering & Automation",
      description: "Create robust data pipelines and automated workflows for scalable operations.",
      icon: "⚙️"
    }
  ]

  const steps = [
    { number: "1", title: "Book a Call", description: "Schedule a free consultation" },
    { number: "2", title: "Custom Proposal", description: "Receive a tailored solution" },
    { number: "3", title: "Project Kickoff", description: "Start your transformation" }
  ]

  return (
    <div>
      <section 
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center"
        style={{ backgroundImage: "url('/background.png')" }}
      >
        <div className="absolute inset-0 bg-navy/70"></div>
        <div className="relative container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            Transform Your Business with Data Science
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Expert machine learning and data science consultations to drive your business forward
          </p>
          <Link
            to="/contact"
            className="inline-block bg-teal hover:bg-teal/90 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Free Consultation
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-navy">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="text-6xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-navy">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link 
                  to="/services" 
                  className="text-teal hover:text-teal/80 font-semibold transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-navy">How It Works</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs">
                <div className="w-16 h-16 bg-teal rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2 text-navy">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute transform translate-x-32 text-teal text-3xl">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-light">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-8 text-navy">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-navy">Multidisciplinary Expertise</h3>
              <p className="text-gray-600">Our team combines deep technical knowledge with business acumen</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-navy">Collaborative Process</h3>
              <p className="text-gray-600">We work closely with your team to ensure seamless integration</p>
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold mb-4 text-navy">Transparent Pricing</h3>
              <p className="text-gray-600">Clear, upfront pricing with no hidden costs or surprises</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home