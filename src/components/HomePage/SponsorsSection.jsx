import LazyImage from '../common/LazyImage';

const SponsorsSection = () => {
  return (
    <div className="flex flex-col items-start px-6 sm:px-6 md:px-[100px] lg:px-[200px] py-[60px] sm:py-[100px] gap-[30px] sm:gap-[50px] w-full min-h-screen bg-[#080808]">
      {/* Header */}
      <div className="w-full">
        <h1 className="text-[#FDFCFD] font-favorit text-xl sm:text-3xl md:text-[36px] lg:text-[44px] font-medium leading-tight sm:leading-snug md:leading-[44px] lg:leading-[50px] tracking-[-0.02em]">
          Thank you to our sponsors!
        </h1>
      </div>

      {/* Sponsor Grid */}
      <div className="flex flex-col items-start gap-[40px] sm:gap-[40px] w-full">
        {/* Sponsor Card 1 - Large */}
        <a href="https://hub.washington.edu/about/in-the-hub/asuw/" target="_blank" rel="noopener noreferrer" className="w-full select-none">
        <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
            <LazyImage
              src="/sponsors/asuw.png"
              alt="ASUW"
              className="w-[240px] sm:w-[280px] md:w-[320px] h-[auto]"
              placeholderColor="#0C0133"
            />
          </div>
        </a>
        <a href="https://www.celsius.com" target="_blank" rel="noopener noreferrer" className="w-full select-none">
        <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
            <LazyImage
              src="/sponsors/Celsius_Logo.png"
              alt="Celsius: Live Fit"
              className="w-[240px] sm:w-[280px] md:w-[320px] h-[auto]"
              placeholderColor="#0C0133"
            />
          </div>
        </a>
        {/* Medium Sponsors */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-[40px] sm:gap-[40px]">
          <a href="https://www.washington.edu/brand/about/what-we-do/" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/umac.png"
                alt="UMAC"
                className="w-[150px] sm:w-[165px] md:w-[180px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>

          <a href="https://gpss.washington.edu" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/gpss-new.png"
                alt="GPSS"
                className="w-[150px] sm:w-[165px] md:w-[180px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>

          <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/figma.png"
                alt="Figma"
                className="w-[150px] sm:w-[165px] md:w-[180px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>
        </div>

        {/* Small Sponsors */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[40px] sm:gap-[40px]">
          <a href="https://www.washington.edu/alumni" target="_blank" rel="noopener noreferrer" className="select-none">
            <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/UW-Alumni.jpg"
                alt="UW Alumni Association"
                className="w-[120px] sm:w-[135px] md:w-[150px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>
          <a href="https://hub.washington.edu" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/UW-Hub.png"
                alt="HUB RSO Event Fund"
                className="w-[120px] sm:w-[135px] md:w-[150px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>
          <a href="https://ica.washington.edu" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/UWICA1.svg"
                alt="UW ICA"
                className="w-[120px] sm:w-[135px] md:w-[150px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>
          <a href="https://www.seattleboulderingproject.com" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/s-bouldering.png"
                alt="SBP"
                className="w-[120px] sm:w-[135px] md:w-[150px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>
          <a href="https://toastedseattle.com" target="_blank" rel="noopener noreferrer" className="select-none">
          <div className="w-full h-[200px] flex flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
              <LazyImage
                src="/sponsors/toasted.png"
                alt="TOASTED."
                className="w-[120px] sm:w-[135px] md:w-[150px] h-auto"
                placeholderColor="#0C0133"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;