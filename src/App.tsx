/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavComp from './components/NavComp';
import Home from './views/Home';
import Services from './views/Services';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BookForm from './components/BookForm';

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
        {/* <BookForm /> */}
        <ScrollToTop />
        <NavComp />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <ContactUs />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
