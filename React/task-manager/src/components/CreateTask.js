import React from 'react'
import {Modal} from 'antd'
import {useState} from 'react'
 

const CreateTask = () => {
    const [showModal, setShowModal] = useState(false)


    const[titles, setTitles] = useState('')
    const[description, setDescription] = useState('')
    const [tasks, setTasks] = useState([])

    const newTask = {
        titles,
        description
    }


    const createTask = ()=> {
      setTasks([...tasks, newTask])
       setTitles(' ')
       setDescription(' ')
    }
    console.log(tasks)

    // deleting the task
   const deleteTask = (index) => {
         const newTasks = [...tasks]
        //    removing the task from the array
            newTasks.splice(index, 1)
            setTasks(newTasks)
    }

  
  return (
    <div>
         <div>
        <button onClick={()=>setShowModal(!showModal)}>Create Task</button>
        <Modal title="Create Task" visible={showModal} onOk={createTask} onCancel={()=>setShowModal(!showModal)} footer = {false}>
            <input type="text" placeholder="Enter Task Name" value={titles} onChange={(e)=>setTitles(e.target.value)}/>
            <br/>
            <br/>
            <input type="text" placeholder="Enter Task Description" value = {description} onChange={(e)=>setDescription(e.target.value)}/>
            <button onClick={createTask}>Save</button>
        </Modal>


    </div>

       {
        tasks.map((task, index)=>(
            <div key={index}>
                <h1>{task.titles}</h1>
                <p>{task.description}</p>
                <button onClick={deleteTask}>Delete</button>
            </div>
        ))

       }
    </div>
  )
}

export default CreateTask