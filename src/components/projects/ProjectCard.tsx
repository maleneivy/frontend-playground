'use client';

import Link from 'next/link';

type ProjectCardProps = {
  title: string;
  description: string;
  path: string;
};

export default function ProjectCard({ title, description, path }: ProjectCardProps) {
  return (
    <div className="border border-gray-400 bg-gray-50 p-4 rounded shadow hover:shadow-md transition flex flex-col">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        href={path}
        className="inline-block mt-2 text-white bg-teal-700 px-3 py-1 rounded hover:bg-teal-400 self-end max-w-fit"
      >
        Gå til prosjekt
      </Link>
    </div>
  );
}
