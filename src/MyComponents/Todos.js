import React from 'react'
import {TodoItems} from './TodoItems'
export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3">Todos List</h3>
            { props.todos.length === 0 ? "No Todo To Display!" :
            props.todos.map(todo=>{
                return (
                    <>
                <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/><hr/>
                    </>
                )
            })
            }
        </div>
    ) 
}
