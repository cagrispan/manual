import { Roboto_Flex } from 'next/font/google';



import { Content } from './organisms/Content';
import { Footer } from './organisms/Footer';
import { Hero } from './organisms/Hero';

const rubik = Roboto_Flex({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${rubik.className}`}>
      <div className="min-w-[400px]">
        <Hero />
        <Content />
        <Footer />
      </div>
    </main>
  );
}
