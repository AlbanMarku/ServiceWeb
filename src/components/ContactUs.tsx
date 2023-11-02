/* eslint-disable import/no-extraneous-dependencies */
import '../styles/contactUs.css';
import { FaPhone, FaRegEnvelope, FaLocationDot } from 'react-icons/fa6';
import Stack from 'react-bootstrap/Stack';

export default function ContactUs() {
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
    </div>
  );
}
