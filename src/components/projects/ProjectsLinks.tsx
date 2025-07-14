import { projects } from '@/data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectLinks() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {projects.map((proj) => (
        <ProjectCard
          key={proj.path}
          title={proj.title}
          description={proj.description}
          path={proj.path}
        />
      ))}
    </div>
  );
}
