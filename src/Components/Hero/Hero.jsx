import { getImageUrl } from "../../utils";
import styles from './Hero.module.css'

const Hero = () =>{
  return (
               <section className={styles.container}>

                 <div className={styles.content}>
          <h1 className={styles.title}>Hii I am Ashutosh</h1>
          <p className={styles.description}> A passionate full-stack developer with expertise in building dynamic and responsive web applications.</p>
          <a href="mailto:ashutosh692003@gmail.com" className={styles.contactBtn}>Contact me</a>
                 </div>

                 <img src={getImageUrl("hero/logo.png")} alt="Hero image"  className={styles.heroImg}/>

                 <div className={styles.topBlur}></div>
                 <div className={styles.bottomBlur}></div>

               </section>
  )
}

export default Hero;