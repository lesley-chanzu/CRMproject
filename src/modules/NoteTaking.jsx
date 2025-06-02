import React, { useEffect, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';

const NoteTaking = () => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('');
    const [expandedNoteId, setExpandedNoteId] = useState(null);

    // load notes from localStorage on initial render 
    useEffect(() => {
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    // save notes to localStorage whenever notes change
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const addNote = () => {
        if (newNote.trim() === '') return;

        const note = {
            id: Date.now(),
            content: newNote,
            createdAt: new Date().toISOString()
        };

        setNotes([...notes, note]);
        setNewNote('');
    };

    // note expansion 
    const toggleNoteExpansion = (id) => {
        setExpandedNoteId(expandedNoteId === id ? null : id);
    };

    // deleting notes 
    const deleteNote = (id, e) => {
        e.stopPropagation(); // prevent triggering the expansion toggle
        setNotes(notes.filter(note => note.id !== id));
    }

    // truncating the long notes 
    const truncateText = (text, maxLength = 100) => {
        if (text.length <= maxLength) return text;
        return text.slice(0, maxLength) + '...';
    }

  return (
    <div className='space-y-4'>
          <h3 className='text-lg font-medium'>Take a Note</h3>
          <textarea
            rows={5}
            className='w-full p-2 border-purple-300 rounded focus:border-green-500 focus:ring-green-500'
            placeholder='Write your note here...'
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
          ></textarea>
          <button 
            onClick={addNote}
          className='bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700'>
            Add Note
          </button>

          {/* Notes List  */}
          <div className='space-y-4'>
            {notes.map(note => (
                <div
                key={note.id}
                className='p-4 bg-white rounded-lg shadow cursor-pointer hover:shadow-md hover:bg-gray-100'
                onClick={() => toggleNoteExpansion(note.id)}
                >
                    <div className='flex justify-between items-start'>
                        <div className='w-full'>
                            {expandedNoteId === note.id ? (
                                <p className='text-gray-800 break-words'>{note.content}</p>
                            ) : (
                                <p>{truncateText(note.content)}</p>
                            )}
                        </div>
                        <button 
                        onClick={(e) => deleteNote(note.id, e)}
                            className='text-red-500 hover:text-red-700 ml-4'>
                                <XMarkIcon className='w-5 h-5' />
                                </button>
                    </div>
                </div>
            ))}
          </div>
        </div>
  )
}

export default NoteTaking