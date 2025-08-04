const About = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center mb-8 text-navy">About Data Precision</h1>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-navy">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              At Data Precision, we believe that every business deserves access to the transformative power of data science and machine learning. Our mission is to bridge the gap between complex data technologies and practical business solutions, empowering organizations to make data-driven decisions that drive growth and innovation.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We specialize in translating business challenges into technical solutions, ensuring that our clients not only understand their data but can leverage it to achieve their strategic objectives. Through collaborative partnerships and transparent processes, we deliver measurable results that create lasting value.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-semibold mb-6 text-navy">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-teal">Expertise-Driven</h3>
                <p className="text-gray-600 mb-6">
                  Our team combines deep technical expertise in data science, machine learning, and engineering with extensive business experience across multiple industries.
                </p>
                
                <h3 className="text-xl font-heading font-semibold mb-4 text-teal">Collaborative Partnership</h3>
                <p className="text-gray-600">
                  We work as an extension of your team, ensuring knowledge transfer and building internal capabilities alongside project delivery.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-teal">Results-Focused</h3>
                <p className="text-gray-600 mb-6">
                  Every project is designed with clear success metrics and measurable outcomes that align with your business objectives.
                </p>
                
                <h3 className="text-xl font-heading font-semibold mb-4 text-teal">Transparent Process</h3>
                <p className="text-gray-600">
                  From initial consultation to project completion, we maintain clear communication with regular updates and no hidden costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About