import { Link } from "react-router-dom"
import Technologies from "../components/Techologies"

const ProjectsContainer = (props: {url: string; projectName: string; children: React.ReactNode; })=>{
    return (
         <div className="project-container">
            <Link to={props.url} className="project-header" target="_blank" rel="noopener noreferrer">
                <h3>      
                    {/* Work Orders App */}
                {props.projectName}
                    {/* Jan 2023 - PresentJan 2023 - Present */}
                </h3>
            </Link>
            <article className="project">
                {props.children}   
                <Technologies/>
            </article> 
         </div>
    )
}

export default ProjectsContainer