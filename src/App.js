
import './App.css';
import HeroSection from './components/heroSection';
import Navbar from './components/navbar';
import ProjectSection from './components/projectSection';
import SkillSection from './components/skillSection';
import ContactForm from './components/contactForm';
import Footer from './components/footer';

function App() {
  return (
    <div className='flex flex-col max-w-full max-h-full '>

      <Navbar />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
      <ContactForm />
      <Footer />
      

    </div>
  );
}

export default App;
