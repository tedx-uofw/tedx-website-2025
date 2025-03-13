const ScheduleSection = () => {
    return (
        <div className="flex flex-col px-4 sm:px-6 md:px-12 lg:px-[100px] py-8 sm:py-12 md:py-16 lg:py-[60px] items-start gap-2 sm:gap-4 bg-[#080808]">
            <h1 className="text-[#FDFCFD] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-tight lg:leading-[50px] tracking-[-0.88px]">
                Conference Schedule</h1>

            {/* ----------------------------- EVENT 1 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring.svg"
                            alt="Ring"
                            className="w-[20px] sm:w-[24px] h-[20px] sm:h-[24px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            10:30 - 10:45 AM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Conference Opening
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>


            {/* ----------------------------- SPEAKER 1 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <img
                        src="/speakers/diana.png"
                        alt="Speaker"
                        className="w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] object-cover shrink-0"
                    />

                    <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            10:50 - 11:05 AM
                        </p>

                        <div className="flex flex-col items-start gap-0.5 sm:gap-2">
                            <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                                Amplifying Potential Through Mentorship
                            </h2>
                            
                            <h3 className="text-[#B1A8B3] text-sm sm:text-2xl md:text-[28px] leading-tight sm:leading-snug md:leading-[34px] tracking-[-0.28px]">
                                Diana Vicezar
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-4">
                        
                            <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>


            {/* ----------------------------- SPEAKER 2 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <img
                        src="/speakers/kris.jpg"
                        alt="Speaker"
                        className="w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] object-cover shrink-0"
                    />

                    <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            11:10 - 11:25 AM
                        </p>

                        <div className="flex flex-col items-start gap-0.5 sm:gap-2">
                            <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Dementia Needs a Lot More Thought
                            </h2>
                            
                            <h3 className="text-[#B1A8B3] text-sm sm:text-2xl md:text-[28px] leading-tight sm:leading-snug md:leading-[34px] tracking-[-0.28px]">
                                Kris Engskov
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-4">
                        
                            <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- EVENT 2 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring5.svg"
                            alt="Ring"
                            className="w-[28px] sm:w-[40px] h-[28px] sm:h-[40px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            11:30 - 11:45 AM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Traditional Chinese Dance
                        </h2>

                        <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                            Performance
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- SPEAKER 3 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <img
                        src="/speakers/ana.jpg"
                        alt="Speaker"
                        className="w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] object-cover shrink-0"
                    />

                    <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            11:50 - 12:05 PM
                        </p>

                        <div className="flex flex-col items-start gap-0.5 sm:gap-2">
                            <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                                Discovery, Exploration and Inquiry: A Love Story
                            </h2>
                            
                            <h3 className="text-[#B1A8B3] text-sm sm:text-2xl md:text-[28px] leading-tight sm:leading-snug md:leading-[34px] tracking-[-0.28px]">
                                Ana Maria Pinto da Silva
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-4">
                        
                            <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- EVENT 3 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring2.svg"
                            alt="Ring"
                            className="w-[40px] sm:w-[60px] h-[40px] sm:h-[60px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            12:10 - 12:15 PM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Raffle Draw 1
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>


            {/* ----------------------------- EVENT 4 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring3.svg"
                            alt="Ring"
                            className="w-[60px] sm:w-[96px] h-[14px] sm:h-[21px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            12:20 - 1:20 PM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Intermission
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>


            {/* ----------------------------- EVENT 5 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring4.svg"
                            alt="Ring"
                            className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            1:25 - 1:40 PM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Developpe Dance Club
                        </h2>

                        <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                            Performance
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- SPEAKER 4 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <img
                        src="/speakers/gesshaa.jpg"
                        alt="Speaker"
                        className="w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] object-cover shrink-0"
                    />

                    <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            1:45 - 2:00 PM
                        </p>

                        <div className="flex flex-col items-start gap-0.5 sm:gap-2">
                            <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                                Breaking the Oppressive Nature of Time
                            </h2>
                            
                            <h3 className="text-[#B1A8B3] text-sm sm:text-2xl md:text-[28px] leading-tight sm:leading-snug md:leading-[34px] tracking-[-0.28px]">
                                Gresshaa Mehta
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-4">
                        
                            <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- SPEAKER 5 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <img
                        src="/speakers/doc.jpg"
                        alt="Speaker"
                        className="w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] object-cover shrink-0"
                    />

                    <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            2:05 - 2:20 PM
                        </p>

                        <div className="flex flex-col items-start gap-0.5 sm:gap-2">
                            <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                                The Transformative Power of Community Innovation 
                            </h2>
                            
                            <h3 className="text-[#B1A8B3] text-sm sm:text-2xl md:text-[28px] leading-tight sm:leading-snug md:leading-[34px] tracking-[-0.28px]">
                                Doc Wilson
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-4">
                        
                            <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- EVENT 6 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring6.svg"
                            alt="Ring"
                            className="w-[50px] sm:w-[80px] h-[50px] sm:h-[80px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            2:25 - 2:30 PM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Raffle Draw 2
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>


            {/* ----------------------------- EVENT 7 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring4.svg"
                            alt="Ring"
                            className="w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            2:35 - 2:50 PM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Furmata Acapella
                        </h2>

                        <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                            Performance
                        </div>  
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- SPEAKER 6 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <img
                        src="/speakers/mike.jpg"
                        alt="Speaker"
                        className="w-[80px] h-[80px] sm:w-[180px] sm:h-[180px] object-cover shrink-0"
                    />

                    <div className="flex flex-col items-start gap-1 sm:gap-2 min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            2:55 - 3:10 PM
                        </p>

                        <div className="flex flex-col items-start gap-0.5 sm:gap-2">
                            <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                                Crossing the Chasm of Life’s Changes
                            </h2>
                            
                            <h3 className="text-[#B1A8B3] text-sm sm:text-2xl md:text-[28px] leading-tight sm:leading-snug md:leading-[34px] tracking-[-0.28px]">
                                Michael Wang
                            </h3>
                        </div>

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-1 sm:mt-4">
                        
                            <div className="flex px-2 sm:px-5 py-0.5 sm:py-1.5 items-center rounded-[20px] border border-[#B1A8B3] text-xs sm:text-base">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>

            {/* ----------------------------- EVENT 8 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 w-full">
                <div className="flex items-center gap-3 sm:gap-6 w-full py-4 sm:py-8">
                    <div className="flex w-[80px] sm:w-[180px] h-[60px] sm:h-[100px] p-2 sm:p-[36px] justify-center items-center shrink-0">
                        <img
                            src="/schedule/Ring4.svg"
                            alt="Ring"
                            className="w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
                        />
                    </div>

                    <div className="flex flex-col items-start min-w-0">
                        <p className="text-[#B1A8B3] text-xs sm:text-base leading-4 sm:leading-5 tracking-[-0.16px]">
                            3:15 - 3:45 PM
                        </p>

                        <h2 className="text-[#FDFCFD] font-medium text-lg sm:text-3xl md:text-[36px] leading-tight md:leading-[48px] tracking-[-0.72px]">
                            Speaker Panel
                        </h2>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div>
            </div>
        </div>
    )
};

export default ScheduleSection; 