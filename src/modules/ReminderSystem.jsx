import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState, useRef } from 'react'

const ReminderSystem = () => {
    const [reminders, setReminders] = useState([]);
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const alertedIds = useRef(new Set()); // to track which reminders have already alerted

    // load reminders from localStorage on initial render
    useEffect(() => {
        const savedReminders = localStorage.getItem('reminders');
        if (savedReminders) {
            setReminders(JSON.parse(savedReminders));
        }
    }, []);
    // save reminders to localStorage whenever reminders change
    useEffect(() => {
        localStorage
    }, [reminders]);

    const addReminder = (e) => {
        e.preventDefault();
        if (!title || !date || !time) return;
        setReminders([
            ...reminders,
            {
                id: Date.now(),
                title,
                date,
                time,
                createdAt: new Date().toISOString()
            }
        ]);
        setTitle('');
        setDate('');
        setTime('');
    }

    // play sound when reminder is added
    const playAlertSound = () => {
        const audio = new Audio ('https://assets.mixkit.co/sfx/preview/mixkit-alarm-digital-clock-beep-989.mp3');
        audio.play();
    };

    // Constantly check reminders every minute
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const nowDate = now.toISOString().slice(0, 10);
            const nowTime = now.toTimeString().slice(0, 5);

            reminders.forEach(reminder => {
                if (
                    reminder.date === nowDate &&
                    reminder.time === nowTime &&
                    !alertedIds.current.has(reminder.id)
                ) {
                    playAlertSound();
                    alertedIds.current.add(reminder.id);
                    alert(`Reminder: ${reminder.title} at ${reminder.time}`);
                }
            });
        }, 1000 * 30); // Check every 30 seconds
        return () => clearInterval(interval);
    }, [reminders])

    const deleteReminder = (id) => {
        setReminders(reminders.filter(r => r.id !== id));
    }

  return (
    <div>
        {/* <h3>Set Reminder</h3> */}
        <form
        onSubmit={addReminder}
        className='space-y-4'
        >
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Title</label>
                <input 
                type='text'
                className='w-full border rounded p-2'
                placeholder='Enter Reminder Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700 mb-1'>Date</label>
                <input 
                type='date'
                className='w-full border rounded p-2'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
            </div>
            <div>
                <label
                className='block text-sm font-medium text-gray-700 mb-1'
                >Time</label>
                <input 
                type='time'
                className='w-full border rounded p-2'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <button
            type='submit'
            className='w-full bg-purple-500 text-white rounded-md hover:bg-purple-700 px-4 py-2'
            >
                Add Reminder
            </button>
            </div>
        </form>

        {/* The list of reminders will be displayed below: */}
        <div>
            <h4 className='font-semibold mb-2 mt-1'>Your Reminders</h4>
            <ul>
                {reminders.map(reminder => (
                    <li
                    key={reminder.id}
                    className='flex justify-between items-centerbg-gray-50 p-3 rounded hover:bg-gray-100 shadow-md transition-colors mb-2'
                    >
                        <div>
                            <h5>{reminder.title}</h5>
                            <div className='text-sm text-gray-600'>{reminder.date} at <span className='text-green-600 font-bold'>{reminder.time}</span></div>
                        </div>
                        <button 
                        className='ml-4 text-red-500 hover:text-red-700 hover:border-red-500 hover:bg-red-100 rounded-full p-1 transition-colors'
                        onClick={() => deleteReminder(reminder.id)}
                        >
                            <XMarkIcon className='h-5 w-5'/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ReminderSystem