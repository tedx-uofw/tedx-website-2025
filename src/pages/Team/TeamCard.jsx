import React from "react";

export default function TeamCard({ image, name, major, role }) {
    // Create a descriptive alt text for the image
    const altText = `${name}${role ? `, ${role}` : ''}${major ? ` - ${major}` : ''} at TEDxUofW`;
    
    return (
        <article className="flex flex-row items-start content-start p-0 gap-[16px] md:gap-[20px] lg:gap-[40px] w-1/2 flex-none order-0 self-stretch flex-grow-0" itemScope itemType="https://schema.org/Person">
            <img 
                className="lg:w-[268px] lg:h-[268px] w-[160px] h-[160px] flex-none order-0 flex-grow-0 object-cover" 
                src={image} 
                alt={altText}
                loading="lazy"
                itemProp="image"
            />
            <div className="flex flex-col items-start gap-[25px] md:gap-[8px] lg:gap-[20px] w-[184px] md:w-[158px] lg:w-[300px] flex-none order-1 flex-grow-0">
                <div className="flex flex-col items-start gap-[4px]">
                    <h3 className="flex items-center text-[24px] lg:text-[28px] leading-[24px] lg:leading-[34px] font-normal tracking-[-0.01em] text-[#FDFCFD]" itemProp="name">{name}</h3>
                    {major && (
                        <p className="text-[12px] lg:text-[16px] leading-[16px] lg:leading-[20px] font-normal tracking-[-0.01em] text-[#B1A8B3] font-favorit-mono" itemProp="description">{major}</p>
                    )}
                </div>
                {role && (
                    <div className="box-border flex flex-row justify-center items-center px-[12px] py-[6px] lg:px-3 lg:py-1.5 border border-[#5E5469] rounded-[20px] flex-none order-1 flex-grow-0 text-[#FDFCFD] tracking-wider">
                        <p className="font-[400] text-[12px] lg:text-[16px] leading-[16px] lg:leading-[20px] tracking-[-0.01em] text-[#FDFCFD] font-favorit-mono w-full text-center" itemProp="jobTitle">
                            {role}
                        </p>
                    </div>
                )}
                <meta itemProp="affiliation" content="TEDxUofW" />
                <meta itemProp="worksFor" content="TEDxUofW" />
            </div>
        </article>
    )
}

