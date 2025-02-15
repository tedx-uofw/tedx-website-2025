import SpeakerCardIMG from './SpeakerCardIMG';
import SpeakerCardMiddle from './SpeakerCardMiddle';
export default function SpeakerCardLeft({name, title, image, linkedin, email}) {
  return (
    <div className="flex items-center p-0 gap-10 w-[740px] h-[268px]">
    <SpeakerCardIMG image={image}/>
    <SpeakerCardMiddle title={title} name={name} linkedin={linkedin} email={email}/>
              
</div>
  )
}
