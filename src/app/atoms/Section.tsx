import { ReactNode } from 'react';

export interface SectionProps {
  className?: string;
  children: ReactNode;
}

export const Section = (props: SectionProps) => {
  const classes = [
    "relative",
    "p-8",
    "md:px-12",
    "md:py-6",
    "lg:px-24",
    "lg:py-12",
    "xl:px-32",
    "xl:py-16",
    props.className,
  ].join(" ");

  return <section className={classes}>{props.children}</section>;
};
