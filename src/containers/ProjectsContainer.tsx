import { Link } from "react-router-dom"
import Technologies from "../components/Technologies"
import '../style/projects.css'
const ProjectsContainer = (props: {url: string; projectName: string; children: React.ReactNode; icons: Array<string>; })=>{
    return (
         <div className="project-container">
            <Link to={props.url} className="project-header" target="_blank" rel="noopener noreferrer">
                <h3>      
                  {props.projectName}
                </h3>
            </Link>
            <article className="project">
            <h4>Technologies used</h4>
            <Technologies icons={props.icons}/> 
                {props.children}  
            </article> 
         </div>
    )
}

export default ProjectsContainer