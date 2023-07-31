
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
  

   const users = [
    {
      userName: 'ferronmol',
      name: 'Juan Ferron',
      isFollowing: true
    },
    {
      userName: 'midudev',
      name: 'Miguel Angel Duran',
      isFollowing: false
    },
    {
      userName: 'mouredev',
      name: 'Brais Moure',
      isFollowing: true
    }

   ]

return (
    <section className="App">
      {  
        users.map(({userName, name, isFollowing }) => (  
            <TwitterFollowCard key={userName}
              userName = {userName}
              initialIsFollowing = {isFollowing}>
              {name}
            </TwitterFollowCard>
      ))
    }
    </section>
  )
}