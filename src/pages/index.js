import Head from 'next/head';
import Reactswiper from '@/components/Reactswiper';
import Reactslick from '@/components/Reactslick';
import Textanimation from '@/components/Textanimation';
import Mapmathode from '@/components/Mapmathode';
import ScrollLineAnimation from '@/components/ScrollLineAnimation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Common-component</title>
      </Head>
      <Reactswiper />
      <Reactslick />
      <Textanimation />
      <ScrollLineAnimation />
      <Mapmathode />
    </>
  )
}
