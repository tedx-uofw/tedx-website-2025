import React, { useEffect, useRef, useState } from "react";
import IndividualTeams from "./IndividualTeams";
import { Helmet } from "react-helmet";

export default function TeamSection() {
    const [ selectedTeam, setSelectedTeam ] = useState(null);
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
                { name: "Michelle Nguyen", image: "/team/Team Pics/MichelleNguyen-compressed -tiny.webp" },
                { name: "Cleo Williams", image: "/team/Team Pics/CleoWilliams-compressed -tiny.webp" },
                { name: "Ronan Pitzel", image: "/team/Team Pics/RonanPitzel-compressed -tiny.webp" }

            ]
        },
        { 
            section: "WEB DEVELOPMENT", 
            members: [
                { name: "Nathan Daeila", role: "Web Development Co-Director", image: "/team/Team Pics/NathanDaeila-compressed -tiny.webp" },
                { name: "Mehul Chaudhari", role: "Web Development Co-Director", image: "/team/Team Pics/MehulChaudhari-compressed -tiny.webp" },
                { name: "Timothy Hoang", image: "/team/Team Pics/TimothyHoang-compressed -tiny2.webp" },
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

    const selectedTeamData = selectedTeam ? teamData.find(team => team.section === selectedTeam) : null;
    const pageTitle = selectedTeam 
        ? `${selectedTeam} Team - TEDx UofW | University of Washington TEDx` 
        : "Our Team - TEDx UofW | University of Washington TEDx 2025";
    const pageDescription = selectedTeam 
        ? `Meet the ${selectedTeam} team members at TEDx UofW (University of Washington TEDx) who help organize the TEDx 2025 event.` 
        : "Meet the dedicated team behind TEDx UofW (University of Washington TEDx) who organize TEDx 2025, bringing ideas worth spreading to UW Seattle.";

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://resonance.tedxatuofw.com/team" />
                <meta name="twitter:title" content={pageTitle} />
                <meta name="twitter:description" content={pageDescription} />
                <meta name="keywords" content="TEDx UofW team, University of Washington TEDx organizers, TEDx 2025 committee, UW TEDx team, TEDx Seattle organizers, TEDx University of Washington staff, TEDx organization, TEDx volunteers" />
            </Helmet>
            
            <section 
                className="flex flex-col items-start w-full mt-[100px] p-[0px_20px_200px] md:p-[0px_40px_200px] lg:p-[0px_100px_200px] xl:p-[0px_100px_200px] gap-[72px] bg-[#080808]"
                itemScope 
                itemType="https://schema.org/Organization"
            >
                <meta itemProp="name" content="TEDx UofW" />
                <meta itemProp="alternateName" content="University of Washington TEDx" />
                <meta itemProp="alternateName" content="TEDxUofW" />
                <meta itemProp="alternateName" content="UW TEDx" />
                <meta itemProp="description" content="TEDx UofW brings together bright minds to give idea-focused talks on the University of Washington campus for TEDx 2025: Resonance." />
                <meta itemProp="url" content="https://resonance.tedxatuofw.com" />
                
                <header className="flex flex-row justify-between items-center w-full h-[50px]">
                    <h1 className="md:min-w-[352px] font-[500] md:font-[700] text-[28px] md:text-[44px] leading-[34px] md:leading-[50px] tracking-[-0.02em] text-[#FDFCFD] font-favorit">
                        {selectedTeam || "Teams at TEDxUofW"}
                    </h1>

                    <div className="flex flex-col relative">
                        <button
                        className="box-border flex flex-row items-center justify-between px-5 py-2 md:py-3 gap-2 bg-[#403851] rounded-[60px] text-white text-[16px] md:text-[24px] font-[400] transition-all duration-300 ease-in-out overflow-hidden min-w-max"
                        onClick={() => setIsOpen((prev) => !prev)}
                            aria-haspopup="true"
                            aria-expanded={isOpen}
                            aria-controls="team-dropdown"
                        >
                            <span className="truncate block max-w-[70px] md:max-w-[260px] overflow-hidden">{selectedTeam || "ALL TEAMS"}</span>
                            <svg
                                className="w-4 h-4"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ minWidth: "16px", minHeight: "16px" }}
                                aria-hidden="true"
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
                            <nav
                                id="team-dropdown"
                                ref={dropdownRef}
                                className="absolute left-0 top-full mt-2 w-[160px] md:w-[290px] bg-[#343434] rounded-[16px] p-4 shadow-lg transition-all duration-300 ease-in-out transform opacity-100 translate-y-0 scale-100"
                                aria-label="Team selection"
                            >
                                <ul className="space-y-2 px-0 md:px-3 py-4" role="menu">
                                    <li
                                        className={`text-[#FDFCFD] text-[12px] md:text-[16px] flex flex-row gap-2 md:gap-3 cursor-pointer hover:text-[#EDEDED] ${!selectedTeam ? 'font-bold' : ''}`}
                                        onClick={() => {
                                            setSelectedTeam(null);
                                            setIsOpen(false);
                                        }}
                                        role="menuitem"
                                    >
                                        <div>00</div>
                                        <div>ALL TEAMS</div>
                                    </li>
                                    {teamData.map((team, index) => (
                                        <li
                                            key={index}
                                            className={`text-[#FDFCFD] text-[12px] md:text-[16px] flex flex-row gap-2 md:gap-3 cursor-pointer hover:text-[#EDEDED] ${selectedTeam === team.section ? 'font-bold' : ''}`}
                                            onClick={() => {
                                                setSelectedTeam(team.section);
                                                setIsOpen(false);
                                            }}
                                            role="menuitem"
                                        >
                                            <div>{`0${index + 1}`}</div>
                                            <div>{team.section}</div>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        )}
                    </div>
                </header>
                
                <div className="team-content w-full">
                    {selectedTeamData ? (
                        <section aria-labelledby={`team-section-${selectedTeamData.section}`} itemScope itemType="https://schema.org/OrganizationRole">
                            <meta itemProp="roleName" content={selectedTeamData.section} />
                            <meta itemProp="parentOrganization" content="TEDx UofW" />
                            <h2 id={`team-section-${selectedTeamData.section}`} className="sr-only">{selectedTeamData.section} Team at University of Washington TEDx</h2>
                            <IndividualTeams team={selectedTeamData.section} members={selectedTeamData.members} />
                        </section>
                    ) : (
                        teamData.map((team, index) => (
                            <section key={index} className="w-full mb-12" aria-labelledby={`team-section-${team.section}`} itemProp="department" itemScope itemType="https://schema.org/OrganizationRole">
                                <meta itemProp="roleName" content={team.section} />
                                <meta itemProp="parentOrganization" content="TEDx UofW" />
                                <meta itemProp="description" content={`${team.section} team at University of Washington TEDx 2025 event.`} />
                                <h2 id={`team-section-${team.section}`} className="text-[#FDFCFD] text-[24px] md:text-[32px] font-[500] mb-8">{team.section}</h2>
                                <IndividualTeams team={team.section} members={team.members} />
                            </section>
                        ))
                    )}
                </div>
            </section>
        </>
    );
}
