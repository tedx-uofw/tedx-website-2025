const Schedule = () => {
    return (
        <div className="flex flex-col p-[60px_200px] items-start gap-[48px] self-stretch bg-[#080808]"> {/* Schedule */}
            <h1 className="text-[#FDFCFD] font-bold text-[44px] leading-[50px] tracking-[-0.88px]">Schedule</h1>

            {/* ----------------------------- EVENT 1 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring.svg"
                            alt="Ring"
                            className="w-[24px] h-[24px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Conference Begins
                            </h1>
                        </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- SPEAKER ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <img
                        src="/schedule/schedule-placeholder-img.png"
                        alt="Ring"
                        className="w-[180px] h-[180px]"
                    />

                    <div className="flex h-[180px] flex-col items-start gap-1 flex-1"> {/* Copy */}
                        <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                            <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                10:50 - 11:05 AM
                            </p>
                        </div>

                        <div className="flex flex-col items-start self-stretch"> {/* Title Container */}
                            <h2 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Underwater Basketweaving
                            </h2>
                            
                            <h3 className="self-stretch text-[#B1A8B3] font-normal text-[28px] leading-[34px] tracking-[-0.28px]">
                                Eddy Peng, THE GOAT
                            </h3>
                        </div>

                        <div className="flex pt-2 items-end gap-1 flex-1"> {/* Tags */}
                            <div className="flex px-5 py-1.5 justify-center items-center gap-2.5 rounded-[20px] border border-[#B1A8B3]">
                                Keynote
                            </div>
                        
                            <div className="flex px-5 py-1.5 justify-center items-center gap-2.5 rounded-[20px] border border-[#B1A8B3]">
                                Speaker
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- EVENT 2 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring5.svg"
                            alt="Ring"
                            className="w-[40px] h-[40px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Raffle Draw 1
                            </h1>
                        </div>
                    </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- EVENT 3 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring2.svg"
                            alt="Ring"
                            className="w-[60px] h-[60px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Raffle Draw 2
                            </h1>
                        </div>
                    </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- EVENT 4 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring3.svg"
                            alt="Ring"
                            className="w-[96px] h-[21px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Intermission
                            </h1>
                        </div>
                    </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- Event 5 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring4.svg"
                            alt="Ring"
                            className="w-[80px] h-[80px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Raffle Draw 3
                            </h1>
                        </div>
                    </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- Event 6 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring6.svg"
                            alt="Ring"
                            className="w-[80px] h-[80px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Networking
                            </h1>
                        </div>
                    </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>


            {/* ----------------------------- Event 7 ----------------------------- */}
            <div className="flex flex-col justify-end items-start gap-2 self-stretch"> {/* Schedule Block */}
                <div className="flex items-center gap-6 self-stretch py-8"> {/* Body */}
                    <div className="flex w-[180px] h-[100px] p-[36px] justify-center items-center gap-[12px]"> {/* Schedule Icon */}
                        <img
                            src="/schedule/Ring4.svg"
                            alt="Ring"
                            className="w-[100px] h-[100px] flex-shrink-0"
                        />
                    </div>

                        <div className="flex flex-col items-start flex-1"> {/* Copy */}
                            <div className="flex items-start gap-5 self-stretch"> {/* Time */}
                                <p className="text-[#B1A8B3] font-normal text-[16px] leading-[20px] tracking-[-0.16px]">
                                    10:50 - 11:05 AM
                                </p>
                            </div>

                            <h1 className="self-stretch text-[#FDFCFD] font-medium text-[36px] leading-[48px] tracking-[-0.72px]">
                                Conference Ends
                            </h1>
                        </div>
                    </div>
                <div className="w-full h-[2px] border-t-[2px] border-dotted border-[#B1A8B3]"></div> {/* Line */}
            </div>
        </div>
    )
  };
  
export default Schedule;