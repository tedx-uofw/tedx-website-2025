import SpeakerCardIMG from './SpeakerCardIMG';
import SpeakerCardMiddle from './SpeakerCardMiddle';

export default function SpeakerCardLeft({name, title, talkName, image, linkedin, email}) {
  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full sm:w-[500px] md:w-[600px] lg:w-[740px]">
      <SpeakerCardIMG image={image}/>
      <SpeakerCardMiddle title={title} name={name} talkName={talkName} linkedin={linkedin} email={email}/>
    </div>
  )
}
