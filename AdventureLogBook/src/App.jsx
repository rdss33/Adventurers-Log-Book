
import './App.css'
import CreatureCard from './assets/Components/Card/CreatureCard'
import {Cyclop} from './assets/Components/monsters'

function App() {
  return (
      <CreatureCard 
        monsterObj = {Cyclop}
      />
  )
}

export default App
