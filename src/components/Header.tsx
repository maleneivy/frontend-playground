import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full px-4 py-3 shadow-md flex items-center justify-between bg-green-100">
      <div className="flex items-center">
        <Image src="/frontend-playground.png" alt="Logo" width={50} height={50} />
      </div>
      <div className="flex gap-4">
        <Link href="/">Home</Link>
        <a
          href="https://github.com/maleneivy/frontend-playground"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github-repo
        </a>
      </div>
    </header>
  );
}
