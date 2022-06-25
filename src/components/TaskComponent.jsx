import { FaTimes } from 'react-icons/fa'

const TaskComponent = ({ Task, onDelete, toggle }) => {
    return (
        <div className={`task ${Task.reminder ? 'reminder' : ''}`}>
            <h2 onDoubleClick={() => { toggle(Task.id) }} key={Task.id}>{Task.text}
                <FaTimes onClick={() => onDelete(Task.id)}
                    style={{ color: 'red', cursor: 'pointer' }} /></h2>

        </div >
    )
}

export default TaskComponent;
