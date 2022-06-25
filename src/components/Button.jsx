import React from 'react'

const Button = ({ color, text, onClick }) => {

    return (
        <button onClick={onClick} className='btn' style={{ background: color }}>{text}</button>
    )
}

export default Button