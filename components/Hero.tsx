import React from 'react';
import SocialIcon from './SocialIcon';
import AnimatedOnScroll from './AnimatedOnScroll';

const socialLinks = [
  { href: 'https://github.com/suzuy1', iconClass: 'fab fa-github', ariaLabel: 'Kunjungi GitHub saya' },
  { href: 'https://www.tiktok.com/@suzuya_juuzodess?_t=ZS-8zbKWCyZIyO&_r=1', iconClass: 'fab fa-tiktok', ariaLabel: 'Kunjungi Tiktok saya' },
  { href: 'https://www.instagram.com/meza0_00?igsh=MXdnZW12cjE0azd0OQ==', iconClass: 'fab fa-instagram', ariaLabel: 'Kunjungi Instagram saya' },
  { href: 'https://wa.me/qr/UGC47PAZJ5PAD1', iconClass: 'fab fa-whatsapp', ariaLabel: 'Kunjungi WA saya' },
];

const Hero: React.FC = () => {
  return (
    <section id="tentang-saya" className="min-h-screen flex items-center justify-center py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#030341] to-[#0e0e47] opacity-50 z-0"></div>
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Side: Text Content */}
        <AnimatedOnScroll className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Halo, saya <br/>
            <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[size:200%_auto]">
              M. Oriza Saltifa
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mt-4 mb-6">
            Computer Scientist/Blockchain Researcher
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
           Halo! Saya seorang mahasiswa jurusan Ilmu Komputer yang sedang mengejar ilmu dan passion di dunia teknologi. Saya memang masih pemula, tapi justru itu yang membuat saya semakin bersemangat untuk terus belajar dan berkembang.

Saya memiliki ketertarikan besar di bidang programming dan teknologi, terutama dalam mengeksplorasi berbagai hal baru yang berkaitan dengan dunia sains dan teknologi. Meski skill yang saya miliki masih terbatas, saya selalu berusaha untuk terus mengasah kemampuan dan menambah pengetahuan setiap harinya.

Saya sangat terbuka untuk berkenalan dan bertukar ilmu dengan siapa saja, terutama dengan para developer atau teman-teman yang sudah lebih berpengalaman. Mari belajar dan berkembang bersama! 🚀
          </p>
          <div className="flex justify-center md:justify-start gap-5 mb-8">
            {socialLinks.map((social, index) => (
              <SocialIcon key={index} href={social.href} iconClass={social.iconClass} ariaLabel={social.ariaLabel} />
            ))}
          </div>
          <a
            href="#projek-saya"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
          >
            Lihat Portofolio Saya
          </a>
        </AnimatedOnScroll>

        {/* Right Side: Image */}
        <AnimatedOnScroll className="flex justify-center md:justify-center items-center mt-10 md:mt-0" delay={200}>
          <div className="relative w-[320px] h-[420px] lg:w-[400px] lg:h-[500px]">
             <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur-xl opacity-25"></div>
             <img
              src="/images/pp.png"
              alt="Foto Profil Wily Filosa Alviano Silaen"
              className="relative w-full h-full object-cover rounded-lg shadow-[0px_54px_55px_rgba(0,0,0,0.7),_0px_-12px_30px_rgba(0,0,0,0.12),_0px_4px_6px_rgba(0,0,0,0.8),_0px_12px_13px_rgba(0,0,0,0.8),_0px_-3px_5px_rgba(0,0,0,0.9)]"
            />
          </div>
        </AnimatedOnScroll>
        
      </div>
    </section>
  );
};

export default Hero;