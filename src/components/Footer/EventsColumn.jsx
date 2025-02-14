import React from 'react'

export default function EventsColumn() {
  return (
    <div className="flex flex-col items-start p-0 gap-[12px] w-[94px] h-[120px]">
                  <div className="flex flex-col items-start px-[8px] py-0 gap-[10px] w-[94px] h-[13px]">
                    <div className="w-[61px] h-[13px] 
                        font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                      text-[#FDFCFD]">
                          EVENTS
                    </div>
                  </div>
                  <div className="flex flex-col items-start p-0 gap-[4px] w-[94px] h-[95px]">
                    <a className="flex flex-row justify-center items-center p-[8px] gap-[4px] w-[66px] h-[29px]" href='/'>
                      <div className="w-[61px] h-[13px] 
                          font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                        text-[#FDFCFD]">
                            Home
                      </div>
                    </a>
                    <a className="flex flex-row justify-center items-center pl-3.5 gap-[4px] w-[66px] h-[29px]" href='/speakers'>
                      <div className="w-[61px] h-[13px] 
                          font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                        text-[#FDFCFD]">
                            Speakers
                      </div>
                    </a>
                    <a className="flex flex-row justify-center items-center pl-3.5 gap-[4px] w-[66px] h-[29px]" href='/sponsors'>
                      <div className="w-[61px] h-[13px] 
                          font-['ABC_Favorit_Variable_Edu'] font-normal text-[18px] leading-[22px] text-center 
                        text-[#FDFCFD]">
                            Sponsors
                      </div>
                    </a>
                  </div>
              </div>
  )
}
