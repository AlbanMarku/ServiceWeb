/* eslint-disable import/no-extraneous-dependencies */

import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';
import '../styles/socials.css';

export default function Socials() {
  return (
    <div className="Socials">
      <div className="Icons">
        <FaWhatsapp size={37} className="Icon" />
        <FaInstagram size={37} className="Icon" />
        <FaTiktok size={37} className="Icon" />
      </div>
      <div className="Whatsapp">
        <div className="WhatsappContainer">
          <FaWhatsapp size={25} />
          <p>Text 07306066306</p>
        </div>
      </div>
    </div>
  );
}
