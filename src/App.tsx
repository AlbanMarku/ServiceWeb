/* eslint-disable import/no-extraneous-dependencies */
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavComp from './components/NavComp';
import WelcomeBanner from './components/WelcomeBanner';
import ServiceBox from './components/ServiceBox';
import OurWork from './components/OurWork';
import ContactUs from './components/ContactUs';
import Socials from './components/Socials';

// TODO component up the cards

function App() {
  return (
    <div className="App">
      <NavComp />
      <WelcomeBanner />
      <Socials />
      <ServiceBox />
      <OurWork />
      <ContactUs />
    </div>
  );
}

export default App;
