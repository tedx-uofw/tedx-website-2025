const Sponsors = () => {
    return(
        <div className="flex flex-col justify-center items-start gap-[40px] self-stretch px-[200px] pt-[100px] pb-[200px]"> {/* Sponsors */}
            <div className="flex flex-col justify-center items-start gap-[10px] self-stretch"> {/* Header */}
                <h1 className="text-[#FDFCFD] font-[ABC Favorit Variable Edu] text-[44px] font-bold leading-[50px] tracking-[-0.88px]">
                    Thank you to our sponsors!
                </h1>
            </div>

            <div class="flex items-start content-start gap-[24px] self-stretch flex-wrap"> {/* Sponsor Container */}
                {/* Sponsor Card 1 */}
                <div class="flex min-w-[412px] py-[100px] flex-col justify-center items-center gap-[10px] flex-1 rounded-[16px] bg-[#0C0133]">
                    <img
                        src="/src/resources/img/components/home-sponsors/asuw.png"
                        alt="Sponsor 1"
                        className="w-[200px] h-[60px]"
                    />
                </div>
                {/* Sponsor Card 2 */}
                <div class="flex min-w-[412px] py-[100px] flex-col justify-center items-center gap-[10px] flex-1 rounded-[16px] bg-[#0C0133]">
                    <img
                        src="/src/resources/img/components/home-sponsors/asuw.png"
                        alt="Sponsor 2"
                        className="w-[200px] h-[60px]"
                    />
                </div>
                {/* Sponsor Card 3 */}
                <div class="flex min-w-[412px] py-[100px] flex-col justify-center items-center gap-[10px] flex-1 rounded-[16px] bg-[#0C0133]">
                    <img
                        src="/src/resources/img/components/home-sponsors/asuw.png"
                        alt="Sponsor 3"
                        className="w-[200px] h-[60px]"
                    />
                </div>
                {/* Sponsor Card 4 */}
                <div class="flex min-w-[412px] py-[100px] flex-col justify-center items-center gap-[10px] flex-1 rounded-[16px] bg-[#0C0133]">
                    <img
                        src="/src/resources/img/components/home-sponsors/asuw.png"
                        alt="Sponsor 4"
                        className="w-[200px] h-[60px]"
                    />
                </div>
                {/* Sponsor Card 5 */}
                <div class="flex min-w-[412px] py-[100px] flex-col justify-center items-center gap-[10px] flex-1 rounded-[16px] bg-[#0C0133]">
                    <img
                        src="/src/resources/img/components/home-sponsors/asuw.png"
                        alt="Sponsor 5"
                        className="w-[200px] h-[60px]"
                    />
                </div>
                {/* Sponsor Card 6 */}
                <div class="flex min-w-[412px] py-[100px] flex-col justify-center items-center gap-[10px] flex-1 rounded-[16px] bg-[#0C0133]">
                    <img
                        src="/src/resources/img/components/home-sponsors/asuw.png"
                        alt="Sponsor 6"
                        className="w-[200px] h-[60px]"
                    />
                </div>
            </div>

        </div>
    )
}

export default Sponsors;