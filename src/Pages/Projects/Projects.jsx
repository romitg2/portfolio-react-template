import './projects.css'
import ProjectCard from './ProjectCard/ProjectCard'; 
import HeaderProjects from './HeaderProjects/HeaderProjects';
function Projects() {

    return (
        <>
            {/* <h1>Projects</h1> */}
            <HeaderProjects />
            <section>
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </section>
        </>
    )
}

export default Projects;