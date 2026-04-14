import './App.css'
import NavBar from './component/NavBar'
import AddFriend from './component/AddFriend'
import Friends from './component/Friends'
import StatsBoard from './component/StatsBoard'



function App() {
  
  return (
    <>
      <NavBar />
      <AddFriend />
      <StatsBoard />
      <Friends />

    <h2 className='text-3xl font-bold text-center mt-5'>Welcome to React with Tailwind CSS</h2>
    </>
  )
}

export default App
