/* eslint-disable import/no-extraneous-dependencies */
import '../styles/contactUs.css';
import { FaPhone, FaRegEnvelope, FaLocationDot } from 'react-icons/fa6';
import Stack from 'react-bootstrap/Stack';
import { GoogleMap, LoadScript, MarkerF } from '@react-google-maps/api';

export default function ContactUs() {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

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
            <p>07306066306</p>
          </div>
          <div className="ContactItem">
            <FaRegEnvelope />
            <p>albanmarku@duck.com</p>
          </div>
          <div className="ContactItem">
            <FaLocationDot />
            <p>56 Essex Court Station Road</p>
          </div>
        </Stack>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyAygloPwikyFUCSEQr3MBCasYMiOYzLr54">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
          <MarkerF position={center} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
