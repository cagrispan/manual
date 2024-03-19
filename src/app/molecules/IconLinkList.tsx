import Image from 'next/image';

import { ExternalAnchor } from '../atoms/Anchor';
import { H4 } from '../atoms/Typography';

export interface IconLinkListProps {
  title: string;
  links: {
    title: string;
    iconSrc: string;
    url: string;
  }[];
}

export const IconLinkList = (props: IconLinkListProps) => {
  return (
    <div className="flex  flex-1 flex-col gap-5">
      <H4>{props.title}</H4>
      <div className="flex gap-5">
        {props.links.map((link) => (
          <ExternalAnchor key={link.title} url={link.url}>
            <div className="w-6 h-6">
              <Image
                alt={link.title}
                src={link.iconSrc}
                height={24}
                width={24}
              />
            </div>
          </ExternalAnchor>
        ))}
      </div>
    </div>
  );
};
