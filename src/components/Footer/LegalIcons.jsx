import { 
  InstagramIcon, 
  FacebookIcon, 
  TiktokIcon, 
  LinkedinIcon, 
  EmailIcon 
} from '../common/Icons';

export default function LegalIcons() {
  return (
    <div className='flex flex-row items-center p-0 gap-[24px] w-[256px] h-[32px]'>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <InstagramIcon className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <FacebookIcon className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <TiktokIcon className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <LinkedinIcon className="h-[24px] w-[24px]"/>
        </a>
        <a href='' className='flex flex-col justify-center items-center p-0 gap-0 w-[32px] h-[32px] text-white'>
            <EmailIcon className="h-[24px] w-[24px]"/>
        </a>
        
    </div>
  )
}
