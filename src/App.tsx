/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavComp from './components/NavComp';
import Home from './views/Home';
import Services from './views/Services';
import ContactUs from './components/ContactUs';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <ContactUs />
      </Router>
    </div>
  );
}

export default App;
