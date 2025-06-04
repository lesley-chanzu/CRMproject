import { useState } from 'react'
import {
  CalendarIcon,
  ClockIcon,
  DocumentTextIcon,
  FolderIcon,
  ListBulletIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import MeetingPlanner from '../modules/MeetingPlanner';
import EventSchedular from '../modules/EventSchedular';
import NoteTaking from '../modules/NoteTaking';
import ReminderSystem from '../modules/ReminderSystem';
import TaskManagement from '../modules/TaskManagement';
import FileManagement from '../modules/FileManagement';

const ProductivitySuite = () => {
  const [activeModule, setActiveModule] = useState(null);
  const [meetings, setMeetings] = useState([]);
  const [events, setEvents] = useState([]);

  //  function to add or delete meetings 
  const addMeeting = (meeting) => {
    setMeetings(prev => [...prev, meeting]);
  };

  const deleteMeeting = (id) => {
    setMeetings(prev => prev.filter(m => m.id !== id));
  }

  //  function to add or delete events
  const addEvent = (event) => {
    setEvents(prev => [...prev, event]);
  };

  const modules = [
    {
      id: 'meetings',
      title: 'Meeting Planner',
      icon: <CalendarIcon className='8 w-8 text-blue-500' />,
      description: 'Schedule and manage meetings efficiently with our intuitive planner.',
      content:
        <>
          <MeetingPlanner addMeeting={addMeeting} meetings={meetings} deleteMeeting={deleteMeeting} />
          {/* display meeting below  */}
          <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Sceduled meetings</h4>
            <ul>
              {meetings.map(m => (
                <li
                  key={m.id}
                  className='mb-2 p-2 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center'
                >
                  <div>
                    <strong>{m.title}</strong> - {m.date} at {m.time}
                    <br />
                    <span className='text-sm text-gray-600'>{m.agenda}</span>
                  </div>
                  <button
                    onClick={() => deleteMeeting(m.id)}
                    className='ml-4 px-2 py-1 bg-red-400 text-white rounded-lg hover:bg-red-600 text-xs'
                  >
                    <XMarkIcon className='h-4 w-4' />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
    },
    {
      id: 'events',
      title: 'Event Scheduler',
      icon: <CalendarIcon className='h-8 w-8 text-purple-500' />,
      description: 'Organize and manage events seamlessly with our event scheduler.',
      content:
        <>
          <EventSchedular addEvent={addEvent} />
          {/* display events below  */}
          <div className='mt-4'>
            <h4 className='font-semibold mb-2'>Scheduled Events</h4>
            <ul>
              {events.map(event => (
                <li
                  key={event.id}
                  className='mb-2 p-2 border rounded-md bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center'
                >
                  <div>
                    <strong>{event.eventName}</strong> - {event.eventDate} at <span className='text-green-800 font-bold'>{event.eventTime}</span>
                    <br />
                    <span className='text-sm text-gray-600'>Location: {event.eventLocation}</span>
                  </div>
                  <button
                    onClick={() => setEvents(prev => prev.filter(e => e.id !== event.id))}
                    className='ml-4 px-2 py-1 bg-red-400 text-white rounded-lg hover:bg-red-600 text-xs'
                  >
                    <XMarkIcon className='h-4 w-4' />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </>
    },
    {
      id: 'notes',
      title: 'Note Taking',
      icon: <DocumentTextIcon className='h-8 w-8 text-green-500' />,
      description: 'Capture and organize your thougShts with our intuitive note-taking module.',
      content: <NoteTaking />
    },
    {
      id: 'files',
      title: 'File Management',
      icon: <FolderIcon className='h-8 w-8 text-yellow-500' />,
      description: 'Organize and manage your files with our comprehensive file management system.',
      content: <FileManagement />
    },
    {
      id: 'tasks',
      title: 'Task Management',
      icon: <ListBulletIcon className='h-8 w-8 text-red-500' />,
      description: 'Keep track of your tasks and to-dos with our efficient task management module.',
      content: <TaskManagement />
    },
    {
      id: 'reminders',
      title: 'Reminder System',
      icon: <ClockIcon className='h-8 w-8 text-orange-500' />,
      description: 'Set reminders for important tasks and deadlines to stay on track.',
      content: <ReminderSystem />
    }
  ];

  const closeModule = () => setActiveModule(null);


  return (
    <section className='py-16 px-4 sm:px-6 lg:px-8 bg-purple-100'>
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
                <div className='flex justify-between items-start mb-6'>
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