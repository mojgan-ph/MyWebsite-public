import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-navy text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-alpha.png" alt="Data Precision" className="h-10 w-auto" />
            <span className="text-xl font-heading font-bold">Data Precision</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`hover:text-teal transition-colors ${
                  location.pathname === item.path ? 'text-teal' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            className="bg-teal hover:bg-teal/90 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Get Free Consultation
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header