import { LinkedinIcon, EmailIcon } from "../../components/common/Icons";

export default function SpeakerCardIcon({linkedin, email}) {
  return (
    <div className='flex flex-row items-end p-0 gap-[20px]'>
        {email && <a className='flex flex-col justify-left p-0 gap-0 w-[30px] h-[30px] text-white' href={email}>
            <EmailIcon className="w-full h-full"/>
        </a>}
        
        {linkedin && <a className='flex flex-col justify-center p-0 gap-0 w-[30px] h-[30px] text-white' href={linkedin}>
            <LinkedinIcon className="w-full h-full"/>
        </a>}
    </div>
  )
}
