import { getImageUrl } from '../../utils';
import styles from './Contact.module.css';
const Contact = () =>{
     return     (
         <footer className={styles.container} id='contact'>

             <div className={styles.text}>
                 <h2 >Contact</h2>
                 <p>Feel free to react out!</p>
             </div>
              <ul className={styles.links}>
                <li className={styles.link}>
                 <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
                 <a href="mailto:ashutohs692003@gmail.com">ashutosh692003@gmail.com</a>
                 </li>
                 <li className={styles.link}>
                 <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
                 <a href="https://www.linkedin.com/in/ashutosh-mishra-b19b00239">linkedin.com/Ashutosh</a>
                 </li >
                 <li className={styles.link}>
                 <img src={getImageUrl("contact/githubIcon.png")} alt= "github icon" />
                 <a href="https://github.com/Ashutosh692003">github.com/Ashutosh</a>
                 </li>
              </ul>
         </footer>
     )
     
}
export default Contact;