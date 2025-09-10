import React from 'react';
import SocialIcon from './SocialIcon';

const socialLinks = [
  { href: 'https://github.com/suzuy1', iconClass: 'fab fa-github', ariaLabel: 'Kunjungi GitHub saya' },
  { href: 'https://www.tiktok.com/@suzuya_juuzodess?_t=ZS-8zbKWCyZIyO&_r=1', iconClass: 'fab fa-tiktok', ariaLabel: 'Kunjungi TikTok saya' },
  { href: 'https://wa.me/qr/UGC47PAZJ5PAD1', iconClass: 'fab fa-whatsapp', ariaLabel: 'Hubungi saya di WhatsApp' },
    { href: 'https://www.instagram.com/meza0_00?igsh=MXdnZW12cjE0azd0OQ==', iconClass: 'fab fa-instagram', ariaLabel: 'Kunjungi Instagram saya' },
];

const Footer: React.FC = () => {
  return (
    <footer id="kontak-saya" className="bg-[#0e0e47] text-white py-12 px-6">
      <div className="container mx-auto text-center">
        <div className="flex justify-center gap-6 mb-8">
          {socialLinks.map((social, index) => (
            <SocialIcon key={index} href={social.href} iconClass={social.iconClass} ariaLabel={social.ariaLabel} />
          ))}
        </div>
        <div className="border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} by Wily Filosa Alviano Silaen. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
