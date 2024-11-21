import Blogs from '@/components/common/blogs';
import { Experiences } from '@/components/common/experiences';
import { MyStacks } from '@/components/common/my-stacks';
import Travel from '@/components/common/travel';
import HeroVideoDialog from '@/components/ui/hero-video-dialog';
import TextReveal from '@/components/ui/text-reveal';

export default function Component() {
  return (
    <>
      <TextReveal text={'👋 Hello'} textClassName='mx-auto leading-relaxed' />
      <TextReveal
        text={'I am \n Tu Phan'}
        textClassName='mx-auto leading-relaxed justify-center'
      />
      <TextReveal
        text={'Software \n Engineer \n 👨‍💻'}
        textClassName='mx-auto leading-relaxed justify-center'
      />
      <TextReveal
        text={'My Stacks'}
        textClassName='mx-auto leading-relaxed justify-center'
      />

      <MyStacks />

      <TextReveal
        text={'EXP'}
        textClassName='mx-auto leading-relaxed justify-center'
      />

      <Experiences />

      <TextReveal
        text={'Blogs'}
        textClassName='mx-auto leading-relaxed justify-center'
      />

      <Blogs />

      <TextReveal
        text={'Travel 🚌'}
        textClassName='mx-auto leading-relaxed justify-center'
      />

      <Travel />

      <TextReveal
        text={'Making \n Videos 📺'}
        textClassName='mx-auto leading-relaxed justify-center'
      />

      <div className='flex flex-col gap-8 p-16'>
        <HeroVideoDialog
          topText='Diep Son'
          bottomText='2020'
          className='block'
          animationStyle='from-center'
          videoSrc='https://www.youtube.com/embed/T3FagRLcJ54?si=2DIKK6KUHGlNIOWa'
          thumbnailSrc='https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public'
          thumbnailAlt='Diep Son'
        />

        <HeroVideoDialog
          topText='Diep Son'
          bottomText='2020'
          className='block'
          animationStyle='from-center'
          videoSrc='https://www.youtube.com/embed/T3FagRLcJ54?si=2DIKK6KUHGlNIOWa'
          thumbnailSrc='https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public'
          thumbnailAlt='Diep Son'
        />

        <HeroVideoDialog
          topText='Diep Son'
          bottomText='2020'
          className='block'
          animationStyle='from-center'
          videoSrc='https://www.youtube.com/embed/T3FagRLcJ54?si=2DIKK6KUHGlNIOWa'
          thumbnailSrc='https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public'
          thumbnailAlt='Diep Son'
        />
      </div>

      <TextReveal
        text={'Thank you'}
        textClassName='mx-auto leading-relaxed justify-center'
      />
    </>
  );
}
