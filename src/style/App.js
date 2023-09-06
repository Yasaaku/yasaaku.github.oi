import './App.css';
import NavigationBar from './Components/NavigationBar';
import Intro from './Components/Intro';
import "./style/landingPage.css"
import Trending from './Components/Trending';
import Superhero from './Components/Superhero';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGfctggVF9ty6AUVP3AMq-gt-meN4zXBc",
  authDomain: "nontonyuk-5bd6c.firebaseapp.com",
  projectId: "nontonyuk-5bd6c",
  storageBucket: "nontonyuk-5bd6c.appspot.com",
  messagingSenderId: "540457450684",
  appId: "1:540457450684:web:cfb8c56f614738853a64b9",
  measurementId: "G-DPR3XWJ5XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
