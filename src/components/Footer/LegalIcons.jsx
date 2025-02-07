import { SiInstagram } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function LegalIcons() {
  return (
    <div className='flex flex-row items-center p-0 gap-[24px] w-[256px] h-[32px]'>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <SiInstagram className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <FaFacebookF className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <FaTiktok className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <FaLinkedinIn className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <MdOutlineMail className="h-[24px] w-[24px]"/>
        </a>
        
    </div>
  )
}
