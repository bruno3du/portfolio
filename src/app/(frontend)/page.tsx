import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import LoadWidget from "./components/load-widget";
import Projects from "./components/Projects";

export const revalidate = 10;

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
      <LoadWidget />
    </main>
  );
}
