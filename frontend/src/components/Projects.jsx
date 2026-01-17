import React, { useState } from 'react';
import { ExternalLink, Github, Filter, Eye, Code, Zap, Star } from 'lucide-react';
import { Button } from './ui/button';

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Dashboard",
      description: "Een dashboard ontwikkeld samen met klasgenoten waarbij nieuwe vaardigheden zijn toegepast, waaronder MongoDB, JWT, Scrypt en Chart.js voor data visualisatie.",
      image: "/img/dashboard.png",
      technologies: ["MongoDB", "JWT", "Scrypt", "Chart.js", "Node.js"],
      category: "fullstack",
      liveUrl: "https://github.com/ROCMondriaanTIN/sd23-p04-project-dashboard-boom",
      githubUrl: "https://github.com/ROCMondriaanTIN/sd23-p04-project-dashboard-boom",
      featured: true,
      stats: { views: "1.2K", stars: "15", forks: "3" },
      requiresSetup: true,
      setupInstructions: "Node.js + MongoDB vereist"
    },
    {
      id: 2,
      title: "Sonic the Hedgehog",
      description: "Een Sonic-game ontwikkeld binnen 8 weken met JavaScript en Phaser. Verschillende game development vaardigheden zijn toegepast in dit project.",
      image: "/img/sonic.png",
      technologies: ["JavaScript", "Phaser", "HTML5", "CSS", "Game Development"],
      category: "frontend",
      liveUrl: "https://github.com/ROCMondriaanTIN/sd23-p03-kdl-gp-prototype-A-Sealiti",
      githubUrl: "https://github.com/ROCMondriaanTIN/sd23-p03-kdl-gp-prototype-A-Sealiti",
      featured: true,
      stats: { views: "800", stars: "12", forks: "4" },
      requiresSetup: true,
      setupInstructions: "Setup vereist"
    },
    {
      id: 3,
      title: "Webcatalogus",
      description: "Samen met twee andere klasgenoten een website opgebouwd met een Node.js-server. Productgegevens zijn als JSON-document gemaakt en worden gefetcht en op de webpagina getoond.",
      image: "/img/web.png",
      technologies: ["Node.js", "JSON", "HTML", "CSS", "JavaScript"],
      category: "fullstack",
      liveUrl: "https://github.com/ROCMondriaanTIN/sd23-p03-project-webcatalogus-fkn-rijke-goons",
      githubUrl: "https://github.com/ROCMondriaanTIN/sd23-p03-project-webcatalogus-fkn-rijke-goons",
      featured: false,
      stats: { views: "600", stars: "8", forks: "2" },
      requiresSetup: true,
      setupInstructions: "Node.js + JSON installatie vereist"
    },
    {
      id: 4,
      title: "Mini ChatGPT",
      description: "Een chatbot die weer- en nieuwsberichten genereert met behulp van een API. Dit project is binnen één week ontwikkeld met HTML, CSS en JavaScript.",
      image: "/img/chatgpt.png",
      technologies: ["JavaScript", "API", "HTML", "CSS", "Chatbot"],
      category: "frontend",
      liveUrl: "https://a-sealiti.github.io/Mini-ChatGPT/",
      githubUrl: "https://github.com/A-Sealiti/Mini-ChatGPT",
      featured: false,
      stats: { views: "500", stars: "6", forks: "1" },
      requiresSetup: false
    },
    {
      id: 5,
      title: "Hoger Lager",
      description: "Een simpel hoger-lager spel gemaakt met HTML, CSS en JavaScript. Twee spelers met 5 credits moeten raden of de volgende kaart hoger of lager is dan de huidige kaart.",
      image: "/img/dice.png",
      technologies: ["HTML", "CSS", "JavaScript", "Game Logic"],
      category: "frontend",
      liveUrl: "https://a-sealiti.github.io/Hoger_Lager/",
      githubUrl: "https://github.com/ROCMondriaanTIN/sd23-p01-project-hoger-lager-A-Sealiti",
      featured: false,
      stats: { views: "400", stars: "5", forks: "1" },
      requiresSetup: false
    },
    {
      id: 6,
      title: "Escaperoom",
      description: "Samen met twee anderen binnen een week een escaperoom ontwikkeld met meerdere puzzels en raadsels. Dit project integreerde HTML, CSS en JavaScript.",
      image: "/img/escaperoom.png",
      technologies: ["HTML", "CSS", "JavaScript", "Puzzle Logic"],
      category: "frontend",
      liveUrl: "https://a-sealiti.github.io/EscapeRoom/",
      githubUrl: "https://github.com/A-Sealiti/EscapeRoom",
      featured: false,
      stats: { views: "350", stars: "4", forks: "1" },
      requiresSetup: false
    },
    {
      id: 7,
      title: "Build-a-Game (Mini Games)",
      description: "Een collectie van drie spellen: Boter Kaas Eieren, Zeeslag en Whack a Mole. Alle spellen zijn gemaakt met HTML, CSS en JavaScript.",
      image: "/img/zeeslag.png",
      technologies: ["HTML", "CSS", "JavaScript", "Game Development"],
      category: "frontend",
      liveUrl: "https://a-sealiti.github.io/Build-a-Game-/",
      githubUrl: "https://github.com/ROCMondriaanTIN/sd23-p02-project-build-a-game-adib",
      featured: false,
      stats: { views: "300", stars: "3", forks: "1" },
      requiresSetup: false
    },
    {
      id: 8,
      title: "Fireburst",
      description: "Een project met verschillende mini-games en interactieve elementen, ontwikkeld met moderne web technologieën.",
      image: "/img/Fireburst.png",
      technologies: ["JavaScript", "HTML", "CSS", "Interactive Design"],
      category: "frontend",
      liveUrl: "https://github.com/A-Sealiti/Fireburst",
      githubUrl: "https://github.com/A-Sealiti/Fireburst",
      featured: false,
      stats: { views: "250", stars: "2", forks: "1" },
      requiresSetup: true,
      setupInstructions: "Setup vereist"
    },
    {
      id: 9,
      title: "Template Webshop – Fullstack Webapplicatie (MCSA Market)",
      description: `In samenwerking met drie teamleden heb ik gewerkt aan een professionele webapplicatie waarin gebruikers toegang hebben tot een ruime selectie aan website-templates, verdeeld over meerdere categorieën zoals portfolio's, webshops en bedrijfswebsites.\n\nBelangrijkste functies:\n\n🔹 Bladeren door gratis én betaalde templates\n🔹 Mogelijkheid om premium templates aan te schaffen\n🔹 Abonnementssysteem voor onbeperkte toegang tot exclusieve content\n🔹 Beheerderspaneel voor het beheren van templates, gebruikers en betalingen\n🔹 Gebruikersauthenticatie en autorisatie (klant / admin)\n\nDe frontend werd ontwikkeld met HTML, CSS en JavaScript, terwijl de backend gebouwd is met PHP (Symfony) en Twig voor templating. Data wordt beheerd via een MySQL-database. Daarnaast is het project volledig responsive en geoptimaliseerd voor desktop en mobiel gebruik.\n\nLet op: Alleen de homepagina werkt als live demo, data wordt niet geladen.`,
      image: "/img/MCSA_Markt.png",
      technologies: ["HTML", "CSS", "JavaScript", "PHP (Symfony)", "Twig", "MySQL"],
      category: "backend",
      liveUrl: "https://a-sealiti.github.io/MCSA-Markt/",
      githubUrl: "https://github.com/A-Sealiti/MCSA-Markt",
      featured: false,
      stats: { views: "0", stars: "0", forks: "0" },
      requiresSetup: false
    },
    {
      id: 10,
      title: "La Vita Pizza – Symfony Webapplicatie",
      description: "Een webapplicatie voor een pizzeria, gebouwd met Symfony, Twig, PHP, JavaScript en CSS. Bevat functionaliteiten voor het beheren van pizza's, bestellingen en gebruikers.",
      image: "/img/Lavitapizza.png",
      technologies: ["Symfony", "Twig", "PHP", "JavaScript", "CSS"],
      category: "backend",
      liveUrl: "https://github.com/A-Sealiti/La-vita-pizza",
      githubUrl: "https://github.com/A-Sealiti/La-vita-pizza",
      featured: false,
      stats: { views: "0", stars: "0", forks: "0" },
      requiresSetup: true,
      setupInstructions: "Symfony + PHP installatie vereist"
    },
    {
      id: 11,
      title: "ReviewYourExperience (revux)",
      description: "Een webapplicatie voor het delen en beoordelen van ervaringen. Gebouwd met PHP, JavaScript, CSS en Bootstrap. Bevat functionaliteiten voor het plaatsen van reviews, beoordelen en beheren van gebruikers.",
      image: "/img/revux.png",
      technologies: ["PHP", "JavaScript", "CSS", "Bootstrap"],
      category: "fullstack",
      liveUrl: "https://github.com/A-Sealiti/revux",
      githubUrl: "https://github.com/A-Sealiti/revux",
      featured: false,
      stats: { views: "0", stars: "0", forks: "0" },
      requiresSetup: true,
      setupInstructions: "PHP installatie vereist"
    },
    {
      id: 12,
      title: "AI-wrapper",
      description: "Een PHP-project waarmee je eenvoudig AI-functionaliteit kunt integreren in je eigen applicaties. Bevat een wrapper voor AI API-aanroepen en een eenvoudige webinterface.",
      image: "/img/Ai-Wrapper.png",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      category: "backend",
      liveUrl: "https://a-sealiti.github.io/AI-wrapper/",
      githubUrl: "https://github.com/A-Sealiti/AI-wrapper",
      featured: false,
      stats: { views: "0", stars: "0", forks: "0" },
      requiresSetup: true,
      setupInstructions: "PHP installatie vereist"
    },
    {
      id: 13,
      title: "Voorbereiden HBO",
      description: "Een project ter voorbereiding op HBO-opleidingen, waarin diverse relevante onderwerpen en vaardigheden worden behandeld om MBO-studenten te ondersteunen bij de overstap naar het hoger onderwijs.",
      image: "/img/Voorbereiden HBO.png",
      technologies: ["JavaScript", "PHP", "SQL", "CSS", "Bootstrap", "HTML"],
      category: "fullstack",
      liveUrl: "",
      githubUrl: "https://github.com/A-Sealiti/Voorbereiden-HBO",
      featured: false,
      stats: { views: "0", stars: "0", forks: "0" },
      requiresSetup: true,
      setupInstructions: "PHP + SQL installatie vereist. Klik op 'Setup Vereist' voor installatie instructies"
    }
  ];

  const filters = [
    { label: 'Alle', value: 'all', icon: <Zap className="w-4 h-4" /> },
    { label: 'Full-Stack', value: 'fullstack', icon: <Code className="w-4 h-4" /> },
    { label: 'Frontend', value: 'frontend', icon: <Eye className="w-4 h-4" /> },
    { label: 'Backend', value: 'backend', icon: <Filter className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6">
            Mijn Projecten
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Een overzicht van mijn projecten die ik heb ontwikkeld tijdens mijn opleiding als software developer
          </p>
        </div>

        {/* Enhanced Filter buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              onClick={() => setSelectedFilter(filter.value)}
              variant={selectedFilter === filter.value ? "default" : "outline"}
              className={`group relative px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden ${
                selectedFilter === filter.value
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-105'
                  : 'bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'
              }`}
            >
              <span className="relative z-10 flex items-center gap-2">
                {filter.icon}
                {filter.label}
              </span>
              {selectedFilter !== filter.value && (
                <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left opacity-10"></span>
              )}
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 ${
                project.featured ? 'ring-2 ring-blue-500/20' : ''
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <Star className="w-3 h-3" />
                  Featured
                </div>
              )}

              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Hover Actions */}
                <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  {project.requiresSetup ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 bg-orange-500/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-orange-600 hover:scale-105 shadow-lg"
                    >
                      <Code className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                      <span>Setup Vereist</span>
                    </a>
                  ) : (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 bg-white/90 backdrop-blur-sm text-gray-900 px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white hover:scale-105 shadow-lg"
                  >
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Live Demo</span>
                  </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex items-center gap-2 bg-gray-900/90 backdrop-blur-sm text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-900 hover:scale-105 shadow-lg"
                  >
                    <Github className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                    <span>Code</span>
                  </a>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {project.stats.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Setup Warning */}
                {project.requiresSetup && (
                  <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
                    <div className="flex items-center gap-2 text-orange-800">
                      <Code className="w-4 h-4" />
                      <span className="font-medium text-sm">{project.setupInstructions}</span>
                    </div>
                    <p className="text-orange-700 text-sm mt-1">
                      Klik op "Setup Vereist" voor installatie instructies
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-800 transition-all duration-300 transform hover:scale-105"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;