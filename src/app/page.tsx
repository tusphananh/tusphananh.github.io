import Blogs from '@/components/common/blogs';
import { Experiences } from '@/components/common/experiences';
import { MyStacks } from '@/components/common/my-stacks';
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
        text={'Also'}
        textClassName='mx-auto leading-relaxed justify-center'
      />
    </>
  );
}
