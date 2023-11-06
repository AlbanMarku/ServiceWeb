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
import Form from './views/Form';
import CanvasComp from './components/CanvasComp';

// TODO component up the cards and other elements.

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#06112f' }}>
      <Router>
        <ScrollToTop />
        <CanvasComp />
        <NavComp />
        <div style={{ maxWidth: '1700px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/form/:service" element={<Form />} />
          </Routes>
          <ContactUs />
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
