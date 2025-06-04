import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react'

const FileManagement = () => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (e) => {
    const uploadFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...uploadFiles]);
  }

  const handleDelete = (index) => {
    setFiles(files.filter((_, i) => i !== index))
  }

  return (
    <div className='p-4'>
      <input 
      type='file'
      multiple
      ref={fileInputRef}
      onChange={handleFileUpload}
      className='mb-4'
      />

       {/* File lists  */}
       <ul>
          {files.map((file, idx) => (
            <li key={idx} className='flex items-center justify-between mb-2'>
              <span>{file.name}</span>
              <button onClick={() => handleDelete(idx)}
                className='text-red-500 hover:text-red-700 ml-2'
                >
                <XMarkIcon className='w-5 h-5'/>
              </button>
            </li>
          ))}
       </ul>
    </div>
  )
}

export default FileManagement