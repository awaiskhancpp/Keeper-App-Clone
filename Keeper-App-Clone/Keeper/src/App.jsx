import Note from './components/Note';
import {useState} from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';
function App() {
  const [notes,setNotes]=useState([]);
  const addNotes=(note)=>{
    setNotes([...notes,note])
    
  }
  const onDelete=(id)=>{
    setNotes((previousEmoji)=>(
      previousEmoji.filter((e,idx)=>{return idx!=id})
    ))
  }
  return(
    <>
      <Header />
      <div className='center'>
        <Card addNote={addNotes}/>
      </div>
      <div className="notes">
        {notes.map((e,idx)=>{
            return <Note key={idx} id={idx} title={e.title} content={e.content} deleteItem={onDelete}/>
        })}
      </div>
      <Footer/>
    </>
  );
}

export default App
