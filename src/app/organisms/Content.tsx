import { Section } from '../atoms/Section';
import { H2 } from '../atoms/Typography';
import contentBoxData from '../data/contentBoxData.json';
import { ContentBox } from '../molecules/ContentBox';

export const Content = () => {
  return (
    <Section className="flex flex-col gap-12 lg:gap-16 mt-4">
      <H2 className="m-auto text-center">What we can help with</H2>
      {contentBoxData.map((item, index) => (
        <ContentBox key={item.index} data={item} reverse={!!(index % 2)} />
      ))}
    </Section>
  );
};
