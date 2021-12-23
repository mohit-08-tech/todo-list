import React from 'react'

export const TodoItems = ({todo,onDelete}) => {
    return (
        <div className="my-3">
            <h3>{todo.title}</h3>
            <p>{todo.describe}</p>
            <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
        </div>
    )
}
