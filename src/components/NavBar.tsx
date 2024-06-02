import { Link } from "react-router-dom"
import '../style/nav-bar.css'
import { LABELS } from "../helpers/constants"

const NavBar = ()=>{
    return (
        <nav className='nav-bar'> 
            <div className="profile-image">
                <img src="../icons/profileimg.jpeg" className="profile-img" alt="my self in blue tshirt"/>
                <p id="name"><strong>{LABELS.name}</strong></p>
            </div>
            <div className="icons-container">
                <Link to="https://www.linkedin.com/in/yarvin-hernandez-332572aa/" className="icon-link">
                    <img src="icons/linkedin-original.svg" className="icons" alt="Linkedin icon"/> 
                </Link>
                <Link to="https://github.com/yarvinh" className="icon-link">
                    <img src="icons/github-original-wordmark.svg" className="icons" alt="github icon"/> 
                </Link>
            </div>
            <Link to="/resume" id="resume-file-link" className="icon-link" target="_blank" >
                <img src="icons/file.svg" className="resume-img" alt="github icon"/> 
                <strong>Resume</strong>
            </Link>
        </nav> 
    )
}

export default NavBar