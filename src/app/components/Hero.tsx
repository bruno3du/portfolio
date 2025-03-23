import { personalInfo } from "../data";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen overflow-hidden px-4 pt-16">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-float delay-500"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-spin"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center z-10">
        <h1 className="animate-fade-in text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
        </h1>
        <h2 className="animate-slide-up delay-200 text-2xl md:text-4xl font-light mb-8">
          {personalInfo.title}
        </h2>
        <p className="animate-slide-up delay-400 text-lg max-w-2xl mx-auto mb-12 text-foreground/80">
          {personalInfo.bio}
        </p>
        
        <div className="animate-slide-up delay-600 flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-4 bg-foreground text-background rounded-full hover-lift hover:bg-foreground/90 transition-all">
            View My Work
          </a>
          <a href="#contact" className="px-8 py-4 glass text-foreground rounded-full hover-lift transition-all">
            Contact Me
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
        </svg>
      </div>
    </section>
  );
}