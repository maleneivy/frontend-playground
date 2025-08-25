import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], weight: ['400'] });

export default function Footer() {
  return (
    <footer
      className={`${inter.className} w-full px-4 py-2 shadow-md text-center text-sm bg-green-100`}
    >
      © Malene Ivy Olsen {new Date().getFullYear()}
    </footer>
  );
}
