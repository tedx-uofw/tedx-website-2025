const SponsorsSection = () => {
  return (
    <div className="flex flex-col justify-center items-start gap-6 md:gap-8 lg:gap-[40px] px-4 sm:px-6 md:px-12 lg:px-[100px] py-12 sm:py-16 md:py-20 lg:py-[100px]">
      {/* Header */}
      <div className="w-full">
        <h1 className="text-[#FDFCFD] font-favorit text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold leading-tight md:leading-[50px] tracking-[-0.88px]">
          Thank you to our sponsors!
        </h1>
      </div>

      {/* Sponsor Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 w-full">
        {/* Sponsor Card 1 */}
        <div className="flex py-12 sm:py-16 md:py-20 lg:py-[100px] flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
          <img
            src="/sponsors/asuw.png"
            alt="ASUW"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* Sponsor Card 2 */}
        <div className="flex py-12 sm:py-16 md:py-20 lg:py-[100px] flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
          <img
            src="/sponsors/asuw.png"
            alt="ASUW"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* Sponsor Card 3 */}
        <div className="flex py-12 sm:py-16 md:py-20 lg:py-[100px] flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
          <img
            src="/sponsors/asuw.png"
            alt="ASUW"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* Sponsor Card 4 */}
        <div className="flex py-12 sm:py-16 md:py-20 lg:py-[100px] flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
          <img
            src="/sponsors/asuw.png"
            alt="ASUW"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* Sponsor Card 5 */}
        <div className="flex py-12 sm:py-16 md:py-20 lg:py-[100px] flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
          <img
            src="/sponsors/asuw.png"
            alt="ASUW"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
          />
        </div>

        {/* Sponsor Card 6 */}
        <div className="flex py-12 sm:py-16 md:py-20 lg:py-[100px] flex-col justify-center items-center rounded-lg sm:rounded-xl lg:rounded-2xl bg-[#0C0133] transition-transform hover:scale-[1.02]">
          <img
            src="/sponsors/asuw.png"
            alt="ASUW"
            className="w-[160px] sm:w-[180px] md:w-[200px] h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection; 