/* eslint-disable import/no-extraneous-dependencies */

import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';
import '../styles/socials.css';

export default function Socials() {
  return (
    <div className="Socials">
      <div className="Icons">
        <a href="https://wa.me/1234567890?text=Hello%20there!">
          <FaWhatsapp size={37} className="Icon" />
        </a>
        <FaInstagram size={37} className="Icon" />
        <FaTiktok size={37} className="Icon" />
      </div>
      <div className="Whatsapp">
        <a className="WhatsappContainer" href="https://wa.me/1234567890?text=Hello%20there!">
          <FaWhatsapp color="white" size={25} />
          <p>Text 07306066306</p>
        </a>
      </div>
    </div>
  );
}
