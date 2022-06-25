import { useState } from 'react'

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const submit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add task');
        } else {
            addTask({
                Text: text,
                Day: day,
                Reminder: reminder
            })
            setText('');
            setDay('');
            setReminder(false);

        }

    }
    return (
        <form className='add-form' onSubmit={submit}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='add task' value={text}
                    onChange={(change) => {
                        setText(change.target.value)
                    }} />
            </div>

            <div className='form-control'>
                <label>Day</label>
                <input type='text' placeholder='add Day' value={day}
                    onChange={
                        (day) => {
                            setDay(day.target.value)
                        }
                    } />
            </div>

            <div className='form-control form-control-check'>
                <label>set reminder</label>
                <input type='checkbox' value={reminder}
                    onChange={(check) => {
                        setReminder(check.currentTarget.checked) // same but for cehck box --> returns true or false

                    }} />
            </div>
            <input className='btn btn-block' type='submit' value='save task' />
        </form>
    )
}

export default AddTask