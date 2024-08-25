import { useState } from 'react'

import  styles from './App.module.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skill from './Components/Skills_Folder/Skill'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
      <div className={styles.App}>
               <Navbar/>
               <Hero/>
              <About/>
              <Skill/>
              <Project/>
              <Contact/>
      </div>
  )
}

export default App
