import { Anchor } from '../atoms/Anchor';
import { Body, H4 } from '../atoms/Typography';

export interface LinkListProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

export const LinkList = (props: LinkListProps) => {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <H4>{props.title}</H4>
      {props.links.map((link) => (
        <Anchor key={link.title} url={link.url}>
          <Body>{link.title}</Body>
        </Anchor>
      ))}
    </div>
  );
};
