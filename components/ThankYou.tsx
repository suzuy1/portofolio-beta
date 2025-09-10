import React from 'react';
import AnimatedOnScroll from './AnimatedOnScroll';

const ThankYou: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <div className="container mx-auto text-center">
        <AnimatedOnScroll>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300">
                Terima kasih telah berkunjung puhh
                Berharap bisa berteman dengan diri saya yang menghina dan pemula ini
            </h2>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default ThankYou;
