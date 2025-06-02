import React from 'react'
import { MapIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const ContactUs = () => {
  return (
   <section className='bg-purple-300 py-16 px-4 sm:px-6 lg:px-8'>
    <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
            <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl mt-10'>Contact Us</h2>
            <p>If you are in need of any assistance feel free to get in touch with our team.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* // Contact Information */}
            <div className='space-y-8'>
                <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-blue-100 rounded-md p-3'>
                        <MapIcon className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-medium text-gray-900'>Our Office</h3>
                        <p className='mt-2 text-base text-gray-500'>
                            Anfield Road <br />
                            Liverpool, L4 0TH <br />
                            United Kingdom
                        </p>
                    </div>
                </div>

                <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-blue-100 rounded-md p-3'>
                        <EnvelopeIcon className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-medium text-gray-900'>Email Us</h3>
                        <p className='mt-1 text-gray-600'>
                            <a
                            href='mailto:liverpool@example.com' className='text-blue-600 hover:text-blue-500'
                            >liverpool@example.com
                            </a>
                            <br />
                            <a
                            href='mailto:support@example.com' className='text-blue-600 hover:text-blue-500'
                            >
                                support@example.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className='flex items-start'>
                    <div className='flex-shrink-0 bg-blue-100 rounded-md p-3'>
                        <PhoneIcon className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='text-lg font-medium text-gray-900'>
                            Call Us
                        </h3>
                        <p className='mt-1 text-gray-600'>
                            <a
                            href='tel:+441234567890' className='text-blue-600 hover:text-blue-500'
                            >
                                +44 123 456 7890
                            </a>
                            <br />
                            Mon-Fri, 9am-5pm
                            <br />
                            Weekends - Closed
                        </p>
                    </div>
                </div>
            </div>

            {/* // Contact Form */}
            <div className='bg-gray-100 rounded-lg p-8'>
                <form>
                    <div className='grid grid-cols-1 gap-6'>
                        <div>
                            <label htmlFor='name' className='block text-sm font-medium text-gray-700'>Name</label>
                            <input type='text' id='name' name='name' required className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'/>
                        </div>

                        <div>
                            <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                            <input type='email' id='email' name='email' required className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'/>
                        </div>

                        <div>
                            <label htmlFor='message' className='block text-sm font-medium text-gray-700'>Message</label>
                            <textarea id='message' name='message' rows={4} required className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'></textarea>
                        </div>

                        <button type='submit' className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700'>Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    </div>    
   </section>
  )
}

export default ContactUs