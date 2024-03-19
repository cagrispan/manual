import Image from 'next/image';

import logo from '../../../public/images/manual.png';
import { Section } from '../atoms/Section';
import { BodyLg, H1 } from '../atoms/Typography';
import { Quiz } from './Quiz';

export const Hero = () => {
  return (
    <Section className="bg-hero bg-cover bg-center">
      <div className="w-10 md:ml-12 lg:ml-16 xl:ml-24">
        <Image src={logo} alt="Manual logo" />
      </div>
      <div className="pt-8 md:p-12 lg:p-16 xl:p-24">
        <H1>Be good</H1>
        <H1>to yourself</H1>
        <BodyLg className="w-1/2 lg:w-1/3 mt-5">
          We’re working around the clock to bring you a holistic approach to
          your wellness. From top to bottom, inside and out.
        </BodyLg>
        <Quiz />
      </div>
    </Section>
  );
};
