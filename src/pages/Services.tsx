const Services = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-heading font-bold text-center mb-8 text-navy">Our Services</h1>
        <p className="text-xl text-center mb-12 text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive data science and machine learning solutions tailored to your business needs.
        </p>
        
        <div className="space-y-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-navy">Data Strategy & Assessment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Challenges Addressed</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Fragmented data across multiple systems</li>
                  <li>Lack of data governance and quality standards</li>
                  <li>Unclear data strategy and ROI measurement</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Deliverables</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Comprehensive data audit report</li>
                  <li>Strategic roadmap with prioritized initiatives</li>
                  <li>Data governance framework</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Timeline</h3>
                <p className="text-gray-600">4-6 weeks</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Example Outcome</h3>
                <p className="text-gray-600">Manufacturing client increased operational efficiency by 25% through optimized data workflows</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-navy">Machine Learning Model Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Challenges Addressed</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Complex prediction and forecasting needs</li>
                  <li>Automated decision-making requirements</li>
                  <li>Pattern recognition in large datasets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Deliverables</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Custom ML models and algorithms</li>
                  <li>Model validation and performance reports</li>
                  <li>Integration guidelines and documentation</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Timeline</h3>
                <p className="text-gray-600">8-12 weeks</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Example Outcome</h3>
                <p className="text-gray-600">Retail client achieved 95% accuracy in demand forecasting, reducing inventory costs by 30%</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-heading font-semibold mb-4 text-navy">Data Pipeline & Infrastructure</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Challenges Addressed</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Manual data processing workflows</li>
                  <li>Scalability and performance bottlenecks</li>
                  <li>Data quality and reliability issues</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Deliverables</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  <li>Automated data pipelines</li>
                  <li>Cloud infrastructure setup</li>
                  <li>Monitoring and alerting systems</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Timeline</h3>
                <p className="text-gray-600">6-10 weeks</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-teal">Example Outcome</h3>
                <p className="text-gray-600">Fintech startup reduced data processing time from hours to minutes with automated pipelines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services