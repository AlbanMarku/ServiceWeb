/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import '../styles/contactUs.css';
import { FaPhone, FaRegEnvelope, FaLocationDot } from 'react-icons/fa6';
import Stack from 'react-bootstrap/Stack';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import timeImg from '../assets/times.jpg';

export default function ContactUs() {
  const [iconSize, setIconSize] = useState({});

  useEffect(() => {
    function updateIconSize() {
      const screenWidth = window.innerWidth;

      if (screenWidth >= 768) {
        setIconSize({ width: '760px', height: '400px' });
      } else {
        setIconSize({ width: '100%', height: '400px' });
      }
    }

    updateIconSize();

    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []);

  const center = {
    lat: 51.41929741737679,
    lng: -0.15565799999999996,
  };

  return (
    <div id="ContactUs" className="ContactUs">
      <h1>CONTACT US</h1>
      <div className="ContactArea">
        <Stack gap={3}>
          <div className="ContactItem">
            <FaPhone />
            <a href="tel:07400589645">07400589645</a>
          </div>
          <div className="ContactItem">
            <FaRegEnvelope />
            <a href="mailto:Info@alwaysonelectrician.co.uk?subject=General Contact&body=I have a general question...">
              Info@alwaysonelectrician.co.uk
            </a>
          </div>
          <div className="ContactItem" style={{ paddingBottom: 20 }}>
            <FaLocationDot />
            <a href="https://www.google.co.uk/maps/place/140+Links+Rd,+London+SW17+9EJ/@51.4192773,-0.1582329,17z/data=!3m1!4b1!4m5!3m4!1s0x4876066e36933d1b:0x4cf45da5bf1270d9!8m2!3d51.419274!4d-0.155658?entry=ttu">
              140 Links Road Tooting London <br /> SW17 9ES
            </a>
          </div>
        </Stack>
      </div>
      <div className="MapArea">
        <LoadScript googleMapsApiKey="AIzaSyAygloPwikyFUCSEQr3MBCasYMiOYzLr54">
          <GoogleMap mapContainerStyle={iconSize} center={center} zoom={12}>
            <MarkerF position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
      <div className="TimesArea">
        <img id="timeImg" src={timeImg} alt="times" />
      </div>
    </div>
  );
}
