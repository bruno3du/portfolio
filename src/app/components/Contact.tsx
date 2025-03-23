import { personalInfo } from "../data";

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-4 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-foreground/[0.01] to-foreground/[0.05]"></div>
      
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full filter blur-3xl opacity-30 animate-float delay-500"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left opacity-0" style={{animationPlayState: 'paused'}}>
            <h2 className="text-4xl font-bold mb-4">
              <span className="gradient-text">Let's Connect</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mb-8"></div>
            
            <p className="text-lg mb-8 text-foreground/80">
              {personalInfo.availableFor}
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 group hover-lift p-4 rounded-xl transition-all hover:bg-foreground/[0.02]">
                <span className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500/10 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-blue-500 transition-colors">Email</h3>
                  <p className="text-foreground/70">{personalInfo.email}</p>
                </div>
              </a>
              
              <a href={personalInfo.socialLinks.github} className="flex items-center gap-4 group hover-lift p-4 rounded-xl transition-all hover:bg-foreground/[0.02]">
                <span className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-500/10 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-purple-500 transition-colors">GitHub</h3>
                  <p className="text-foreground/70">{personalInfo.socialLinks.github.replace('https://', '')}</p>
                </div>
              </a>
              
              <a href={personalInfo.socialLinks.linkedin} className="flex items-center gap-4 group hover-lift p-4 rounded-xl transition-all hover:bg-foreground/[0.02]">
                <span className="w-12 h-12 rounded-full flex items-center justify-center bg-pink-500/10 group-hover:bg-pink-500 group-hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-lg mb-1 group-hover:text-pink-500 transition-colors">LinkedIn</h3>
                  <p className="text-foreground/70">{personalInfo.socialLinks.linkedin.replace('https://', '')}</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="animate-slide-in-right opacity-0" style={{animationPlayState: 'paused'}}>
            <div className="bg-background rounded-2xl shadow-xl overflow-hidden hover-lift">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-foreground/5 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:from-blue-600 hover:to-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all shadow-lg hover:shadow-xl"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
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
            
            document.querySelectorAll('#contact .animate-slide-in-left, #contact .animate-slide-in-right').forEach(el => {
              observer.observe(el);
            });
          });
        `
      }} />
    </section>
  );
}