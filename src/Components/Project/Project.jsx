import  styles from './Project.module.css'
import projects from '../../data/projects.json';
import { getImageUrl } from '../../utils';
import ProjectCard from './ProjectCard';

const Project = () =>{

     return (
            <section className={styles.container}  id='project'>
      <h2 className={styles.title}>Projects</h2>
                                    <div className={styles.projects}>

                                        {
                                                projects.map((project,id)=>{
                                                 return     <ProjectCard project={project} id={id}></ProjectCard> 
                                                })           
                                        }
                                    </div>
            </section>
     )

}
export default Project;