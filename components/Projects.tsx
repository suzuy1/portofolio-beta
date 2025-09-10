import React from 'react';
import { projects } from '../data/projects';
import AnimatedOnScroll from './AnimatedOnScroll';

const Projects: React.FC = () => {
  return (
    <section id="projek-saya" className="py-20 px-6 md:px-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Projek{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-400 bg-clip-text text-transparent animate-gradient-x bg-[size:200%_auto]">
            Saya
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedOnScroll key={index} delay={index * 100}>
              <div
                className="group bg-[#0e0e47] rounded-lg flex flex-col shadow-lg h-full transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-purple-500/20 overflow-hidden"
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={`Gambar Proyek ${project.title}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col items-start text-left gap-4 flex-grow">
                  <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-gray-300 flex-grow">{project.description}</p>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Lihat Projek <i className="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
