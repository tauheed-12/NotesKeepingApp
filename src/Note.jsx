import "./App.css";
//import react from "react";
function Note(props){
    return (
        <div className="content">
        <div className="NoteTitle">
        <h3>{props.title}</h3>
        </div>
        <div className="NoteDetail">
        <p>{props.content}</p>
        </div>
        <div className="but"> 
        <button onClick={(e)=>props.onDelete(props.id)}>delete</button>
        </div>
        </div>
    )
}
export default Note;