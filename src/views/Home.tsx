/* eslint-disable import/no-extraneous-dependencies */
import { Fab } from '@mui/material';
import { FaWhatsapp } from 'react-icons/fa6';
import WelcomeBanner from '../components/WelcomeBanner';
import ServiceBox from '../components/ServiceBox';
import OurWork from '../components/OurWork';
import Socials from '../components/Socials';
import AboutUs from '../components/AboutUs';
import CanvasComp from '../components/CanvasComp';

import '../styles/home.css';

export default function Home() {
  return (
    <div className="Home" style={{ position: 'relative' }}>
      <CanvasComp />
      <WelcomeBanner />
      <Socials />
      <AboutUs />
      <ServiceBox />
      <OurWork />

      <Fab className="chat-icon" color="primary" aria-label="add">
        <a className="chat-inner" href="https://wa.me/message/JVQ7EOQN4QRQH1" target="_blank" rel="noreferrer">
          <FaWhatsapp color="white" size={25} />
        </a>
      </Fab>
    </div>
  );
}
