/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
import '../styles/contactUs.css';
import { FaPhone, FaRegEnvelope, FaLocationDot } from 'react-icons/fa6';
import Stack from 'react-bootstrap/Stack';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';

export default function ContactUs() {
  const [iconSize, setIconSize] = useState({});

  useEffect(() => {
    function updateIconSize() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 768) {
        setIconSize({ width: '1000px', height: '400px' });
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
    lat: 51.499855666297876,
    lng: -0.22421449956167322,
  };

  return (
    <div className="ContactUs">
      <h1>CONTACT US</h1>
      <div className="ContactArea">
        <Stack gap={3}>
          <div className="ContactItem">
            <FaPhone />
            <a href="tel:07306066306">07306066306</a>
          </div>
          <div className="ContactItem">
            <FaRegEnvelope />
            <a href="mailto:albanmarku@outlook.com?subject=General Contact&body=I have a general question...">
              albanmarku@outlook.com
            </a>
          </div>
          <div className="ContactItem" style={{ paddingBottom: 20 }}>
            <FaLocationDot />
            <a href="https://www.google.co.uk/maps/place/121+Mortlake+High+St,+London+SW14+8SN/@51.4691005,-0.2560081,17z/data=!4m6!3m5!1s0x48760ef52affb837:0xce97483083dc400d!8m2!3d51.4702032!4d-0.258179!16s%2Fg%2F11bw3h1fgk?entry=ttu">
              56 essex court station road
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
    </div>
  );
}
