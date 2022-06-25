import { useState } from 'react'
import TaskComponent from './TaskComponent'

const Tasks = ({ tasks, onDelete, toggle }) => {
    return (
        <div>
            {tasks.map((task) => (<TaskComponent toggle={toggle} onDelete={onDelete} key={task.id} Task={task} />))}
        </div>
    )
}

export default Tasks
