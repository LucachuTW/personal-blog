import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden pointer-events-none">
        <Image
          src="https://i.imgur.com/kdKhgx6.gif"
          alt="Decorative AI Animation"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}