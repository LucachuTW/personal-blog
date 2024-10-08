import { Badge } from '@/components/ui/badge';

const skills = [
  'Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'NLTK',
  'Java', 'Linux', 'Docker', 'Git', 'Machine Learning',
  'Deep Learning', 'Natural Language Processing', 'Computer Vision',
  'Data Analysis', 'Shell Scripting', 'SQL'
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