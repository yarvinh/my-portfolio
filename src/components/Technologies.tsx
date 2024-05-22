import { Link } from "react-router-dom"
import "../style/technologies.css"
const Technologies = (props: {icons: Array<string> })=>{
   return(
    <section className="space-between technologies-container">
     {props.icons.map((icon,index)=> <img src={icon} key={index} className="techologies-icons" alt="HTML5 icon"/>  )}  
    </section>
   )
}

export default Technologies