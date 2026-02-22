import './App.css';
// import Album from './Components/Albums/Album';
import Hero from './Components/HeroSection/Hero';
import Navbar from './Components/Navbar/Navbar';
import Section from './Components/Section/Section';

function App() {
  return(
    <>
    <Navbar/>
    <Hero/>
   
    <Section
  title="Top Albums"
  endpoint="https://qtify-backend.labs.crio.do/albums/top"
/>

<Section
  title="New Albums"
  endpoint="https://qtify-backend.labs.crio.do/albums/new"
/>

<Section
  title="Songs"
  endpoint="https://qtify-backend.labs.crio.do/songs"
  showToggle={false}
  showTabs={true}
  isSongs={true}
/>
    </>
  );

}

export default App;
