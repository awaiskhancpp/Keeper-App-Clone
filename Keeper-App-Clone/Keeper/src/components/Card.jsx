import { useState } from "react"
import React from "react";
import "./card.css"
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
const Card = ({addNote}) => {
    const [note,setNote]=useState({
        title:"",
        content:""
    })
    const [expand,setExpand]=useState(false);
    
    const handleChange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        addNote(note);
        
        setNote(
            {
                title:"",
                content:""
            }
        )
    }
  return (

    <div className="card" onDoubleClick={()=>setExpand(false)}>      
            {expand?<input className="card-title" type="text" placeholder="Title" name="title" value={note.title} onChange={(e)=>handleChange(e)} default="Title"/>:null}
            <textarea className="card-text" name="content" placeholder="Take a Note..." value={note.content} onChange={(e)=>handleChange(e)} default="Take a note..." onClick={()=>setExpand(true)}/>
            {expand?<Button type="submit" onClick={(e)=>handleSubmit(e)}>
                <AddIcon className="button"/>
            </Button>:null}
        
        
    </div>
  )
}
export default Card