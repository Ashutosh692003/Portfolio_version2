import { getImageUrl } from '../../utils';
import styles from './About.module.css'

const About = () =>{
          return <section className={styles.container} id='about'>

          <h2 className={styles.title}>About</h2>
          <div className={styles.content}>
              <img src={getImageUrl("about/about.png")} alt="sitting with laptop" className={styles.aboutImage}/>

               <ul className={styles.aboutItems}>
                   <li className={styles.aboutItem}><img src={getImageUrl("about/cursorIcon.png")} alt="cursor icon"  />
                         <div className={styles.aboutItemTest}>
                            <h3>Frontend Developer</h3>
                            <p> I am a frontend developer who makes responsive and optimized websites.</p>
                         </div>
                         </li>

                         <li className={styles.aboutItem}><img src={getImageUrl("about/serverIcon.png")} alt="server" />
                         <div  className={styles.aboutItemTest}>
                            <h3>Backend Developer</h3>
                            <p> I have Experience to develop fast and optimized backend systems.</p>
                         </div>
                         </li>
               </ul>
          </div>

          </section>
}
export default About;