import React from 'react'

const FeaturesSection = () => {
    const features = [
        {
            title: 'Project Management',
            description: 'Plan, track, and manage your projects with ease. Our platform provides tools for task management, scheduling, and collaboration.',
            icon: '📊',
            alt: 'Project Management Dashboard'
        },
        {
            title: 'Workload Management',
            description: 'Balance workloads across your team to ensure optimal productivity. Visualize team capacity and adjust assignments accordingly.',
            icon: '⚖️',
            alt: 'Workload Management'
        },
        {
            title: 'Planning',
            description: 'Create detailed project plans with timelines, milestones, and dependencies. Keep your projects on track and within budget.',
            icon: '🗓️',
            alt: 'Project Planning'
        },
        {
            title: 'Time Tracking',
            description: 'Track time spent on tasks and projects to improve efficiency and accountability. Generate reports to analyze productivity.',
            icon: '⏱️',
            alt: 'Time Tracking'
        },
    ]


  return (
    <section className='py-16 bg-gradient-to-br from-gray-100 to-indigo-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-12'>All the Features You Need to <span className='text-purple-600'>Succeed</span></h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12'>
                {features.map((feature,index) => (
                    <div key={index} className='felx flex-col md:flex-row items-center text-center md:text-left bg-white p-6 rounded-lg shadow-md duration-300 hover:shadow-lg'>
                        <div>
                            <div className='md:w-1/2 mb-6 md:mb-0 md:mr-6'>
                                <span className='text-6xl  mx-auto md:mx-0'>{feature.icon}</span>
                            </div>
                            <div className='md:w-1/2'>
                                <h3 className='text-xl font-semibold text-gray-9000 mb-3'>{feature.title}</h3>
                                <p className='text-gray-600 leading-relaxed'>{feature.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div>
                <a
                href='/features'
                className='inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 transitiom duration-300 mt-5'
                >Explore All Features</a>
            </div>
        </div>
    </section>
  )
}

export default FeaturesSection