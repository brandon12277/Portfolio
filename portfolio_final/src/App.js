
import './App.css';
import About from './components/about';
import Contact from './components/contact';
import LandingPage from './components/home_page';
import Navbar from './components/navbar';
import Projects from './components/projects';
import Skill from './components/skill';




function App() {
  return (
    <div className="overflow-x-hidden w-screen">
      
      <Navbar/>
      <LandingPage/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
