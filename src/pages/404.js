import Image from 'next/image';
import styles from '@/styles/404.module.css';

export default function Custom404() {
  return (
    <div>
      <Image
        src='/404.jpg'
        alt='404'
        className=''
        width={800}
        height={600}
        priority
      />
    </div>
  );
}
