import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="py-20 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Hi, I'm <span className="text-primary">Lucachu</span>
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
        AI Engineer | Python Expert | Linux Enthusiast
      </p>
      <Button asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  );
}