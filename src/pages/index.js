import Head from 'next/head';
import Reactswiper from '@/components/Reactswiper';
import Reactslick from '@/components/Reactslick';
import Textanimation from '@/components/Textanimation';
import Mapmathode from '@/components/Mapmathode';
import ScrollLineAnimation from '@/components/ScrollLineAnimation';
import Award from '@/components/Award';
import HorizontalAnimation from '@/components/HorizontalAnimation';
import HorizontalprogressAnimation from '@/components/HorizontalprogressAnimation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Common-component</title>
      </Head>
      <Reactswiper />
      <Reactslick />
      <Award />
      <Textanimation />
      <HorizontalAnimation />
      <ScrollLineAnimation />
      <Mapmathode />
      <HorizontalprogressAnimation />
    </>
  )
}
