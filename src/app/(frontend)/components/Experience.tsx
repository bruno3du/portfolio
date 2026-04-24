import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-foreground/[0.02] rounded-tr-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">
          <span className="gradient-text">Work Experience</span>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto">
          My professional journey building digital experiences that matter
        </p>
        
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-foreground/10 z-0"></div>
          
          {experience.map((job, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div key={job.id} className={`flex flex-col md:flex-row ${index !== experience.length - 1 ? 'mb-16' : ''} relative`}>
                <div className={`w-16 h-16 rounded-full bg-${job.color}-500/10 absolute left-0 md:left-1/2 transform md:-translate-x-1/2 z-10 flex items-center justify-center`}>
                  <div className={`w-8 h-8 rounded-full bg-${job.color}-500 animate-pulse`}></div>
                </div>
                
                {isEven ? (
                  <>
                    <div className="md:w-1/2 md:pr-16 pl-24 md:pl-0 animate-slide-in-left opacity-0" style={{animationPlayState: 'paused'}}>
                      <div className="text-right hidden md:block">
                        <span className={`inline-block px-4 py-2 bg-${job.color}-500/10 dark:bg-${job.color}-500/20 rounded-lg font-semibold text-foreground`}>{job.duration}</span>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-16 pl-24 animate-slide-in-right opacity-0" style={{animationPlayState: 'paused'}}>
                      <div className="bg-background rounded-lg p-6 shadow-lg hover-lift glass">
                        <span className={`md:hidden inline-block px-3 py-1 bg-${job.color}-500/10 dark:bg-${job.color}-500/20 rounded-lg text-sm font-semibold text-foreground mb-4`}>{job.duration}</span>
                        <h3 className="text-2xl font-bold">{job.role}</h3>
                        <h4 className="text-lg gradient-text font-medium mb-4">{job.company}</h4>
                        <p className="text-foreground/80 mb-6">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-foreground/5 text-foreground/80 text-sm rounded-full">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:w-1/2 md:pr-16 pl-24 md:pl-0 animate-slide-in-right opacity-0" style={{animationPlayState: 'paused'}}>
                      <div className="bg-background rounded-lg p-6 shadow-lg hover-lift glass">
                        <span className={`md:hidden inline-block px-3 py-1 bg-${job.color}-500/10 dark:bg-${job.color}-500/20 rounded-lg text-sm font-semibold text-foreground mb-4`}>{job.duration}</span>
                        <h3 className="text-2xl font-bold">{job.role}</h3>
                        <h4 className="text-lg gradient-text font-medium mb-4">{job.company}</h4>
                        <p className="text-foreground/80 mb-6">
                          {job.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className="px-3 py-1 bg-foreground/5 text-foreground/80 text-sm rounded-full">{skill}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="md:w-1/2 md:pl-16 pl-24 animate-slide-in-left opacity-0" style={{animationPlayState: 'paused'}}>
                      <div className="text-right hidden md:block">
                        <span className={`inline-block px-4 py-2 bg-${job.color}-500/10 dark:bg-${job.color}-500/20 rounded-lg font-semibold text-foreground`}>{job.duration}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
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
            
            document.querySelectorAll('#experience .animate-slide-in-left, #experience .animate-slide-in-right').forEach(el => {
              observer.observe(el);
            });
          });
        `
      }} />
    </section>
  );
}