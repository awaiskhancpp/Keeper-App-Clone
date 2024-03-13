import React from 'react'
import "./card.css"
import { Button } from '@mui/material'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note = (props) => {
    const deleteNote=()=>{
         props.deleteItem(props.id)
        // const deleteEmogi=(idx)=>{
        //     {setEmojis((previousEmoji)=> {
        //      return previousEmoji.filter((e)=>e.id!=idx)
        //     })};
        //  }
    }
  return (
        <div className="note">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <Button onClick={deleteNote}>
                <DeleteOutlineIcon className="del-button"/>
            </Button>
        </div>
  )
}

export default Note
