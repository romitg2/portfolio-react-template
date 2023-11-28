import CardFooter from "./CardFooter";
import './projectCard.css';
import image1 from './../../../assets/image1.jpg'
import './ProjectCard.css'

function ProjectCard() {
  return (
    <>
      
      <div className="main-project-card">
        <div className="project-image-box">
          <img className="project-image" src={image1} />
        </div>
        <CardFooter />
      </div>

    </>
  )
}
export default ProjectCard;
