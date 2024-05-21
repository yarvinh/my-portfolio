import { Link } from "react-router-dom"
import "../style/nav-bar.css"
const Technologies = (props: {icons: Array<string> })=>{
   return(
    <section className="space-between icon-container">
     {props.icons.map((icon,index)=> <img src={icon} key={index} className="icons" alt="HTML5 icon"/>  )} 
       
    </section>
   )
}



export default Technologies