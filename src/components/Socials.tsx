/* eslint-disable import/no-extraneous-dependencies */

import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';
import { useState, useEffect } from 'react';
import '../styles/socials.css';

export default function Socials() {
  const [iconSize, setIconSize] = useState(37);

  useEffect(() => {
    function updateIconSize() {
      const screenWidth = window.innerWidth;

      if (screenWidth < 768) {
        setIconSize(37);
      } else {
        setIconSize(50);
      }
    }

    updateIconSize();

    window.addEventListener('resize', updateIconSize);

    return () => {
      window.removeEventListener('resize', updateIconSize);
    };
  }, []);

  return (
    <div className="Socials" id="Socials">
      <div className="Icons">
        <a href="https://wa.me/message/JVQ7EOQN4QRQH1" target="_blank" rel="noreferrer">
          <FaWhatsapp size={iconSize} className="Icon" />
        </a>
        <a
          href="https://instagram.com/alwaysonelectrician?igshid=MWx1dDNleHk5Znhk&utm_source=qr"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={iconSize} className="Icon" />
        </a>
        <a href="https://www.tiktok.com/@alwaysonelectrician?_t=8h7P4pRcTT7&_r=1" target="_blank" rel="noreferrer">
          <FaTiktok size={iconSize} className="Icon" />
        </a>
      </div>
      <div className="Whatsapp">
        <a className="WhatsappContainer" href="https://wa.me/message/JVQ7EOQN4QRQH1" target="_blank" rel="noreferrer">
          <FaWhatsapp color="white" size={25} />
          <p>Text 07400589645</p>
        </a>
      </div>
    </div>
  );
}
