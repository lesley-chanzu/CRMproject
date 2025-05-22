import React from 'react'

const CTABanner = () => {
  return (
    <section className='bg-purple-600 text-white py-16 text-center'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
            <h2 className='text-3xl md:text-4xl font-extrabold mb-4'>
                Ready to Elevate Your Team's Productivity?
            </h2>
            <p className='text-lg md:text-xl mb-8'>
                Join thousands of teams who trust GoodDay to manage their work and achieve more.
            </p>
            <div className='flex-row sm:flex-col justify-center gap-4'>
                <a href='/sign-up/' className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-purple-700 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 mr-4'>
                    Get Started Free
                </a>
                <a
                href='/contact-us'
                className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:bg-white hover:text-purple-700 bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300 ml-2'
                >
                    Contact Sales
                </a>
            </div>
        </div>
    </section>
  )
}

export default CTABanner