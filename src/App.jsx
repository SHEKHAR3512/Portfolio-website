import React, { useEffect, useState } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Contact from './components/Contact'
import { Loader } from './components/Loader'
import { ThemeProvider } from './context/ThemeContext'
import ProjectShowcase from "./components/Project"
function App() {
  const [isLoading,setIsLoading]=useState(true)
  useEffect(()=>{
const timer = setTimeout(()=>{
  setIsLoading(false)
},2000)
return ()=>clearTimeout(timer)
  },[])
  return (
    
    <ThemeProvider>
    <div className="min-h-screen bg-white dark:bg-gray-900 text-red-500 dark:text-yellow-500 transition-colors duration-500">
      <Loader isLoading={isLoading} />
      {!isLoading && ( <>
      <Hero />
      <Services />
      <ProjectShowcase />
      <Contact />
      </>)}
     
    </div>
    </ThemeProvider>
  
  )
}

export default App