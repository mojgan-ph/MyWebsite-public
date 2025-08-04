import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo-alpha.png" alt="Data Precision" className="h-8 w-auto" />
              <span className="text-lg font-heading font-bold">Data Precision</span>
            </div>
            <p className="text-gray-300">
              Expert data science and machine learning consultations for your business growth.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-teal transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-teal transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="text-gray-300 space-y-2">
              <p>Email: info@dataprecision.com.au</p>
              <p>PO Box 3244 Rostrevor, SA 5073</p>
              <p>Adelaide, South Australia</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Data Precision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer