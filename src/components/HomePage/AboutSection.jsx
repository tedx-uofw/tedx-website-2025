const AboutSection = () => {
  return (
    <section className="flex flex-col md:flex-row px-6 md:px-12 lg:px-[100px] py-16 md:py-20 lg:py-[120px] items-center lg:items-end gap-8 md:gap-12 lg:gap-[100px] self-stretch bg-[#07023D]">
      {/* Video Container */}
      <div className="w-full md:w-[400px] lg:w-[480px] aspect-square">
        <video className="w-full h-full object-cover rounded-lg" autoPlay loop muted playsInline>
          <source src="/about/nervous-dots3.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Text Container */}
      <div className="flex flex-col items-start gap-4 md:gap-6 lg:gap-[24px] flex-1">
        <div className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-2xl md:text-3xl lg:text-[36px] font-medium leading-tight md:leading-snug lg:leading-[48px] tracking-[-0.72px]">
          (noun) A single action or idea can echo and shape the world, leaving a lasting impact.
        </div>

        <div className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-lg md:text-2xl lg:text-[28px] font-normal leading-snug md:leading-relaxed lg:leading-[34px] tracking-[-0.28px]">
          The way a single action, idea, or event emerges and continues to echo over time, creating waves that extend far beyond the initial moment. 
          Learn how the essence of a single moment can contribute to a larger, lasting legacy that connects people and ideas across time and space.
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 