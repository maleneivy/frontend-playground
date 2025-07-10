import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full px-4 py-3 shadow-md flex items-center justify-between">
      <div>Frontend-projects</div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <a
          href="https://github.com/maleneivy/frontend-playground"
          target="_blank"
          rel="noopener norefferrer"
        >
          Github-repo
        </a>
      </div>
    </header>
  );
}
