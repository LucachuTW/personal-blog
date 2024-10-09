import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'Scikit-learn',
  'Java', 'Linux', 'Git', 'Machine Learning', 'mpi', 'Azure',
  'Data Analysis', 'SQL', 'Cuda', 'Vim'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative z-10">
      <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="text-lg py-2 px-4">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
}