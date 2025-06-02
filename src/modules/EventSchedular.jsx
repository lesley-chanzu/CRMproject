import React from 'react'

const EventSchedular = ({ addEvent }) => {
    const [eventName, setEventName] = React.useState('');
    const [eventDate, setEventDate] = React.useState('');
    const [eventTime, setEventTime] = React.useState('');
    const [eventLocation, setEventLocation] = React.useState('');

    const handleCreateEvent = (e) => {
        e.preventDefault();
        if (eventName && eventDate && eventTime && eventLocation) {
            addEvent({
                eventName,
                eventDate,  
                eventTime,
                eventLocation,
                id: Date.now()
            })
            setEventName('');
            setEventDate('');
            setEventTime('');
            setEventLocation('');
        } else {
            alert('Please fill all fields');
        }
    }

  return (
   <form className='space-y-4' onSubmit={handleCreateEvent}>
          <h3 className='text-lg font-medium'>Create an Event</h3>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Event Name</label>
              <input
                type='text'
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500'
                placeholder='Enter event name' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
              <input
                type='date'
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Time</label>
              <input
                type='time'
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500' />
            </div>
            <div>
              <label className='block text-sm font-medium text-gray-700 mb-1'>Location</label>
              <input
                type='text'
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-purple-500 focus:ring-purple-500'
                placeholder='Enter event location' />
            </div>
          </div>
          <button 
            type='submit'
          className='bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'>
            Create Event
          </button>
        </form>
  )
}

export default EventSchedular