import React, { useState, Fragment } from "react";
// import Logo from './logo.svg';
import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom"; // using react-router for navigation

const featuresLinks = [
  // { name: 'Project Management', href: '/features/project-management', component: ProjectManagement },
  // { name: 'Project Management', href: '/features/project-management' },
  { name: "Productivity Suite", href: "/features/productivity-suite" },
  // { name: 'Planning', href: '/features/planning' },
  // { name: 'Time Tracking', href: '/features/time-tracking' },
  // { name: 'Knowledge Base', href: '/features/knowledge-base' },
  { name: "CRM", href: "/features/crm" },
  // { name: 'Reporting', href: '/features/reporting' },
  // { name: 'Collaboration', href: '/features/collaboration' },
  // { name: 'Agile', href: '/features/agile' },
  // { name: 'Integrations', href: '/features/integrations' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleFeaturesDropdown = () => {
    setIsFeaturesDropdownOpen(!isFeaturesDropdownOpen);
  };

  return (
    <nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex">
              {/* <img className="h-8 w-auto" src={Logo} alt="GoodDay.work" /> */}
              <span className="font-bold text-xl text-indigo-600">GoodDay</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/why-goodday/"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsFeaturesDropdownOpen(false)}
            >
              Why GoodDay
            </Link>
            <div className="relative inline-block text-left">
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button
                    onClick={toggleFeaturesDropdown}
                    className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Features
                  </Menu.Button>
                </div>

                <Transition
                  show={isFeaturesDropdownOpen}
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-95"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items
                    static
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10"
                  >
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {featuresLinks.map((link) => (
                        <Menu.Item key={link.name}>
                          {({ active }) => (
                            <Link
                              to={link.href}
                              className={`${
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-gray-700"
                              } block px-4 py-2 text-sm`}
                              onClick={() => setIsFeaturesDropdownOpen(false)}
                            >
                              {link.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
            <Link to="/pricing" className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsFeaturesDropdownOpen(false)}
            >
              Pricing
            </Link>
            {/* <Link to="/customers/" className="text-gray-500 hover:text-gray-700">
                            Customers
                        </Link> */}
            {/* <Link to="/blog/" className="text-gray-500 hover:text-gray-700">
                            Blog
                        </Link> */}
            <Link
              to="/contact-us"
              className="text-gray-500 hover:text-gray-700"
              onClick={() => setIsFeaturesDropdownOpen(false)}
            >
              Contact Us
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/login/"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsFeaturesDropdownOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/sign-up/"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => setIsFeaturesDropdownOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/why-goodday/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Why GoodDay
          </Link>
          <div className="relative">
            <button
              type="button"
              className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
              onClick={toggleFeaturesDropdown}
              aria-expanded={isFeaturesDropdownOpen}
              aria-haspopup="true"
            >
              Features
            </button>
            {isFeaturesDropdownOpen && (
              <div className="mt-1 space-y-1">
                {featuresLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsFeaturesDropdownOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to="/pricing/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          {/* <Link
            to="/customers/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
             onClick={( => setIsMobileMenuOpen(false))}
          >
            Customers
          </Link> */}
          {/* <Link to="/blog/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50">
                        Blog
                    </Link> */}
          <Link
            to="/contact-us/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
        <div className="px-2 py-3 space-y-2">
          <Link
            to="/login/"
            className="w-full block px-4 py-2 rounded-md text-base font-medium text-gray-700 bg-gray-50 hover:bg-gray-100"
          >
            Login
          </Link>
          <Link
            to="/sign-up/"
            className="w-full block px-4 py-2 rounded-md text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
