import React from 'react'

const BenefitsSection = () => {
    const benefits = [{
        icon: (
            <svg className='h-10 w-10 text-indigo-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
        ),
        title: 'Align Goals & Execution',
        description: 'Connect your team\'s goals with execution to ensure everyone is on the same page and working towards the same objectives.'
    },
    {
        icon: (
            <svg className='h-10 w-10 text-indigo-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d='M12 8c1.387 0 2.825.267 4 0.77V19l-4-4-4 4V8.77C9.175 8.267 10.613 8 12 8z'/>
            </svg>
        ),
        title: 'Boost Team Productivity',
        description: 'Empower your team to work more efficiently with tools that streamline processes and enhance collaboration.'
    },
    {
        icon: (
            <svg className='h-10 w-10 text-indigo-600' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d='M13 10V3L4 14h7v7l9-11h-7z'/>
            </svg>
        ),
        title: 'Enhance Collaboration',
        description: 'Foster a culture of collaboration with tools that enable seamless communication and teamwork across your organization.'
    }
]


  return (
    <section className='py-16 bg-gradient-to-tr from-gray-100 to-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-12'>Experience a new level of <span className='text-purple-600'>Productivity</span></h1>
            <div>{benefits.map((benefit, index) => (
                    <div key={index} className='flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-sm mb-2'>
                        <div className='mb-4'>{benefit.icon}</div>
                        <h3 className='text-xl font-semibold text-gray-900 mb-3'>{benefit.title}</h3>
                        <p className='text-gray-600 leading-relaxed'>{benefit.description}</p>
                    </div>
                ))
                }</div>
        </div>
    </section>
  )
}

export default BenefitsSection