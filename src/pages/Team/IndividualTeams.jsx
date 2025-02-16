import React from "react";
import TeamCard from "./TeamCard";

export default function IndividualTeams({ team, members }) {
    return (
        <div class="flex flex-wrap items-start content-start gap-[40px] w-[1520px] min-h-[666px] flex-none order-0 self-stretch flex-grow-0">
            <div class="flex flex-row justify-between items-center w-full h-[50px]">
                <h1 class="min-w-[352px] h-[50px] font-[700] text-[44px] leading-[50px] tracking-[-0.02em] text-[#FDFCFD] font-favorit">{team}</h1>
                {team == "CO-PRESIDENTS" && (
                    <div class="box-border flex flex-row items-center p-[16px_20px] gap-[8px] w-[133px] h-[49px] bg-[#403851] rounded-[60px] flex-none order-0 flex-grow-0 z-0">
                        <div class=" font-[400] text-[24px] leading-[32px] text-center text-[#FDFCFD]">Teams</div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_921_5913)">
                            <path d="M2 7L12 17L22 7" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_921_5913">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </div>
                )}
            </div>
            <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[1520px] min-h-[576px]">
                {members.map((member, memberIndex) => (
                    <TeamCard 
                        key={memberIndex}
                        image={member.image}
                        name={member.name}
                        major={member.major}
                        role={member.role}
                    />
                ))}
            </div> 
        </div>
    )
}