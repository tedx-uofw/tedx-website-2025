import React, { useEffect, useRef, useState } from "react";
import IndividualTeams from "./IndividualTeams";

export default function TeamSection() {

    const [ selectedTeam, setSelectedTeam ] = useState("CO-PRESIDENTS");
    const [ isOpen, setIsOpen ] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const teamData = [
        { section: "CO-PRESIDENTS", members: [...Array(3).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] },
        { section: "DESIGN", members: [...Array(8).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] },
        { section: "WEB DEVELOPMENT", members: [...Array(8).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] },
        { section: "FINANCE", members: [...Array(8).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] },
        { section: "LOGISTICS", members: [...Array(8).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] },
        { section: "MARKETING", members: [...Array(9).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] },
        { section: "SPEAKER SELECTION", members: [...Array(9).fill({ image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" })] }
    ];

    const selectedTeamData = teamData.find(team => team.section === selectedTeam);

    return (
        <div className="flex flex-col items-start w-full mt-[100px] p-[0px_20px_200px] md:p-[0px_40px_200px] lg:p-[0px_100px_200px] xl:p-[0px_200px_200px] gap-[72px] bg-[#080808]">
            <div className="flex flex-row justify-between items-center w-full h-[50px]">
                <h1 className="md:min-w-[352px] font-[500] md:font-[700] text-[28px] md:text-[44px] leading-[34px] md:leading-[50px] tracking-[-0.02em] text-[#FDFCFD] font-favorit">
                    {selectedTeam}
                </h1>

                <div className="flex flex-col relative">
                    <button
                        className={`box-border flex flex-row items-center justify-between px-5 py-2 md:py-3 gap-2 bg-[#403851] rounded-[60px] text-white text-[24px] font-[400] transition-all duration-300 ease-in-out ${
                            isOpen ? "w-[160px] md:w-[290px]" : "w-[133px]"
                        }`}
                        onClick={() => setIsOpen((prev) => !prev)}
                    >
                        <span>Teams</span>
                        <svg
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ minWidth: "16px", minHeight: "16px" }}
                        >
                            <path
                                d="M2 7L12 17L22 7"
                                stroke="white"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                    {isOpen && (
                        <div
                            ref={dropdownRef}
                            className="absolute left-0 top-full mt-2 w-[160px] md:w-[290px] bg-[#343434] rounded-[16px] p-4 shadow-lg transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 scale-100"
                        >
                            <ul className="space-y-2 px-0 md:px-3 py-4">
                                {teamData.map((team, index) => (
                                    <li
                                        key={index}
                                        className="text-[#FDFCFD] text-[12px] md:text-[16px] flex flex-row gap-2 md:gap-3 cursor-pointer hover:text-[#EDEDED]"
                                        onClick={() => {
                                            setSelectedTeam(team.section);
                                            setIsOpen(false);
                                        }}
                                    >
                                        <div>{`0${index + 1}`}</div>
                                        <div>{team.section}</div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
            {selectedTeamData && (
                <IndividualTeams team={selectedTeamData.section} members={selectedTeamData.members} />
            )}
        </div>
    );
}
