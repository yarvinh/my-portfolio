import { Link } from "react-router-dom"

const NavBar = ()=>{
    return (
        <nav className='nav-bar'> 
            <img src="../icons/profileimg.jpeg" className="profile-img" alt="my self in blue tshirt"/>
            <div className="icons-container">
                <Link to="https://www.linkedin.com/in/yarvin-hernandez-332572aa/" className="icon-link">
                    <img src="icons/linkedin-original.svg" className="icons" alt="Linkedin icon"/> 
                </Link>
                <Link to="https://github.com/yarvinh" className="icon-link">
                    <img src="icons/github-original-wordmark.svg" className="icons" alt="github icon"/> 
                </Link>
            </div>
            <Link to="/resume" id="resume-file-link" className="icon-link" target="_blank" >
                <img src="icons/file.svg" className="icons" alt="github icon"/> 
                Resume
            </Link>
        </nav> 
    )
}

export default NavBar