import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-background py-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Lucachu
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#projects" className="text-foreground hover:text-primary transition-colors">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#skills" className="text-foreground hover:text-primary transition-colors">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <a href="https://github.com/LucachuTW" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/lucas-gonz%C3%A1lez-fiz/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
