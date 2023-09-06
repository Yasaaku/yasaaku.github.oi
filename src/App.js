import './App.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import "./style/landingPage.css"
import Trending from './Components/Trending';
import Superhero from './Components/Superhero';

function App() {
  return (
  <div>
    <div className='myBG'>
      <NavigationBar />
      <Intro />
    </div>
    <div className='trending'>
    <Trending />
  </div>
      <div className='Superhero'>
        <Superhero />
      </div>
  </div>
  
  )
}

export default App;
