import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react'

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // load tasks from localStorage on initial render
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks')
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks))
    }
  }, []);

  //Saving tasks to kocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])


  // function for adding tasks
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { id: tasks.length + 1, title: newTask }])
    setNewTask("")
  }

  // function for deleting Tasks
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((t) => t.id !== taskId))
  }


  return (
    <div>
      <div className='flex justify-between'>
        <input
          type='text'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add new Task'
          className='w-full shadow-sm rounded-md mr-4'
        />
        <button
          className='bg-purple-400 text-black px-4 py-2 rounded-lg hover:bg-purple-700 hover:text-white mr-5'
          onClick={addTask}
        >
          Add
        </button>
      </div>

      {/* list of the Tasks being added */}
      <ul className='mt-5'>
        <h4 className='font-bold mb-2'>My Tasks</h4>
        {tasks.map((tasks, index) => (
          <React.Fragment key={tasks.id}>
            <li className='mb-1 flex items-center justify-between'>
              <span>
                {index + 1} . {tasks.title}
              </span>
              <button
                onClick={(e) => deleteTask(tasks.id, e)}
                className='text-red-500 hover:text-red-700'
              >
                <XMarkIcon className='h-5 w-5' />
              </button>
            </li>
            <hr className='border-purple-300 my-2' />
          </React.Fragment>
        ))}
      </ul>
    </div>
  )
}

export default TaskManagement