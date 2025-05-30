import { useState } from 'react'
import {
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  FolderIcon,
  ListBulletIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const ProductivitySuite = () => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    {
      id: 'meetings',
      title: 'Meeting Planner',
      icon: <CalendarIcon className='8 w-8 text-blue-500' />,
      description: 'Schedule and manage meetings efficiently with our intuitive planner.',
      content: (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Schedule a Meeting</h3>
          <div className='grid grid-cols-2 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
              <input
                type='text'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500'
                placeholder='Enter meeting title' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
              <input
                type='date'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Time</label>
              <input
                type='time'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500' />
              </div>
              <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Duration</label>
                <select className='w-full p-2 border rounded'>
                  <option value='30'>30 minutes</option>
                  <option value='60'>1 hour</option>
                  <option value='90'>1.5 hours</option>
                  <option value='120'>2 hours</option>
                </select>
              </div>
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Participants
            </label>
            <input 
            type='text'
            placeholder='Enter participant emails (comma separated)'
            className='w-full p-2 border rounded'
            />
          </div>
          <div>
            <label className='block text-sm font-medium text-gray-700 mb-1'>
              Agenda
            </label>
            <textarea
            rows={3}
            className='w-full p-2 border rounded'
            ></textarea>
          </div>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700'>
            Schedule Meeting
            </button>
        </div>
      )
    },
    {
      id: 'events',
      title: 'Event Scheduler',
      icon: <CalendarIcon className='h-8 w-8 text-purple-500' />,
      description: 'Organize and manage events seamlessly with our event scheduler.',
      content: (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Create an Event</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Event Name</label>
              <input
                type='text'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500'
                placeholder='Enter event name' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
              <input
                type='date'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Time</label>
              <input
                type='time'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Location</label>
              <input
                type='text'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500'
                placeholder='Enter event location' />
            </div>
          </div>
          <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'>
            Create Event
          </button>
        </div>
      )
    },
    {
      id: 'notes',
      title: 'Note Taking',
      icon: <DocumentTextIcon className='h-8 w-8 text-green-500' />,
      description: 'Capture and organize your thoughts with our intuitive note-taking module.',
      content: (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Take a Note</h3>
          <textarea
            rows={6}
            className='w-full p-2 border rounded focus:border-green-500 focus:ring-green-500'
            placeholder='Write your note here...'
          ></textarea>
          <button className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700'>
            Save Note
          </button>
        </div>
      )
    },
    {
      id: 'files',
      title: 'File Management',
      icon: <FolderIcon className='h-8 w-8 text-yellow-500' />,
      description: 'Organize and manage your files with our comprehensive file management system.',
      content: (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Manage Files</h3>
          <div className='flex items-center space-x-4'>
            <input
              type='file'
              className='border rounded p-2'
            />
            <button className='bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700'>
              Upload File
            </button>
          </div>
          <div className='mt-4'>
            <h4 className='text-md font-medium'>Your Files</h4>
            <ul className='list-disc pl-5 mt-2'>
              <li>File1.pdf</li>
              <li>Document.docx</li>
              <li>Image.png</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'tasks',
      title: 'Task Management',
      icon: <ListBulletIcon className='h-8 w-8 text-red-500' />,
      description: 'Keep track of your tasks and to-dos with our efficient task management module.',
      content: (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Manage Tasks</h3>
          <div className='flex items-center space-x-4'>
            <input
              type='text'
              className='border rounded p-2 w-full'
              placeholder='Enter new task...'
            />
            <button className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'>
              Add Task
            </button>
          </div>
          <ul className='list-disc pl-5 mt-2'>
            <li>Task 1</li>
            <li>Task 2</li>
            <li>Task 3</li>
          </ul>
        </div>
      )
    },
    {
      id: 'reminders',
      title: 'Reminder System',
      icon: <ClockIcon className='h-8 w-8 text-orange-500' />,
      description: 'Set reminders for important tasks and deadlines to stay on track.',
      content: (
        <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Set a Reminder</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
              <input
                type='text'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500'
                placeholder='Enter reminder title' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
              <input
                type='date'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Time</label>
              <input
                type='time'
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-orange-500 focus:ring-orange-500' />
            </div>
          </div>
          <button className='bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700'>
            Set Reminder
          </button>
        </div>
      )
    }
  ];

  const closeModule = () => setActiveModule(null);


  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-gray-100'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl'>Productivity Suite</h2>
          <p className='mt-4 text-xl text-gray-600'>
            Enhance your team's productivity with our comprehensive suite of tools designed to streamline workflows, improve collaboration, and boost efficiency.
          </p>
        </div>

        {/* module grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {modules.map((module) => (
            <div
            key={module.id}
            className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              <div className='flex items-center mb-4'>
                <div className='p-2 rounded-full bg-opacity-10 mr-4'>
                  {module.icon}
                </div>
                <h3 className='text-xl font-semibold'>{module.title}</h3>
              </div>
              <p className='text-gray-700 mb-6'>{module.description}</p>
              <button
              onClick={() => setActiveModule(module.id)}
              className='w-full py-2 px-4 border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:ng-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-3 focus:ring-purple-500'
              >Try It Out</button>
            </div>
          ))}
        </div>

        {/* active module content */}
        {activeModule && (
          <div className='fixed inset-0 bg-purple-500/50 backdrop-blur-md bg-opacity-50 flex items-center justify-center p-4 z-50'>
            <div className='bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto'>
              <div className='p-6'>
                <div className='flex jusyify-between items-start mb-6'> 
                  <div className='flex items-center'>
                    {modules.find(m => m.id === activeModule)?.icon}
                    <h3 className='text-2xl font-bold ml-3'>
                      {modules.find(m => m.id === activeModule)?.title}
                    </h3>
                  </div>
                  <button
                  onClick={closeModule}
                  className='text-gray-400 hover:text-gray-600'
                  >
                    <XMarkIcon className='h06 w-6' />
                  </button>
                </div>
                {modules.find(m => m.id === activeModule)?.content}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProductivitySuite