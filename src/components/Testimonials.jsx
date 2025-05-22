import React from 'react'
import profile_img_1 from '../assets/profile_img_1.png'
import profile_img_2 from '../assets/profile_img_2.png' 

const Testimonials = () => {
    const testimonials = [
        {
            name: 'Virgil Van Gakpo',
            position: 'CEO, Mersiside.Corp',
            testimonial: 'GoodDay has transformed our workflow and increased our productivity significantly.',
            image: profile_img_1
        },
        {
            name: 'Luis Diaz Salazar',
            position: 'Project Manager, LiverBird.Co',
            testimonial: 'The features are intuitive and the support is top-notch. Highly recommend!',
            image: profile_img_2
        },
    ]

  return (
    <section className='py-16 bg-gradient-to-br from-gray-100 to-indigo-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h2 className='text-3xl md:text-4xl font-extrabold text-gray-900 mb-12'>What our <span className='text-purple-600'>Customers Say</span></h2>
            <div className='flex flex-wrap justify-center gap-8'>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className='max-w-[340px] border shadow-2xl rounded px-8 py-12 text-center bg-white'>
                        <img src={testimonial.image} className='w-20 h-20 rounded-full mx-auto mb-4' alt={testimonial.name}/>
                        <h2 className='font-semibold text-gray-900 mb-3'>{testimonial.name}</h2>
                        <p className='text-sm text-gray-500'>{testimonial.position}</p>
                        <p className='text-gray-700 italic text-lg'>{testimonial.testimonial}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Testimonials