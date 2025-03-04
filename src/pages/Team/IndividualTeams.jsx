import React from "react";
import TeamCard from "./TeamCard";

export default function IndividualTeams({ team, members }) {
    const teamId = team.toLowerCase().replace(/\s+/g, '-');
    const teamDescription = `${team} team members at TEDx UofW (University of Washington TEDx) for the 2025 Resonance event`;
    
    return (
        <div className="flex flex-wrap items-start content-start gap-[40px] w-full flex-none order-0 self-stretch flex-grow-0" 
            id={`team-${teamId}`}
            aria-label={teamDescription}
            itemScope 
            itemType="https://schema.org/OrganizationRole"
        >
            <meta itemProp="name" content={`${team} Team`} />
            <meta itemProp="roleName" content={team} />
            <meta itemProp="description" content={teamDescription} />
            <meta itemProp="parentOrganization" content="TEDx UofW" />
            <meta itemProp="parentOrganization" content="University of Washington TEDx" />
            <meta itemProp="event" content="TEDx 2025: Resonance" />
            
            <ul className="flex flex-col md:flex-row flex-wrap items-start content-start gap-y-[20px] md:gap-y-[30px] lg:gap-y-[40px] p-0 w-full list-none m-0">
                {members.length > 0 ? (
                    members.map((member, memberIndex) => (
                        <li key={memberIndex} className="w-1/2 mb-8" itemProp="member">
                            <TeamCard image={member.image} name={member.name} major={member.major} role={member.role} />
                        </li>
                    ))
                ) : (
                    <li className="w-full">
                        <p className="text-white text-2xl">No members found for {team} team at TEDx University of Washington.</p>
                    </li>
                )}
            </ul> 
        </div>
    );
}
