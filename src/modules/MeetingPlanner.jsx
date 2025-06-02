import React, { useState } from 'react'

const MeetingPlanner = ({ addMeeting }) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [agenda, setAgenda] = useState('');

    const handleAddMeeting = (e) => {
        e.preventDefault();
        if (title && date && time) {
            addMeeting({title, date, time, agenda, id: Date.now()});
            setTitle('');
            setDate('');
            setTime('');
            setAgenda('');
        }
    }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
        <div className='space-y-4'>
            <input 
            type='text'
            placeholder='Meeting Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
            <input
            type='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
            <input
            type='time'
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
            <textarea 
            placeholder='Meeting Agenda'
            value={agenda}
            onChange={(e) => setAgenda(e.target.value)}
            className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400'
            />
            <button
            onClick={handleAddMeeting}
            className='w-full bg-purple-600 text-white p-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-400'
            >
                Add Meeting
            </button>
        </div>
    </div>
  );
}

export default MeetingPlanner