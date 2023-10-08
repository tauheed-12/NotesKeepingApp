import react,{useState} from "react";
import Header from "./Hearder.jsx";
import Footer from "./footer.jsx";
import Note from "./Note.jsx";
import Add from "./Add.jsx";
import Datas from "./Datas.js";
import "./App.css";
function Gothrough(data){
  return <Note key={data.id} title={data.title} ans={data.ans}/>
}

function App(){
  const [x,ChangeX]=useState([])
  function addNote(note){
    ChangeX(prevNote=>{
     return [...prevNote,note];
    });
 }
 function DeleteNode(id){
  ChangeX(prevNote=>{
    return prevNote.filter((n,ind)=>{
      return ind!==id;
    })
  })
 }
  return (  <div>
        <Header />
        <Add onAdd={addNote}/>
        <div className="Main">
        {x.map((z,index) =>{
            return  <Note key={index} id={index} title={z.title} content={z.content} onDelete={DeleteNode} />
          })}
       
        </div>
    </div>
  );
}
export default App;