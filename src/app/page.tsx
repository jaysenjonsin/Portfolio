import Image from 'next/image';
import styles from './page.module.css';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ProfileSection />
    </main>
  );
}
