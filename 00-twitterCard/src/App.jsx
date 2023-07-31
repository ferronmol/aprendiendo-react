import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
   const format = (userName) => `@${userName}`
   const [name, setName] = useState('ferronmol')

return (
    <section className="App">
      <TwitterFollowCard 
        formatUserName={format}
        
        userName= {name} 
        initialIsFollowing= {true}> 
         JF Desing
      </TwitterFollowCard>
        
      <TwitterFollowCard 
        formatUserName={format} 
        
        userName= 'midudev' >
          Miguel Angel Duran
      </TwitterFollowCard>

      <TwitterFollowCard 
       formatUserName={format}
       
       userName= "mouredev" >
         Brais Moure
      </TwitterFollowCard>

      <button onClick={() => setName('mouredev')}>Cambio Nombre</button>
      
    </section>
  )
}