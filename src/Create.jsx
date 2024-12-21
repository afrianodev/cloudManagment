import React, { useContext, useState } from 'react'
import axios from 'axios'
import { SharedStateContext } from './SharedContext'

function Create({onAddedTask}) {
    const {newTask, setNewTask, categorie, setCategorie} = useContext(SharedStateContext)
    const [error, setError] = useState('')

    const handleAdd = () => {
        if(newTask.trim().length === 0) {
            setError('Task cannot be empty.')
            return;
        }
        setError('');
        console.log(`Task message: ${newTask}, and categorie: ${categorie}.`)
        axios.post('http://localhost:3000/post', {task: newTask, categorie: categorie})
        .then(result => {
            setNewTask('')
            setCategorie('Personal')
            onAddedTask()
        })
        .catch(err => console.log(err))
    }
    const handleKeyDown = (e) => {
        if(e.key === 'Enter') {
            handleAdd()
        }
    }
  return (
    <>
    
    <div className='flex items-center'>
        <input 
        type="text"
        className='px-2 border h-7 rounded-tl-md rounded-bl-md'
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder='Type a new task'
        value={newTask}
        lang='en' />
        <select onChange={(e) => setCategorie(e.target.value)} value={categorie}
        className='h-7'>
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
            <option value="Other">Other</option>
        </select>
        <button
        onClick={handleAdd}
        className='bg-[#1F4670] text-white px-6 h-7 rounded-tr-md rounded-br-md'>Add</button>
    </div>
    {error && (<p className='mt-2 text-center'>{error}</p>)}
    </>
  )
}

export default Create
