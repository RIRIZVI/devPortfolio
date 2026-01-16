
import React from 'react';
import Navbar from './components/Navbar';
import AIAssistant from './components/AIAssistant';
import SkillsChart from './components/SkillsChart';
import { PORTFOLIO_DATA } from './constants';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ChevronRight, 
  ExternalLink, 
  Terminal, 
  Code2, 
  Briefcase, 
  UserCircle2,
  Cpu
} from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-900/50 border border-gray-800 rounded-full px-4 py-1.5 mb-8 text-sm text-blue-400 font-mono">
            <Terminal size={14} />
            <span>Hello World! I'm Ri Rizvi</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-tight">
            {PORTFOLIO_DATA.headline.split(' ').map((word, i) => (
              <span key={i} className={i > 4 ? "bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
            {PORTFOLIO_DATA.subHeadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold transition-all transform hover:-translate-y-1 shadow-xl shadow-blue-900/30 flex items-center justify-center gap-2">
              View My Work <ChevronRight size={20} />
            </a>
            <a href="#contact" className="w-full sm:w-auto bg-gray-900 border border-gray-800 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-bold transition-all">
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-900/30 border-y border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <img 
                src="https://picsum.photos/seed/ri-rizvi/600/600" 
                alt="Ri Rizvi" 
                className="relative rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full aspect-square object-cover"
              />
              <div className="absolute bottom-6 right-6 bg-gray-950/80 backdrop-blur px-6 py-4 rounded-xl border border-gray-800">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">Years Experience</p>
              </div>
            </div>
            
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
                <UserCircle2 size={18} />
                <span>About Me</span>
              </div>
              <h2 className="text-4xl font-bold mb-8">Engineering Digital Solutions with Precision</h2>
              <div className="space-y-6 text-gray-400 leading-relaxed text-lg">
                <p>{PORTFOLIO_DATA.about}</p>
                <div className="grid grid-cols-2 gap-8 pt-8">
                  <div>
                    <h4 className="text-white font-bold mb-2">Frontend</h4>
                    <p className="text-sm">Modern frameworks and responsive architectures.</p>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2">Backend</h4>
                    <p className="text-sm">Scalable APIs and robust database schemas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
            <Cpu size={18} />
            <span>Core Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">What I Bring to the Table</h2>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <SkillsChart />
          <div className="grid grid-cols-2 gap-4">
            {PORTFOLIO_DATA.skills.map((skill, idx) => (
              <div 
                key={idx} 
                className="bg-gray-900/50 border border-gray-800 p-6 rounded-2xl hover:bg-gray-800/80 transition-all group"
              >
                <p className="text-gray-400 text-xs mb-2 uppercase tracking-tighter">{skill.category}</p>
                <h4 className="text-white font-bold text-lg group-hover:text-blue-400 transition-colors">{skill.name}</h4>
                <div className="mt-4 w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-emerald-500 h-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
                <Code2 size={18} />
                <span>Portfolio</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Recent Projects</h2>
            </div>
            <p className="text-gray-400 max-w-md">
              A selection of my recent works ranging from enterprise platforms to experimental AI tools.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PORTFOLIO_DATA.projects.map((project) => (
              <div key={project.id} className="bg-gray-900 border border-gray-800 rounded-3xl overflow-hidden group hover:border-gray-700 transition-all">
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="bg-white text-gray-950 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all">
                      <ExternalLink size={20} />
                    </button>
                    <button className="bg-white text-gray-950 p-3 rounded-full hover:bg-blue-400 hover:text-white transition-all">
                      <Github size={20} />
                    </button>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <span className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full">{project.year}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2">{project.longDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-mono border border-gray-800 px-2 py-1 rounded text-gray-500 uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="flex justify-center items-center gap-2 text-blue-400 font-bold text-sm mb-4 uppercase tracking-[0.2em]">
              <Briefcase size={18} />
              <span>Journey</span>
            </div>
            <h2 className="text-4xl font-bold">Professional Experience</h2>
          </div>

          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, idx) => (
              <div key={exp.id} className="relative pl-8 md:pl-0">
                {/* Vertical Line */}
                <div className="hidden md:block absolute left-1/2 -ml-px w-px h-full bg-gray-800"></div>
                
                <div className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 text-left md:text-right px-0 md:px-8">
                    {idx % 2 === 0 ? (
                      <>
                        <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                        <p className="text-white font-semibold">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                      </>
                    ) : (
                      <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-left">
                         <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="relative z-10 w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-950 hidden md:block"></div>

                  <div className="md:w-1/2 text-left px-0 md:px-8">
                    {idx % 2 !== 0 ? (
                       <div className="text-left">
                        <h3 className="text-2xl font-bold text-blue-400">{exp.role}</h3>
                        <p className="text-white font-semibold">{exp.company}</p>
                        <p className="text-sm text-gray-500 mb-4">{exp.period}</p>
                      </div>
                    ) : (
                      <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 text-left">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                              <span className="text-blue-500 mt-1">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's build something <span className="text-blue-400">extraordinary</span> together.</h2>
              <p className="text-gray-400 text-lg mb-12">
                Whether you have a project in mind or just want to chat about tech, my inbox is always open.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:contact@ririzvi.dev" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group">
                  <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <span>contact@ririzvi.dev</span>
                </a>
                <div className="flex gap-4">
                  {PORTFOLIO_DATA.socials.map((social) => (
                    <a key={social.platform} href={social.url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all transform hover:-translate-y-1">
                      {social.platform === 'Github' && <Github size={20} />}
                      {social.platform === 'Linkedin' && <Linkedin size={20} />}
                      {social.platform === 'Twitter' && <Twitter size={20} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <form className="bg-gray-950 p-8 rounded-3xl border border-gray-800 shadow-2xl space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Name</label>
                  <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                  <input type="email" className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
                <input type="text" className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                <textarea rows={4} className="w-full bg-gray-900 border border-gray-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-900/20">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-900 text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Ri Rizvi. Designed & Built with ❤️ using React & Tailwind.
        </p>
      </footer>

      {/* AI Assistant FAB */}
      <AIAssistant />
    </div>
  );
};

export default App;
