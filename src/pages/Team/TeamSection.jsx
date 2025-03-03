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
        { 
            section: "CO-PRESIDENTS", 
            members: [
                { name: "Madelyn Lee", role: "Co-President", image: "/team/Team Pics/MadelynLee-compressed -tiny.webp" },
                { name: "Leah Mathew", role: "Co-President", image: "/team/Team Pics/LeahMathew-compressed -tiny.webp" },
                { name: "Aryan Sharma", major: "Computer Science", role: "Co-President", image: "/team/Team Pics/AryanSharma-compressed -tiny.webp" },
            ]
        },
        { 
            section: "DESIGN", 
            members: [
                { name: "Emily Hao", role: "Design Director", image: "/team/Team Pics/EmilyHao-compressed -tiny.webp" },
                { name: "Stephanie Chou", image: "/team/Team Pics/StephanieChou-compressed -tiny.webp" },
                { name: "Chris Sanders", image: "/team/Team Pics/ChrisSanders-compressed -tiny.webp" },
                { name: "Addison Mercado", image: "/team/Team Pics/AddisonMercado-compressed -tiny.webp" },
                { name: "Michelle Nguyen", image: "/team/Team Pics/MichelleNguyen-compressed -tiny.webp" }
            ]
        },
        { 
            section: "WEB DEVELOPMENT", 
            members: [
                { name: "Nathan Daeila", role: "Web Development Co-Director", image: "/team/Team Pics/NathanDaeila-compressed -tiny.webp" },
                { name: "Mehul Chaudhari", role: "Web Development Co-Director", image: "/team/Team Pics/MehulChaudhari-compressed -tiny.webp" },
                { name: "Timothy Hoang", image: "/team/Team Pics/TimothyHoang-compressed -tiny.webp" },
                { name: "Thanh Trinh", image: "/team/Team Pics/ThanhTrinh-compressed -tiny.webp" },
                { name: "Ryan Cho", image: "/team/Team Pics/RyanCho-compressed -tiny.webp" },
                { name: "Sai Sunku", image: "/team/Team Pics/SaiSunku-compressed -tiny.webp" },
            ]
        },
        { 
            section: "FINANCE", 
            members: [
                { name: "Lillian Tran", role: "Finance Director", image: "/team/Team Pics/LillianTran-compressed -tiny.webp" },
                { name: "Kayla Pham", image: "/team/Team Pics/KaylaPham-compressed -tiny.webp" },
                { name: "Ryann Phillips", image: "/team/Team Pics/RyannPhillips-compressed -tiny.webp" },
                { name: "Reva Kulkarni", image: "/team/Team Pics/RevaKulkarni-compressed -tiny.webp" }
            ]
        },
        { 
            section: "LOGISTICS", 
            members: [
                { name: "Simran Kaur", role: "Logistics Co-Director", image: "/team/Team Pics/SimranKaur-compressed -tiny.webp" },
                { name: "Ryan Vu", role: "Logistics Co-Director", image: "/team/Team Pics/RyanVu-compressed -tiny.webp" },
                { name: "Hailey Yuan", image: "/team/Team Pics/HaileyYuan-compressed -tiny.webp" },
                { name: "Grace Townsend", image: "/team/Team Pics/GraceTownsend-compressed -tiny.webp" },
                { name: "Kayla Vo", image: "/team/Team Pics/KaylaVo-compressed -tiny.webp" },
                { name: "Mia McDunnah", image: "/team/Team Pics/MiaMcDunnah-compressed -tiny.webp" },
                { name: "Shubham Garg", image: "/team/Team Pics/ShubhamGarg-compressed -tiny.webp" }
            ]
        },
        { 
            section: "MARKETING", 
            members: [
                { name: "Anya Pan", role: "Marketing Co-Director", image: "/team/Team Pics/AnyaPan-compressed -tiny.webp" },
                { name: "Karen Ensastegui Salazar", role: "Marketing Co-Director", image: "/team/Team Pics/KarenSalazar-compressed -tiny.webp" },
                { name: "Tara Kapur", image: "/team/Team Pics/TaraKapur-compressed -tiny.webp" },
                { name: "Vatsala Choudhary", image: "/team/Team Pics/VatsalaChoudhary-compressed -tiny.webp" },
                { name: "Ally Phan", image: "/team/Team Pics/AllyPhan-compressed -tiny.webp" },
                { name: "Gloria Ramirez- Hernandez", image: "/team/Team Pics/GloriaHernandez-compressed -tiny.webp" },
                { name: "Kitkat Villavicencio", image: "/team/Team Pics/KitkatVillavicencio-compressed -tiny.webp" },
                { name: "Isabella Truong", image: "/team/Team Pics/IsabellaTruong-compressed -tiny.webp" }
            ]
        },
        { 
            section: "SPEAKER SELECTION", 
            members: [
                { name: "Tanishka Anandkumar", role: "Speaker Selection Co-Director", image: "/team/Team Pics/TanishkaAnandkumar-compressed -tiny.webp" },
                { name: "Diya Patel", role: "Speaker Selection Co-Director", image: "/team/Team Pics/DiyaPatel-compressed -tiny.webp" },
                { name: "Hirsh Garhwal", image: "/team/Team Pics/HirshGarhwal-compressed -tiny.webp" },
                { name: "Radhika Kamran", image: "/team/Team Pics/RadhikaKamran-compressed -tiny.webp" },
                { name: "Annissa Tan", image: "/team/Team Pics/AnnissaTan-compressed -tiny.webp" },
                { name: "Sidhant Rauniyar", image: "/team/Team Pics/SidhantRauniyar-compressed -tiny.webp" },
                { name: "Tatiana Miranda", image: "/team/Team Pics/TatianaMiranda-compressed -tiny.webp" },
                { name: "Srimedha Thummala", image: "/team/Team Pics/SrimedhaThummala-compressed -tiny.webp" }
            ]
        }
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
