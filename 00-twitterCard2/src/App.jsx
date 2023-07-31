import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
   
return (
    <section className="App">

      <TwitterFollowCard     
        userName= "ferronmol" >    
         JF Desing
      </TwitterFollowCard>
      <TwitterFollowCard  
        isFollowing   
        userName= "midudev" >    
         Miguel Angel Duran
      </TwitterFollowCard>
        

    </section>
  )
}