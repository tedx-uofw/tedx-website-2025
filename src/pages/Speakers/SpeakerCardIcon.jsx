import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
export default function SpeakerCardIcon({linkedin, email}) {
  return (
    <div className='flex flex-row items-end p-0 gap-[20px] mx-auto w-[400px] h-[24px]'>
        <a className='flex flex-col justify-center p-0 gap-0 w-[30px] h-[30px] text-white' href={email}>
            <HiOutlineMail className="w-full h-full"/>
        </a>
        
        <a className='flex flex-col justify-center p-0 gap-0 w-[30px] h-[30px] text-white' href={linkedin}>
            <FaLinkedinIn className="w-full h-full"/>
        </a>
    </div>
  )
}
