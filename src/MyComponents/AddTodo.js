import React from 'react'
import { useState } from 'react'

export const AddTodo = ({addTodo}) => {

    const [title,setTitle] = useState("");
    const [desc,setDesc] = useState("");

   

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("Please fill all the fields");
        }
        else{
            addTodo(title,desc);
            setTitle("");
            setDesc("");
        }
    }
    return (
        <div className='container my-3'>
            <form onSubmit={submit}>
                <h3>Add New Todo</h3>
                <div className="mb-3">
                    <label htmlFor="todoTitle" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="todoTitle" aria-describedby="todoTitle"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="todoDesc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="todoDesc"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
