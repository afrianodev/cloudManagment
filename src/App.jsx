import { useState, useContext, createContext } from 'react'
import axios from 'axios'
import './App.css'
import { SharedStateContext } from './SharedContext'
import Create from './Create'
import Tasks from './Tasks';
import CategorieSelection from './CategorieSelection'


function App() {
  const [tasks, setTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [categorie, setCategorie] = useState('Personal')

  const contextValue = {
    tasks,
    setTasks,
    newTask,
    setNewTask,
    categorie,
    setCategorie
  }

  const fetchTasks = () => {
    axios.get('http://localhost:3000/get')
      .then((result) => setTasks(result.data))
      .catch((err) => console.log(err));
  };

  return (
    <SharedStateContext.Provider value={contextValue}>
    <div className='bg-[#9FC1E5] shadow-md w-[50%] p-16 flex flex-col justify-center items-center gap-4 mx-auto mt-4 rounded-md'>
      <h1 className='font-extrabold text-xl text-[#0D1E30]'>Cloud Management</h1>
      <Create onAddedTask={fetchTasks} />
    </div>
    <CategorieSelection />
    <Tasks />
    </SharedStateContext.Provider>
  )
}

export default App
