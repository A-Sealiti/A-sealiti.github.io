import React from 'react';
import { Code, Database, Globe, Smartphone, Star, Award, Coffee, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Globe className="w-8 h-8" />,
      items: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      category: "Backend",
      icon: <Code className="w-8 h-8" />,
      items: ["Node.js", "Express", "Bcrypt", "JWT", "PHP", "Symfony", "Twig", "Python"],
      color: "from-purple-500 to-pink-500"
    },
    {
      category: "Database",
      icon: <Database className="w-8 h-8" />,
      items: ["MongoDB", "MySQL", "Oracle"],
      color: "from-green-500 to-emerald-500"
    },
    {
      category: "Tools",
      icon: <Code className="w-8 h-8" />,
      items: ["Chart.js", "Photoshop", "Tiled", "GitHub", "Linux", "Office 365"],
      color: "from-orange-500 to-red-500"
    },
    {
      category: "AI & Machine Learning",
      icon: <Smartphone className="w-8 h-8" />,
      items: ["AI", "Machine Learning"],
      color: "from-indigo-500 to-purple-500"
    },
    {
      category: "Overig",
      icon: <Smartphone className="w-8 h-8" />,
      items: ["Responsive Design", "Web Development", "UI/UX"],
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const stats = [
    { icon: <Star className="w-8 h-8" />, value: "Gedreven developer", label: "Passie voor technologie" },
    { icon: <Award className="w-8 h-8" />, value: "2+", label: "Jaar Ervaring" },
    { icon: <Coffee className="w-8 h-8" />, value: "100+", label: "Uren Code" },
    { icon: <Heart className="w-8 h-8" />, value: "∞", label: "Passie voor Tech" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-6">
            Over Mij
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Leer de persoon achter de code kennen
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-10 transform rotate-6"></div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1613203713329-b2e39e14c266?w=500&h=400&fit=crop"
                alt="Werkplek"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl border-8 border-white"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium">Beschikbaar voor projecten</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="text-4xl mr-3 animate-wave">👋</span>
                Hallo, ik ben Abdel!
              </h3>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <strong><span style={{color: '#2563eb'}}>Een gemotiveerde software developer</span> in opleiding</strong> met een passie voor <span style={{color: '#059669'}}>technologie</span>, sport en persoonlijke groei. Naast mijn studie werk ik als <span style={{color: '#7c3aed'}}>technisch medewerker</span>, waar ik ervaring opdoe met <span style={{color: '#d97706'}}>software-installaties</span>, <span style={{color: '#dc2626'}}>hardwarevervanging</span> en <span style={{color: '#0891b2'}}>gebruikersondersteuning</span>.
                </p>
                <p>
                  In mijn vrije tijd ben ik vaak te vinden in de <span style={{color: '#059669'}}>sportschool</span>. Sporten helpt me <span style={{color: '#2563eb'}}>gefocust</span> en energiek te blijven. Ik ben altijd klaar om <span style={{color: '#d97706'}}>nieuwe uitdagingen</span> aan te gaan.
                </p>
                <p>
                  Ik haal plezier uit het <span style={{color: '#dc2626'}}>oplossen van technische problemen</span> en het bedenken van <span style={{color: '#7c3aed'}}>creatieve oplossingen</span>. Nieuwe technologieën motiveren me om mezelf continu te blijven ontwikkelen, zowel <span style={{color: '#0891b2'}}>professioneel</span> als <span style={{color: '#059669'}}>persoonlijk</span>.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg border border-white/50 hover:scale-105 transition-transform duration-300">
                  <div className="text-blue-600 mb-2 flex justify-center">{stat.icon}</div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <div 
              key={groupIndex}
              className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${skillGroup.color} text-white mb-6 shadow-lg`}>
                  {skillGroup.icon}
                </div>
                
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  {skillGroup.category}
                </h4>
                
                <div className="space-y-3">
                  {skillGroup.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={`px-4 py-2 bg-gradient-to-r ${skillGroup.color} bg-opacity-10 rounded-full text-sm font-medium text-gray-800 hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105`}
                    >
                      {item}
                    </div>
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

export default About;