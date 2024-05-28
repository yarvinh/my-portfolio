import ProjectsContainer from "../containers/ProjectsContainer"
import About from "./about"
import { IMG } from "../helpers/constants"
import Dialog from "./Dialog"
import { useRef } from "react"
const Home = ()=>{
    const dialog = useRef()

    const handleOnclick=()=> {
       dialog.current.showModal()
    }

    return (
        <>
            <About/>
            <section className='projects-container'>
                <ProjectsContainer projectName="Work Orders App" url="https://www.maintainmagic.com/" icons={[IMG.htmlIcon, IMG.cssIcon,IMG.postgresqlIcon,IMG.railsIcon, IMG.reactIcon]}>
                    <p className='project-text'>
                        Work orders app keep buildings maintenance record. You can create an account, login and logout, you can create locations, employees, work orders and assign it to an employees.
                        You can see any HPD violation or complaint, and you can see any DOB violation.
                    </p>
                </ProjectsContainer>
                <ProjectsContainer projectName="East Harlem Corp" url="https://safe-sands-70988-45596a723e4f.herokuapp.com/" icons={[IMG.railsIcon,IMG.cssIcon, IMG.htmlIcon]}>
                <p className='project-text'>
                    This app was build for a contruction company, they can upload images of construction renovation. constumers can apply for a quote.
                </p>
                </ProjectsContainer>
                <ProjectsContainer projectName="Soccer-quiz" url="https://rubygems.org/gems/soccer-quiz" icons={[IMG.rubyIcon]}>
                <p className='project-text'>   
                </p>
                </ProjectsContainer>
                <ProjectsContainer projectName="Bet App" url="" icons={[IMG.htmlIcon, IMG.cssIcon,IMG.postgresqlIcon,IMG.railsIcon, IMG.reactIcon]} >
                <p className='project-text'>
                  This is a soccer betting app where users have the ability to login, logout and sign-up. Users can also see, bet and like upcoming soccer matches.
                </p>
                </ProjectsContainer>
            </section>
        </>
    )
}

export default Home