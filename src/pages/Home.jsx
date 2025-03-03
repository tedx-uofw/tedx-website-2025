import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import VideoSection from '../components/HomePage/VideoSection';
import VenueAndAccessibilitySection from '../components/HomePage/VenueAndAccessibilitySection';
import SponsorsSection from '../components/HomePage/SponsorsSection';
import ScheduleSection from '../components/HomePage/ScheduleSection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <div className="relative z-10 mt-[50px]">
        <ScheduleSection />
      </div>
      <VenueAndAccessibilitySection />
      <SponsorsSection />
    </div>
  );
};

export default Home;
