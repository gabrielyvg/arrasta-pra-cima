import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header>
      <nav>
        <Link href={'/'}>Home</Link>
        <Link href={'/aulas'}>Aulas</Link>
      </nav>
    </header>
  );
}
