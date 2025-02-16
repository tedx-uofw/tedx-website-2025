import React from "react";
import IndividualTeams from "./IndividualTeams";

export default function TeamSection() {

    const teamData = [
        {
            section: "CO-PRESIDENTS",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        },
        {
            section: "DESIGN",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        },
        {
            section: "WEV DEVELOPMENT",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        },
        {
            section: "FINANCE",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        },
        {
            section: "LOGISTICS",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        },
        {
            section: "MARKETING",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        },
        {
            section: "SPEAKER SELECTION",
            members: [
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" },
                { image: "/team/model.jpeg", name: "Eddy Peng", major: "Informatics", role: "Design Director" }
            ]
        }
    ];
    

    return (
        <div class="flex flex-col items-start p-[100px_200px_200px] gap-[100px] w-full min-h-screen left-0 top-[1000px]
    bg-[#080808]">
            {teamData.map((data, index) => (
                <IndividualTeams 
                    key={index}
                    team={data.section}
                    members={data.members}
                />
            ))}
        </div>
    )
}
