import { skills } from "../data";

export default function About() {
  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-foreground/[0.02] rounded-bl-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center relative">
          <span className="gradient-text">About Me</span>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
        </h2>
        <p className="text-center text-foreground/70 mb-16 max-w-3xl mx-auto">Passionate about creating seamless experiences with modern technologies</p>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left opacity-0" style={{animationPlayState: 'paused', animationDelay: '100ms'}}>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-500/20 rounded-full"></div>
              <div className="relative p-8 glass rounded-2xl hover-lift">
                <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
                <p className="text-lg mb-6 text-foreground/80">
                  I'm a passionate fullstack developer with expertise in building modern web applications. 
                  With a strong foundation in JavaScript and TypeScript, I create robust and scalable solutions.
                </p>
                <p className="text-lg text-foreground/80">
                  I specialize in frontend development with React and backend development with Node.js and NestJS.
                  My goal is to deliver high-quality code that solves real-world problems.
                </p>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-in-right opacity-0" style={{animationPlayState: 'paused', animationDelay: '300ms'}}>
            <div className="p-8 rounded-2xl shadow-lg hover-lift bg-gradient-to-br from-foreground/[0.03] to-foreground/[0.08] dark:from-foreground/[0.05] dark:to-foreground/[0.10]">
              <h3 className="text-2xl font-semibold mb-6">Skills & Expertise</h3>
              <div className="space-y-6">
                {/* Frontend Skills */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{skills.frontend.label}</h4>
                    <span className="text-sm text-foreground/60">{skills.frontend.description}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress" style={{width: `${skills.frontend.proficiency}%`}}></div>
                  </div>
                </div>
                
                {/* Backend Skills */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{skills.backend.label}</h4>
                    <span className="text-sm text-foreground/60">{skills.backend.description}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress" style={{width: `${skills.backend.proficiency}%`}}></div>
                  </div>
                </div>
                
                {/* Database Skills */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{skills.database.label}</h4>
                    <span className="text-sm text-foreground/60">{skills.database.description}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress" style={{width: `${skills.database.proficiency}%`}}></div>
                  </div>
                </div>
                
                {/* API Design */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{skills.apiDesign.label}</h4>
                    <span className="text-sm text-foreground/60">{skills.apiDesign.description}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress" style={{width: `${skills.apiDesign.proficiency}%`}}></div>
                  </div>
                </div>
                
                {/* UI/UX */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold">{skills.uiux.label}</h4>
                    <span className="text-sm text-foreground/60">{skills.uiux.description}</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-bar-progress" style={{width: `${skills.uiux.proficiency}%`}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Intersection Observer Trigger Script for animations */}
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
            
            document.querySelectorAll('.animate-slide-in-left, .animate-slide-in-right').forEach(el => {
              observer.observe(el);
            });
          });
        `
      }} />
    </section>
  );
}