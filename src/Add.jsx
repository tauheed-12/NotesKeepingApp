import React,{useState} from "react";
import Datas from "./Datas.js";
import "./App.css"
function Add(props){
    const [note,ChangeNote]=useState(
        {
            title:"",
            content:""
        }
    )
    const[count,ChangeCount]=useState(7);
    // function handleChange(event){
    //       const {name,value}=event.target;
    //       ChangeNote(preValue=>{
    //         return {
    //             ...preValue,
    //             [name]:value
    //         }
    //       })
    // }
    function AddNote(event){
         props.onAdd(note);
         ChangeNote({
            title:"",
            content:"",
         })
         event.preventDefault();
    }
    return(
        <div className="Notes">
          <div className="helper">
            <div className="inputArea">
            <input type="text" placeholder="Enter the title" name="title" value={note.title} onChange={(e)=>ChangeNote(preValue=>{
            return {
                ...preValue,
                [e.target.name]:e.target.value
            }
          })}/>
            <textarea placeholder="Enter the Notes" name="content" value={note.content} rows={6} cols={28} onChange={(e)=>ChangeNote(preValue=>{
            return {
                ...preValue,
                [e.target.name]:e.target.value
            }
          })}/>
            </div>
            <div className="add1">
            <button type="submit" id="add" onClick={AddNote}>Add</button>
            </div>
            </div>
        </div>
    )
}
export default Add;