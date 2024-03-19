import Link from 'next/link';
import { ReactNode } from 'react';

export interface AnchorProps {
  url: string;
  children?: ReactNode;
  className?: string;
}
export const Anchor = (props: AnchorProps) => {
  const classes = ["no-underline", "hover:underline", props.className].join(
    " "
  );
  return (
    <Link href={props.url} className={classes}>
      {props.children}
    </Link>
  );
};

export const ExternalAnchor = (props: AnchorProps) => {
  const classes = ["no-underline", "hover:underline", props.className].join(
    " "
  );
  return (
    <a href={props.url} className={classes}>
      {props.children}
    </a>
  );
};
