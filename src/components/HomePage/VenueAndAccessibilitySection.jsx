const VenueAndAccessibilitySection = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12 lg:gap-[60px] px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 sm:py-12 md:py-16 lg:py-[100px]">
      {/* Venue Section */}
      <div className="flex flex-col items-start gap-3 md:gap-4 lg:gap-[20px]">
        <div className="text-[#FDFCFD] font-favorit text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight md:leading-[50px] tracking-[-0.88px]">
          Venue
        </div>

        <div className="text-[#FDFCFD] font-favorit text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug md:leading-[28px] tracking-[-0.24px] max-w-[1000px]">
          Kane Hall is a dynamic hub for lectures, performances, and events located at the heart of UW's stunning Seattle campus.
          The venue houses excellent acoustics and a welcoming atmosphere to engage in cultural showcases, 
          academic milestones, thought-provoking discussions.
          <div className="mt-3 sm:mt-4 md:mt-6">
            <a 
              href="https://transportation.uw.edu/park" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#B1A8B3] transition-colors"
            >
              Parking Information
            </a>
            <span className="mx-2">|</span>
            <a 
              href="https://www.google.com/maps?q=4069+Spokane+Ln+NE,+Seattle,+WA+98105" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FF0000] hover:text-[#B1A8B3] transition-colors"
            >
              Directions
            </a>
          </div>
        </div>
      </div>

      {/* Image and Accessibility Section */}
      <div className="flex flex-col gap-6 sm:gap-8 md:gap-[40px]">
        <img
          src="/about/kane2.jpg"
          alt="Kane Hall"
          className="w-full h-[250px] sm:h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-lg"
        />

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-[40px] items-start">
          <div className="text-[#FDFCFD] font-favorit text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight md:leading-[50px] tracking-[-0.88px] lg:flex-1">
            Accessibility
          </div>
          <div className="text-[#FDFCFD] font-favorit text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-snug md:leading-[28px] tracking-[-0.24px] lg:w-[525px]">
            The venue provides adequate accommodations for those in need of wheelchair seating or closed captions. Please email tedxuofw@uw.edu if you require further accommodations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenueAndAccessibilitySection; 