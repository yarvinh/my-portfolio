import { LABELS } from '../helpers/constants'
import '../style/footer.css'
import { Link } from 'react-router-dom'

const Footer = ()=>{
    return (
        <section className="footer">
            <Link to="mailto:yarvinhhernandez@gamail.com" id="email-link" >
                <img src="icons/email-icon.svg" className="footer-icons" alt="email icon"/> 
                <strong>{LABELS.email}</strong>
            </Link>
            <Link to="tell:yarvinhhernandez@gamail.com" id="email-link" >
                <img src="icons/email-icon.svg" className="footer-icons" alt="email icon"/> 
                <strong>Contact me</strong>
            </Link>
        </section>
    )
}

export default Footer