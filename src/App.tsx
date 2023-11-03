/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NavComp from './components/NavComp';
import WelcomeBanner from './components/WelcomeBanner';
import ServiceBox from './components/ServiceBox';
import OurWork from './components/OurWork';
import ContactUs from './components/ContactUs';
import Socials from './components/Socials';

// TODO component up the cards and other elements.

// HOME

// welcome banner with emergency contact.
// socials.
// services
// our work
// contact us
// google maps
// Footer

// SERVICES

// Service title                       //sidebar
// Service picture
// Service description
// Book button//price range
// Expand info
// Pop up plumbing

function App() {
  return (
    <div className="App">
      <Router>
        <NavComp />
        <WelcomeBanner />
        <Socials />
        <ServiceBox />
        <OurWork />
        <ContactUs />
      </Router>
    </div>
  );
}

export default App;
