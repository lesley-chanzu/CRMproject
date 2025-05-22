import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300 py-12'>
      <div  className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {/* Logo and company info  */}
        <div>
          <img src="https://via.placeholder.com/150" alt="GoodDay Logo" className="h-8 w-auto" />
          <p className="text-sm leading relaxed">GoodDay is a work management platform that helps teams connect goals, strategy, and execution.</p>
          {/* social media links */}
          <div className='flex space-x-4 mt-6'>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* LinkedIn SVG path */}
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-200">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {/* Twitter SVG path */}
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96a4.48 4.48 0 00-.61 2.27c0 1.56.8 2.93 2.02 3.74A4.48 4.48 0 01.96 6v.06c0 2.18 1.55 4 3.8 4.42a4.52 4.52 0 01-2.04.08c.57 1.78 2.23 3.08 4.2 3.12A9.05 9.05 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.87 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>

        {/* solutions */}
        <div>
          <h3 className='text-white font-semibold text-lg mb-4'>Solutions</h3>
          <ul>
            <li><a href='/solutions/marketing/' className='text-gray-300 hover:text-white text-sm'>Marketing Team</a></li>
            <li><a href='/solutions/marketing/' className='text-gray-300 hover:text-white text-sm'>Development Team</a></li>
            <li><a href='/solutions/marketing/' className='text-gray-300 hover:text-white text-sm'>HR Teams</a></li>
            <li><a href='/solutions/marketing/' className='text-gray-300 hover:text-white text-sm'>Sales Teams</a></li>
            <li><a href='/solutions/marketing/' className='text-gray-300 hover:text-white text-sm'>IT Teams</a></li>
          </ul>
        </div>

        {/* company  */}
        <div>
          <h3 className='text-white font-semibold text-lg mb-4'>Company</h3>
             <ul>
            <li><a href='/about-us/' className='text-gray-300 hover:text-white text-sm'>About Us</a></li>
            <li><a href='/careers/' className='text-gray-300 hover:text-white text-sm'>Careers</a></li>
            <li><a href='/contact-us/' className='text-gray-300 hover:text-white text-sm'>Contact Us</a></li>
            <li><a href='/privacy-policy/' className='text-gray-300 hover:text-white text-sm'>Privacy Policy</a></li>
            <li><a href='/terms-of-service/' className='text-gray-300 hover:text-white text-sm'>Terms of Service</a></li>
          </ul>
        </div>

        {/* resources */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/blog/" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
            <li><a href="/help-center/" className="text-gray-300 hover:text-white text-sm">Help Center</a></li>
            <li><a href="/webinars/" className="text-gray-300 hover:text-white text-sm">Webinars</a></li>
            <li><a href="/api-docs/" className="text-gray-300 hover:text-white text-sm">API Documentation</a></li>
          </ul>
        </div>
      </div>
      <div className='border-t border-gray-700 mt-7 pt-8 text-center text-sm text-gray-500'>
        &copy; {new Date().getFullYear()} GoodDay. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer