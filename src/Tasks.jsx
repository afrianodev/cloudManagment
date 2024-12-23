import React, {useContext, useEffect} from 'react'
import { BsDashCircleFill } from "react-icons/bs";
import { MdModeEditOutline, MdRadioButtonUnchecked, MdRadioButtonChecked } from "react-icons/md";
import { SharedStateContext } from './SharedContext';
import axios from 'axios';

function Tasks() {
    const {tasks, setTasks} = useContext(SharedStateContext)
    useEffect(() => {
        fetchTasks()
      }, [])
      
      const fetchTasks = () => {
        axios.get('https://cloudmanagmentback.onrender.com/get')
          .then((result) => setTasks(result.data))
          .catch((err) => console.log(err));
      };

    const handleDelete = (id) => {
        axios.delete('https://cloudmanagmentback.onrender.com/delete/'+id)
        .then(result => {console.log(result)
          fetchTasks()
        })
        .catch(err => console.log(err))
      }
  return (
    <div className='bg-[#9FC1E5] shadow-md w-[50%] flex flex-col justify-center items-center gap-6 mx-auto p-8 rounded-b-md'>
        {
        tasks.map((task, index) => (
          <div key={index} className='flex items-center justify-around w-full'>
            <div className='w-[90%] flex gap-2 items-center'>
                <MdRadioButtonUnchecked className='cursor-pointer' />
                <p>{task.task}</p>
            </div>
            <div className='w-[10%] flex items-center gap-2 justify-end text-[#0D1E30]'>
                <MdModeEditOutline className='cursor-pointer' />
                <BsDashCircleFill className='cursor-pointer'
                onClick={() => handleDelete(task._id)} />
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Tasks
