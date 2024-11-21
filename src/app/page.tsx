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

      <div className='mx-auto flex max-w-screen-lg flex-col gap-16 px-4 py-16'>
        <HeroVideoDialog
          topText='Thailand'
          bottomText='Rush and Relax'
          className='block'
          animationStyle='from-center'
          videoSrc='https://www.youtube.com/embed/46KCgJBUUsA?si=GMJwNQrDlcF8qnMV'
          thumbnailSrc='https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/40c6b0ea-b0ca-4f53-5df6-4343fbfbbd00/public'
          thumbnailAlt='Rush and Relax'
        />

        <HeroVideoDialog
          topText='Diep Son'
          bottomText='Two sides of sea'
          className='block'
          animationStyle='from-center'
          videoSrc='https://www.youtube.com/embed/T3FagRLcJ54?si=2DIKK6KUHGlNIOWa'
          thumbnailSrc='https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/2b98fc7e-7040-43ce-82e1-acff00badc00/public'
          thumbnailAlt='Diep Son'
        />

        <HeroVideoDialog
          topText='Buon Ma Thuot'
          bottomText='Into the Wild'
          className='block'
          animationStyle='from-center'
          videoSrc='https://www.youtube.com/embed/QupEcfMG-5k?si=grtAaOvrafn4TjHq'
          thumbnailSrc='https://imagedelivery.net/4yK5HBtoBLElo88KvPkiIA/7f30018f-3d6f-4d77-3e33-b1c093127200/public'
          thumbnailAlt='Into the Wild'
        />
      </div>

      <TextReveal
        text={'Thank you'}
        textClassName='mx-auto leading-relaxed justify-center'
      />
    </>
  );
}
