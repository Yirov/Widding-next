import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from './ui/home.module.scss'
import { sacramento, work_Sans } from './ui/font';

export default function Page() {
  return (
    <>
    <div className={styles.shape}></div>
      <h1 className='fonts-mine'>fonts </h1>
      <p className={`${sacramento.className} antialiased`} >Sacramento</p>
      <p className={`${work_Sans.className} antialiased`}>Work sans</p>
    </>
  );
}
