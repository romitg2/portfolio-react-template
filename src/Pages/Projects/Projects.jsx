import './projects.css'
import ProjectCard from './ProjectCard/ProjectCard'; 
import HeaderProjects from './HeaderProjects/HeaderProjects';
function Projects() {

    return (
        <>
            {/* <h1>Projects</h1> */}
            <HeaderProjects />
            <div className='projects-cards'>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    )
}

export default Projects;