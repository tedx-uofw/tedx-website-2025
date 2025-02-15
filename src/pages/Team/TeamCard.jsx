import React from "react";

export default function TeamCard({ image, name, major, role }) {
    return (
        <div class="flex flex-row flex-wrap items-start content-start p-0 gap-[40px] w-[740px] h-[268px] flex-none order-0 self-stretch flex-grow-0">
            <img class="w-[268px] h-[268px] flex-none order-0 flex-grow-0 object-cover" src={image} alt="image"/>
            <div class="flex flex-col items-start gap-[20px] w-[166px] h-[110px] flex-none order-1 flex-grow-0">
                <div class="flex flex-col items-start gap-[4px]">
                    <div class="flex items-center text-[28px] leading-[34px] font-normal tracking-[-0.01em] text-[#FDFCFD]">{name}</div>
                    <div class="text-[16px] leading-[20px] font-normal tracking-[-0.01em] text-[#B1A8B3] font-favorit-mono">{major}</div>
                </div>
                <div class="box-border flex flex-row justify-center items-center px-3 py-1.5 w-[166px] h-[32px] border border-[#5E5469] rounded-[20px] flex-none order-1 flex-grow-0 text-[#FDFCFD] tracking-wider">
                <div class="w-[142px] h-[20px] font-[400] text-[16px] leading-[20px] tracking-[-0.01em] text-[#FDFCFD] font-favorit-mono flex-none order-0 flex-grow-0">
                    {role}
                </div>
                </div>
            </div>
        </div>
    )
}
