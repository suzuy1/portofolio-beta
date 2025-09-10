import React from 'react';
import { skills } from '../data/skills';
import AnimatedOnScroll from './AnimatedOnScroll';

const Skills: React.FC = () => {
  return (
    <section id="keterampilan" className="py-20 px-6 md:px-20 bg-[#060648]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Keterampilan{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[size:200%_auto]">
            Saya
          </span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <AnimatedOnScroll key={index} delay={index * 50}>
              <div
                className="group bg-[#0e0e47] p-8 rounded-lg flex flex-col items-center justify-center gap-4 shadow-lg h-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/20"
                aria-label={skill.name}
              >
                <i
                  className={`${skill.iconClass} text-6xl transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110`}
                  aria-hidden="true"
                ></i>
                <p className="text-lg font-semibold mt-2">{skill.name}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;