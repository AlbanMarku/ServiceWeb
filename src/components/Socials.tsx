/* eslint-disable import/no-extraneous-dependencies */

import { FaWhatsapp, FaInstagram, FaTiktok } from 'react-icons/fa6';
import React, { useState, useEffect } from 'react';
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
    <div className="Socials">
      <div className="Icons">
        <a href="https://wa.me/1234567890?text=Hello%20there!">
          <FaWhatsapp size={iconSize} className="Icon" />
        </a>
        <FaInstagram size={iconSize} className="Icon" />
        <FaTiktok size={iconSize} className="Icon" />
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
