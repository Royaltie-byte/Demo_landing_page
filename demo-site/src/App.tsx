import "./App.css";
import Header from './components/header';
import Hero from './components/hero';
import Services from './components/Services';
import WhyChooseUs from "./components/whyUs";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact/contact";
import Footer from "./components/Footer";

function App (){
  return (
    <>
      <Header/>
      <Hero/>
      <Services/>
      <WhyChooseUs/>
      <Testimonials/>
      <Contact/>
      <Footer/>
      
    </>
  );

}


export default App;