import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Rubik\'s Cube Algorithms',
    description: 'A collection of algorithms for solving the Rubik\'s Cube, demonstrating problem-solving skills and algorithm implementation.',
    technologies: ['Python', 'Algorithms', 'Problem Solving'],
    link: 'https://github.com/LucachuTW/algorythms_rubik',
  },
  {
    title: 'Connect 4 in Java',
    description: 'Implementation of the classic Connect 4 game in Java, showcasing object-oriented programming and game logic.',
    technologies: ['Java', 'Game Development', 'OOP'],
    link: 'https://github.com/LucachuTW/conecta-4-java',
  },
  {
    title: 'RAIN Hardware Diagnostics',
    description: 'A tool for diagnosing hardware issues, likely using AI or machine learning techniques for analysis.',
    technologies: ['Python', 'Hardware Diagnostics', 'AI/ML'],
    link: 'https://github.com/LucachuTW/RAIN-diagnostico-hardware',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-card h-full flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline" className="w-full">
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}