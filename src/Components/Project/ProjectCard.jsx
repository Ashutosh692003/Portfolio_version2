import './ProjectCard.module.css'
import { getImageUrl } from '../../utils';
import styles from './ProjectCard.module.css'
const ProjectCard = ({project,id}) =>{
     return (
     <div className={styles.container}>

                                                        <img src={getImageUrl(project.imageSrc)} alt={project.title} className={styles.image} height={200} width={298}/>
                                                        <h3 className={styles.title}>{project.title}</h3>
                                                        <p className={styles.description}>{project.description}</p>
                                                        <ul className={styles.skills}>
                                                              {
                                                                  project.skills.map((skill)=>{
                                                                     return   <li key={id} className={styles.skill}> {skill}</li>
                                                                  })
                                                              }
                                                        </ul>

                                                        <div className={styles.links}>
                                                            <a href={project.demo} className={styles.link}>Link 1</a>
                                                            <a href={project.source } className={styles.link}>Link 2</a>
                                                        </div>
                                                     </div>)

}
export default ProjectCard;