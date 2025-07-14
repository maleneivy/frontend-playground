import ProjectLinks from '@/components/projects/ProjectsLinks';

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Frontend Playground</h1>
      <p className="mb-6">
        Velkommen til min frontend-sandkasse. Her samler jeg små eksperimenter og prosjekter for å
        lære og teste ut ideer.
      </p>

      <div className="flex flex-wrap">
        <ProjectLinks />
      </div>
    </main>
  );
}
