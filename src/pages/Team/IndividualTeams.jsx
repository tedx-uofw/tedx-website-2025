import React from "react";
import TeamCard from "./TeamCard";

export default function IndividualTeams({ team, members }) {
    return (
        <div className="flex flex-wrap items-start content-start gap-[40px] w-full flex-none order-0 self-stretch flex-grow-0">
            <div className="flex flex-row flex-wrap items-start content-start gap-y-[40px] p-0 w-full">
                {members.length > 0 ? (
                    members.map((member, memberIndex) => (
                        <TeamCard key={memberIndex} image={member.image} name={member.name} major={member.major} role={member.role} />
                    ))
                ) : (
                    <p className="text-white text-2xl">No members found for {team}.</p>
                )}
            </div> 
        </div>
    );
}
