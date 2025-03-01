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
                { name: "Leah Mathew", major: "", role: "Co-President", image: "/team/Team Pics/LeahMathew-compressed -tiny.webp" },
                { name: "Aryan Sharma", major: "Computer Science", role: "Co-President", image: "/team/Team Pics/AryanSharma-compressed -tiny.webp" },
                { name: "Madelyn Lee", major: "Informatics", role: "Co-President", image: "/team/Team Pics/MadelynLee-compressed -tiny.webp" }
            ]
        },
        { 
            section: "DESIGN", 
            members: [
                { name: "Emily Hao", major: "Design & Informatics", role: "Design Director", image: "/team/Team Pics/EmilyHao-compressed -tiny.webp" },
                { name: "Stephanie Chou", major: "Interaction Design", role: "Design", image: "/team/Team Pics/StephanieChou-compressed -tiny.webp" },
                { name: "Chris Sanders", major: "HCDE", role: "Design", image: "/team/Team Pics/ChrisSanders-compressed -tiny.webp" },
                { name: "Addison Mercado", major: "Informatics", role: "Design", image: "/team/Team Pics/AddisonMercado-compressed -tiny.webp" },
                { name: "Michelle Nguyen", major: "HCDE", role: "Design", image: "/team/Team Pics/MichelleNguyen-compressed -tiny.webp" }
            ]
        },
        { 
            section: "WEB DEVELOPMENT", 
            members: [
                { name: "Nathan Daeila", major: "Informatics", role: "Web Development Co-Director", image: "/team/Team Pics/NathanDaeila-compressed -tiny.webp" },
                { name: "Mehul Chaudhari", major: "Computer Science", role: "Web Development Co-Director", image: "/team/Team Pics/MehulChaudhari-compressed -tiny.webp" },
                { name: "Ryan Cho", major: "Computer Science", role: "Web Development", image: "/team/Team Pics/RyanCho-compressed -tiny.webp" },
                { name: "Sai Sunku", major: "Computer Science", role: "Web Development", image: "/team/Team Pics/SaiSunku-compressed -tiny.webp" },
                { name: "Timothy Hoang", major: "Computer Science", role: "Web Development", image: "/team/Team Pics/TimothyHoang-compressed -tiny.webp" },
                { name: "Thanh Trinh", major: "Computer Science", role: "Web Development", image: "/team/Team Pics/ThanhTrinh-compressed -tiny.webp" },
            ]
        },
        { 
            section: "FINANCE", 
            members: [
                { name: "Lillian Tran", major: "Accounting", role: "Finance Director", image: "/team/Team Pics/LillianTran-compressed -tiny.webp" },
                { name: "Kayla Pham", major: "Marketing", role: "Finance", image: "/team/Team Pics/KaylaPham-compressed -tiny.webp" },
                { name: "Ryann Phillips", major: "Business Administration", role: "Finance", image: "/team/Team Pics/RyannPhillips-compressed -tiny.webp" },
                { name: "Reva Kulkarni", major: "Business Administration", role: "Finance", image: "/team/Team Pics/RevaKulkarni-compressed -tiny.webp" }
            ]
        },
        { 
            section: "LOGISTICS", 
            members: [
                { name: "Simran Kaur", major: "Informatics", role: "Logistics Co-Director", image: "/team/Team Pics/SimranKaur-compressed -tiny.webp" },
                { name: "Ryan Vu", major: "Computer Science & Informatics", role: "Logistics Co-Director", image: "/team/Team Pics/RyanVu-compressed -tiny.webp" },
                { name: "Hailey Yuan", major: "", role: "Logistics", image: "/team/Team Pics/HaileyYuan-compressed -tiny.webp" },
                { name: "Grace Townsend", major: "Finance & Marketing", role: "Logistics", image: "/team/Team Pics/GraceTownsend-compressed -tiny.webp" },
                { name: "Kayla Vo", major: "Business", role: "Logistics", image: "/team/Team Pics/KaylaVo-compressed -tiny.webp" },
                { name: "Mia McDunnah", major: "Informatics", role: "Logistics", image: "/team/Team Pics/MiaMcDunnah-compressed -tiny.webp" },
                    { name: "Shubham Garg", major: "Business Administration", role: "Logistics", image: "/team/Team Pics/ShubhamGarg-compressed -tiny.webp" }
            ]
        },
        { 
            section: "MARKETING", 
            members: [
                { name: "Anya Pan", major: "Business Administration", role: "Marketing Co-Director", image: "/team/Team Pics/AnyaPan-compressed -tiny.webp" },
                { name: "Karen Ensastegui Salazar", major: "Marketing", role: "Marketing Co-Director", image: "/team/Team Pics/KarenSalazar-compressed -tiny.webp" },
                { name: "Tara Kapur", major: "Marketing & Psychology", role: "Marketing", image: "/team/Team Pics/TaraKapur-compressed -tiny.webp" },
                { name: "Vatsala Choudhary", major: "Business Administration", role: "Marketing", image: "/team/Team Pics/VatsalaChoudhary-compressed -tiny.webp" },
                { name: "Ally Phan", major: "Marketing", role: "Marketing", image: "/team/Team Pics/AllyPhan-compressed -tiny.webp" },
                { name: "Gloria Ramirez- Hernandez", major: "Business Administration", role: "Marketing", image: "/team/Team Pics/GloriaHernandez-compressed -tiny.webp" },
                { name: "Kitkat Villavicencio", major: "Informatics & Psychology", role: "Marketing", image: "/team/Team Pics/KitkatVillavicencio-compressed -tiny.webp" },
                { name: "Isabella Truong", major: "Business Administration", role: "Marketing", image: "/team/Team Pics/IsabellaTruong-compressed -tiny.webp" }
            ]
        },
        { 
            section: "SPEAKER SELECTION", 
            members: [
                { name: "Tanishka Anandkumar", major: "Engineering", role: "Speaker Selection Co-Director", image: "/team/Team Pics/TanishkaAnandkumar-compressed -tiny.webp" },
                { name: "Diya Patel", major: "", role: "Speaker Selection Co-Director", image: "/team/Team Pics/DiyaPatel-compressed -tiny.webp" },
                { name: "Hirsh Garhwal", major: "", role: "Speaker Selection", image: "/team/Team Pics/HirshGarhwal-compressed -tiny.webp" },
                { name: "Radhika Kamran", major: "", role: "Speaker Selection", image: "/team/Team Pics/RadhikaKamran-compressed -tiny.webp" },
                { name: "Annissa Tan", major: "", role: "Speaker Selection", image: "/team/Team Pics/AnnissaTan-compressed -tiny.webp" },
                { name: "Sidhant Rauniyar", major: "Physiology", role: "Speaker Selection", image: "/team/Team Pics/SidhantRauniyar-compressed -tiny.webp" },
                { name: "Tatiana Miranda", major: "Hispanic Studies", role: "Speaker Selection", image: "/team/Team Pics/TatianaMiranda-compressed -tiny.webp" },
                { name: "Srimedha Thummala", major: "Computer Science", role: "Speaker Selection", image: "/team/Team Pics/SrimedhaThummala-compressed -tiny.webp" }
            ]
        }
    ];

    const selectedTeamData = teamData.find(team => team.section === selectedTeam);

    return (
        <div className="flex flex-col items-start w-full mt-[100px] p-[0px_100px_200px] xl:p-[0px_200px_200px] gap-[72px] bg-[#080808]">
            <div className="flex flex-row justify-between items-center w-full h-[50px]">
                <h1 className="min-w-[352px] h-[50px] font-[700] text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] font-favorit">
                    {selectedTeam}
                </h1>

                <div className="flex flex-col relative">
                    <button
                        className={`box-border flex flex-row items-center justify-between px-5 py-3 gap-2 bg-[#403851] rounded-[60px] text-white text-[24px] font-[400] transition-all duration-300 ease-in-out ${
                            isOpen ? "w-[290px]" : "w-[133px]"
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
                            className="absolute left-0 top-full mt-2 w-[290px] bg-[#343434] rounded-[16px] p-4 shadow-lg transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 scale-100"
                        >
                            <ul className="space-y-2 px-3 py-4">
                                {teamData.map((team, index) => (
                                    <li
                                        key={index}
                                        className="text-[#FDFCFD] text-[16px] flex flex-row gap-3 cursor-pointer hover:text-[#EDEDED]"
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
