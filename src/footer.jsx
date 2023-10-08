import "./App.css";
//import react from "react";
const year=new Date().getFullYear();
function footer(){
    return(
        <div className="foot">
         <p>Copyright @{year}</p>
        </div>
    )
}
export default footer;