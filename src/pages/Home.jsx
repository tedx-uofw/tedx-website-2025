import Schedule from '../components/schedule';
import Sponsors from '../components/home-sponsors';
import HeroSection from '../components/HomePage/HeroSection';
import AboutSection from '../components/HomePage/AboutSection';
import VideoSection from '../components/HomePage/VideoSection';
import VenueAndAccessibilitySection from '../components/HomePage/VenueAndAccessibilitySection';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <div className="relative z-10 mt-[50px]">
        <Schedule />
      </div>
      <VenueAndAccessibilitySection />
      <Sponsors />
    </div>
  );
};

export default Home;
