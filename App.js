import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Mywork from './Mywork'
import Skill from './Skill'
import Resume from './Resume';
import ContactForm from './Contact';
import Footer from './Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Mywork/>
   <Skill/>
   <Resume/>
   <ContactForm/>
   <Footer/>
    </>
  );
}

export default App;
