import React from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download, ArrowRight, Instagram } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%), url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-300 rounded-full animate-pulse opacity-30 animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse opacity-40 animation-delay-2000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Profile Image with enhanced styling */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full blur-xl opacity-20 animate-pulse"></div>
            <img 
              src="/img/foto.png"
              alt="Abdel Sealiti"
              className="relative w-48 h-48 rounded-full mx-auto border-4 border-white/20 shadow-2xl hover:scale-105 transition-all duration-500 backdrop-blur-sm object-cover"
            />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-green-400 rounded-full border-4 border-white shadow-lg animate-bounce">
              <div className="w-full h-full rounded-full bg-green-400 animate-ping"></div>
            </div>
          </div>
          
          {/* Enhanced Typography */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-white mb-6 tracking-tight leading-none">
              Abdel Sealiti
            </h1>
            
            <div className="relative">
              <p className="text-2xl md:text-3xl font-light text-blue-100 mb-4 relative">
                <span className="relative z-10">Software Developer & IT-medewerker</span>
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></span>
              </p>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              Van storing tot oplossing. Van idee tot code
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 mt-16">
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative flex items-center gap-2">
                Bekijk Projecten
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="group relative border-2 border-white/30 text-white bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-orange-600 hover:to-yellow-500 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              <span className="flex items-center gap-2">
                Neem Contact Op
                <Mail className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </Button>
            
            <Button 
              variant="ghost"
              size="lg"
              className="group relative text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Download className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" />
                Download CV
              </span>
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://github.com/A-Sealiti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Github size={24} />
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                GitHub
              </span>
            </a>
            <a 
              href="https://linkedin.com/in/abdel-sealiti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Linkedin size={24} />
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                LinkedIn
              </span>
            </a>
            <a 
              href="https://instagram.com/abdel.sealiti" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Instagram size={24} />
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Instagram
              </span>
            </a>
            <a 
              href="mailto:abdel.sealiti@outlook.be"
              className="group relative p-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
            >
              <Mail size={24} />
              <span className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Email
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2">
        <span className="text-white/60 text-sm font-medium">Scroll omlaag</span>
        <div className="animate-bounce">
          <ChevronDown className="text-white w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;