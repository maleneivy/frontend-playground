import ProjectLinks from '@/components/projects/ProjectsLinks';
import { Inter, Space_Mono } from 'next/font/google';

const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400'] });
const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function Home() {
  return (
    <main className={`${inter.className} max-w-3xl mx-auto p-4 mt-8 sm:mt-12`}>
      <h1 className={`${spaceMono.className} text-3xl sm:text-4xl font-bold mb-4`}>
        Frontend Playground
      </h1>
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
