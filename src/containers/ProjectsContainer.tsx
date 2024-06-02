import Project from '../components/projects/project';
import { PROJECTS } from '../helpers/constants';
import '../style/projects.css'

const ProjectsContainer = ()=>{
    return (
        <section className='projects-container'>
           {PROJECTS.map((project,index)=>{
                return (
                    <Project key={index} projectName={project.projectName} 
                    url={project.url} icons={project.icons} 
                    description={project.description}/>
                )
           })}
        </section>
    )
}

export default ProjectsContainer