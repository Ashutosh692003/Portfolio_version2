import skills from '../../data/skills.json'
import { getImageUrl } from '../../utils';
import styles from './Skill.module.css'
const Skill  = () =>{

     return  <section className={styles.container} id='skill'>
                             <h2 className={styles.title}>Skills</h2>
                             
                                  <div className={styles.skills}>
                                           {
                                                    skills.map((skill,id)=>
                                                         {
                                                                      return <div key={id} className={styles.skill}>

                                                                            <div className={styles.skillImageContainer}><img src={getImageUrl(skill.imageSrc)} alt={skill.title} height={75} width={75}/></div> 
                                                                            <p>{skill.title}</p> 
                                                                      </div>
                                                         }
                                                    )
                                           }
                                  </div>
                                 
                          
     </section>

}
export default Skill;