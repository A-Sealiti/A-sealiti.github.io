import React from 'react';
import { GraduationCap, Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const education = [
    {
      title: "Support ICT Medewerker",
      institution: "Roc-mondriaan Tinwerf, Den Haag",
      period: "2021 - 2023",
      description: "Tijdens deze tweejarige opleiding tot Support ICT Medewerker heb ik een brede kennis opgedaan van ICT-ondersteuning en beheer. Ik heb geleerd om effectief technische problemen op te lossen, klanten te ondersteunen bij hun ICT-gerelateerde vragen en om te gaan met verschillende software- en hardwareconfiguraties.",
      skills: ["ICT Ondersteuning", "Hardware Configuratie", "Software Beheer", "Klantenservice"]
    },
    {
      title: "Assistent Installatie & Constructietechniek",
      institution: "Roc-mondriaan Tinwerf, Den Haag",
      period: "2020 - 2021",
      description: "Tijdens deze opleiding tot Assistent Installatie & Constructietechniek heb ik me verdiept in de fundamenten van elektrotechniek en installatietechniek. Ik heb kennis opgedaan van elektrische systemen, installatietechnieken en bouwmethoden.",
      skills: ["Elektrotechniek", "Installatietechniek", "Bouwmethoden", "Elektrische Systemen"]
    }
  ];

  const workExperience = [
    {
      title: "IT Medewerker",
      company: "That's It! V.O.F.",
      period: "2022 - Heden",
      location: "Wateringen, Den Haag",
      description: "Als IT Medewerker ben ik verantwoordelijk voor het ondersteunen van de IT-infrastructuur en het bieden van technische ondersteuning aan klanten. Mijn taken omvatten het oplossen van technische problemen, het installeren en configureren van software en hardware.",
      achievements: [
        "Oplossen van technische problemen en IT-ondersteuning",
        "Installeren en configureren van software en hardware"
      ]
    },
    {
      title: "Floor Manager",
      company: "McDonald's",
      period: "2019 - 2022",
      location: "Den Haag",
      description: "Als floor manager bij McDonald's was ik verantwoordelijk voor het effectieve beheer van de voorraad in de vestiging. Dit omvatte het bijhouden van de voorraadniveaus, het plaatsen van bestellingen bij leveranciers en het inventariseren van de voorraad aan het einde van elke maand.",
      achievements: [
        "Effectief voorraadbeheer en inventarisatie",
        "Aansturen van een team van medewerkers",
        "Trainen en begeleiden van personeel",
        "Handhaven van hoogste normen van klantenservice"
      ]
    },
    {
      title: "Vakkenvuller",
      company: "Kruidvat",
      period: "2022 - 2022",
      location: "Den Haag",
      description: "Als vakkenvuller bij Kruidvat was ik verantwoordelijk voor het aanvullen en organiseren van de schappen. Ik heb geleerd om effectief te communiceren met collega's en leidinggevenden.",
      achievements: [
        "Aanvullen en organiseren van schappen",
        "Effectieve communicatie met collega's",
        "Verbetering van teamworkvaardigheden"
      ]
    },
    {
      id: 1,
      title: "Stagier Assistent installatie & constructietechniek",
      company: "4 star Windows",
      period: "2020 - 2021",
      location: "Den Haag",
      description: "Bij 4 star Windows in Den Haag was ik verantwoordelijk voor het monteren van elektrische deuren. Mijn taken omvatten onder meer het installeren, afstellen en testen van elektrische deursystemen voor residentiële en commerciële gebouwen.",
      achievements: [
        "Installeren van elektrische deursystemen",
        "Afstellen en testen van systemen",
        "Versterking van elektrische installatie vaardigheden"
      ],
      technologies: ["Elektrische installatie", "Constructietechniek", "Systeemafstelling"]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6">
            Opleiding & Ervaring
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mijn educatieve achtergrond en professionele ervaring die mij hebben gevormd tot de developer die ik vandaag ben
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl text-white">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Opleidingen</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{edu.title}</h4>
                        <p className="text-blue-600 font-medium mb-1">{edu.institution}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {edu.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            Den Haag
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {edu.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Section */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl text-white">
                <Briefcase className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Werkervaring</h3>
            </div>

            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div 
                  key={index}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h4>
                        <p className="text-purple-600 font-medium mb-1">{job.company}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {job.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {job.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-900 text-sm">Belangrijkste prestaties:</h5>
                      <ul className="space-y-1">
                        {job.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Klaar om samen te werken? 🚀
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Met mijn combinatie van technische vaardigheden en praktische ervaring ben ik klaar om bij te dragen aan jouw volgende project. 
              Laten we praten over hoe ik je kan helpen!
            </p>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Neem Contact Op
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 