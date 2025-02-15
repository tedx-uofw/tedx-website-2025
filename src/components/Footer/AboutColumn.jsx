import React from 'react'

export default function AboutColumn() {
  return (
    <div className="flex flex-col items-end p-0 gap-[12px] w-[93px] h-[87px]">
        <div className="flex flex-col items-start px-[8px] py-0 gap-[10px] w-[93px] h-[13px]">
            <div className="w-[63px] h-[13px] 
                font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                text-[#FDFCFD]">
                    ABOUT
            </div>
        </div>

        <div className="flex flex-col items-start p-0 gap-[4px] w-[93px] h-[62px]">
            <div className="flex flex-row justify-center items-center p-[8px] gap-[4px] w-[93px] h-[29px]">
                <div className="w-[77px] h-[13px] 
                    font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                text-[#FDFCFD]">
                    About Us
                </div>
            </div>
            <div className="flex flex-row justify-center items-center p-[8px] gap-[4px] w-[61px] h-[29px]">
                <div className="w-[45px] h-[13px] 
                    font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                text-[#FDFCFD]">
                    Team
                </div>
            </div>
        </div>
</div>
  )
}
