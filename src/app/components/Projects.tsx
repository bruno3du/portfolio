import Image from "next/image";
import { projects } from "../data";

export default function Projects() {
  // Helper function to get the correct color classes based on project color
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500/20',
          bgHover: 'bg-blue-500',
          bgTag: 'bg-blue-100/50 dark:bg-blue-900/20',
          text: 'text-blue-800 dark:text-blue-300',
          hover: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
          borderGradient: 'from-blue-500/20 to-purple-500/20',
          overlayGradient: 'from-blue-500/10 to-purple-500/10'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500/20',
          bgHover: 'bg-purple-500',
          bgTag: 'bg-purple-100/50 dark:bg-purple-900/20',
          text: 'text-purple-800 dark:text-purple-300',
          hover: 'text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300',
          borderGradient: 'from-purple-500/20 to-pink-500/20',
          overlayGradient: 'from-purple-500/10 to-pink-500/10'
        };
      case 'pink':
        return {
          bg: 'bg-pink-500/20',
          bgHover: 'bg-pink-500',
          bgTag: 'bg-pink-100/50 dark:bg-pink-900/20',
          text: 'text-pink-800 dark:text-pink-300',
          hover: 'text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300',
          borderGradient: 'from-pink-500/20 to-orange-500/20',
          overlayGradient: 'from-pink-500/10 to-orange-500/10'
        };
      default:
        return {
          bg: 'bg-blue-500/20',
          bgHover: 'bg-blue-500',
          bgTag: 'bg-blue-100/50 dark:bg-blue-900/20',
          text: 'text-blue-800 dark:text-blue-300',
          hover: 'text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
          borderGradient: 'from-blue-500/20 to-purple-500/20',
          overlayGradient: 'from-blue-500/10 to-purple-500/10'
        };
    }
  };

  return (
    <section id="projects" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/[0.02] to-foreground/[0.06]"></div>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="gradient-text">Featured Projects</span>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
          A selection of projects that showcase my technical skills and problem-solving abilities
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <div 
                key={project.id}
                className="group relative animate-slide-up opacity-0" 
                style={{animationPlayState: 'paused', animationDelay: `${100 * (index + 1)}ms`}}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${colors.borderGradient} rounded-xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                <div className="relative bg-background rounded-xl overflow-hidden shadow-xl hover-lift transition-all">
                  <div className="h-56 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${colors.overlayGradient} z-10 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    <div className="h-full w-full bg-foreground/10 flex items-center justify-center">
                      <Image 
                        src={project.image} 
                        alt={project.title} 
                        width={80} 
                        height={80} 
                        className="dark:invert transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className={`text-xl font-bold group-hover:${colors.hover.split(' ')[0]} dark:group-hover:${colors.hover.split(' ')[2]} transition-colors`}>
                        {project.title}
                      </h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-foreground/80 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-2 py-1 ${colors.bgTag} ${colors.text} text-xs rounded-full`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4">
                        <a href={project.links.demo} className={`text-sm ${colors.hover} transition-colors font-medium flex items-center gap-1`}>
                          <span>Live Demo</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                        <a href={project.links.github} className={`text-sm ${colors.hover} transition-colors font-medium flex items-center gap-1`}>
                          <span>GitHub</span>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </a>
                      </div>
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center bg-foreground/5 group-hover:${colors.bgHover} transition-colors`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-foreground/70 group-hover:text-white transition-colors">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <a href="#" className="inline-flex items-center gap-2 text-foreground/70 hover:text-foreground transition-colors group">
            <span>View All Projects</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Intersection Observer for animations */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting) {
                  entry.target.style.animationPlayState = 'running';
                }
              });
            }, { threshold: 0.1 });
            
            document.querySelectorAll('#projects .animate-slide-up').forEach(el => {
              observer.observe(el);
            });
          });
        `
      }} />
    </section>
  );
}