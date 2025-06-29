import Hero from '@/components/shared/home/Hero';
import WhoAreWe from '@/components/shared/home/WhoAreWe';
import CoreServices from '@/components/shared/home/CoreServices';
import Why4Ward from '@/components/shared/home/Why4Ward';
import CaseStudies from '@/components/shared/home/CaseStudies';
import Contact from '@/components/shared/home/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoAreWe />
      <CoreServices />
      <Why4Ward />
      <CaseStudies />
      <Contact />
    </div>
  );
}
