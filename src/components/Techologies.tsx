import { Link } from "react-router-dom"

const Technologies = ()=>{
   return(
    <section className="space-between">
        <Link to="" className="icon-link">
        <img src="icons/html5-original-wordmark.svg" className="icons" alt="HTML5 icon"/>
        </Link>
        <Link to="" className="icon-link">
        <img src="icons/css3-original-wordmark.svg" className="icons" alt="css3 icon"/>
        </Link>
        <Link to="" className="icon-link">
        <img src="icons/postgresql-plain-wordmark.svg" className="icons" alt="postgresql icon"/>
        </Link>
        <Link to="" className="icon-link">
          <img src="icons/react-original.svg" className="icons" alt="HTML5 icon"/>
        </Link>
         <Link to="" className="icon-link">
            <img src="icons/rails-plain-wordmark.svg" className="icons" alt="Ruby On Rails icon"/>
        </Link>
    </section>
   )
}



export default Technologies