import { Link } from "react-router-dom"
import Technologies from "../Technologies"

const Project = ({description, projectName, icons ,url}: {description: string; projectName: string; icons: Array<string>; url: string;})=>{
    
    return (
        <div className="project-container">

            <Link to={url} className="project-header" target="_blank" rel="noopener noreferrer">
                <h3>      
                {projectName}
                </h3>
            </Link>
            <article className="project">
                <h4>Technologies used</h4>
                <Technologies icons={icons}/> 
                <p className='project-text'>{description}</p>
            </article> 
        </div>
    )
}


export default Project