import Image from 'next/image';
import styles from './page.module.css';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import AboutSection from '../components/AboutSection';
import ExperienceSection from '../components/ExperienceSection';
import ProjectSection from '../components/ProjectSection';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <ProfileSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectSection />
    </main>
  );
}
