
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import ProjectModal from './components/ProjectModal';
import { Project } from './types';
import { PROJECTS, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('Hepsi');
  
  const categories = ['Hepsi', ...Array.from(new Set(PROJECTS.map(p => p.category)))];
  const filteredProjects = activeCategory === 'Hepsi' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen overflow-x-hidden selection:bg-white selection:text-black">
      <Navigation />

      {/* Hero Section */}
      <header className="pt-32 md:pt-48 pb-10 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="md:flex items-end justify-between mb-8 md:mb-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-serif leading-[1.1] md:leading-[0.9] tracking-tighter mb-6 md:mb-8">
              Görsel Kimlik Sanatında <span className="italic text-neutral-500">Ustalık</span>.
            </h1>
            <p className="text-sm md:text-xl text-neutral-400 font-light max-w-lg leading-relaxed">
              İstanbul merkezli. Minimalist markalama, editoryal tasarım ve modern dijital deneyimler üzerine uzmanlaşmış tasarımcı.
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="w-40 h-40 glass rounded-full flex items-center justify-center animate-spin-slow">
              <svg className="w-24 h-24 text-neutral-600" viewBox="0 0 100 100">
                <path id="circlePath" fill="none" d="M 10, 50 a 40,40 0 1,1 80,0 40,40 0 1,1 -80,0" />
                <text className="text-[12px] uppercase tracking-[0.2em] font-bold fill-current">
                  <textPath href="#circlePath">
                     Markada - Mükemmeliyet -  
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>

        {/* Sticky Filter Bar - Hidden on mobile, shown on desktop */}
        <div className="hidden md:block sticky top-[88px] z-30 bg-[#0a0a0a]/90 backdrop-blur-md py-6 border-t border-white/10 mt-10">
          <div className="flex flex-wrap gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`whitespace-nowrap text-[10px] font-bold uppercase tracking-widest px-6 py-2 rounded-full transition-all border ${
                  activeCategory === cat 
                    ? 'bg-white text-black border-white' 
                    : 'text-neutral-500 border-white/10 hover:border-white/30 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Project Grid */}
      <main id="work" className="px-6 md:px-12 max-w-7xl mx-auto pb-20 md:pb-40">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="project-card relative group cursor-pointer overflow-hidden rounded-2xl break-inside-avoid transition-transform duration-500 hover:scale-[1.01]"
            >
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="project-overlay absolute inset-0 bg-black/60 flex flex-col justify-end p-6 md:p-8 opacity-0 md:opacity-0 transition-opacity duration-300 backdrop-blur-[2px] group-hover:opacity-100">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-neutral-400 mb-2">{project.category}</span>
                <h3 className="text-xl md:text-2xl font-serif text-white">{project.title}</h3>
                <div className="mt-4 w-12 h-[1px] bg-white transform origin-left transition-transform duration-500 scale-x-0 group-hover:scale-x-100"></div>
              </div>
              <div className="md:hidden absolute top-4 right-4 px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-[8px] uppercase tracking-widest font-bold text-white/70">
                Görüntüle
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="bg-neutral-900/50 py-20 md:py-40 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-start">
          <div className="md:col-span-5">
            <div className="md:sticky md:top-40">
                <span className="text-[10px] font-bold tracking-[0.5em] text-neutral-500 uppercase block mb-6 md:mb-8">Profil</span>
                <h2 className="text-4xl md:text-7xl font-serif mb-8 md:mb-12 tracking-tighter leading-tight">{PERSONAL_INFO.name}</h2>
                <div className="space-y-8">
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Eğitim</h4>
                        <p className="text-base md:text-lg font-medium">{PERSONAL_INFO.university}</p>
                        <p className="text-neutral-400 text-sm font-light">{PERSONAL_INFO.degree}</p>
                    </div>
                    <div>
                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 mb-2">Felsefe</h4>
                        <p className="text-neutral-300 text-sm md:text-base font-light leading-relaxed">
                            {PERSONAL_INFO.bio}
                        </p>
                    </div>
                </div>
            </div>
          </div>
          <div className="md:col-span-7 space-y-10 md:space-y-12">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
                <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl">
                    <h3 className="text-2xl md:text-4xl font-serif mb-2 md:mb-4">3+</h3>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500">Yıllık Deneyim</p>
                </div>
                <div className="glass p-6 md:p-10 rounded-2xl md:rounded-3xl">
                    <h3 className="text-2xl md:text-4xl font-serif mb-2 md:mb-4">7+</h3>
                    <p className="text-[9px] md:text-[10px] uppercase tracking-widest text-neutral-500">Tamamlanan Marka</p>
                </div>
            </div>
            <div className="space-y-4">
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-500">Yetenekler & Uzmanlık</h4>
                <div className="flex flex-wrap gap-2">
                    {['Logo Tasarımı', 'Tipografi', 'İllüstrasyon', 'Hareketli Grafikler', 'UI/UX', 'Ambalaj'].map(skill => (
                        <span key={skill} className="px-4 py-2 border border-white/5 rounded-full text-[9px] md:text-xs font-medium text-neutral-400">{skill}</span>
                    ))}
                </div>
            </div>
            <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop" alt="Stüdyo" className="w-full rounded-2xl md:rounded-3xl grayscale" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 md:py-40 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <span className="text-[10px] font-bold tracking-[0.5em] text-neutral-500 uppercase block mb-8">Konuşalım</span>
        <h2 className="text-3xl md:text-7xl font-serif mb-10 md:mb-12 tracking-tighter leading-tight">Bir vizyonunuz mu var? Hayata geçirelim.</h2>
        
        <div className="group relative inline-block">
            <a 
                href={`mailto:${PERSONAL_INFO.email}`} 
                className="inline-flex items-center gap-4 bg-white text-black px-8 md:px-12 py-4 md:py-6 rounded-full text-sm md:text-xl font-bold tracking-tight hover:bg-neutral-200 transition-all active:scale-95"
            >
                <span>E-posta Gönder</span>
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
            </a>
        </div>
        
        <div className="mt-16 md:mt-32 flex flex-wrap justify-center gap-6 md:gap-10">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">LinkedIn</a>
            <a href={`https://instagram.com/${PERSONAL_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Instagram</a>
        </div>
        
        <p className="mt-16 md:mt-32 text-neutral-700 text-[8px] md:text-[10px] uppercase tracking-widest">
            © {new Date().getFullYear()} Harun Grafik. Mükemmeliyet için tasarlandı.
        </p>
      </footer>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => {
            setSelectedProject(null);
            document.body.style.overflow = 'auto';
        }} 
      />

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default App;
