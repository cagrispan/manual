import React, { ReactNode } from 'react';

export interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export const H1 = (props: TypographyProps) => {
  const classes = [
    "text-6xl",
    "lg:text-7xl",
    "xl:text-8xl",
    "leading-none",
    "tracking-tight",
    "text-dark-green",
    props.className,
  ].join(" ");

  return <h1 className={classes}>{props.children}</h1>;
};

export const H2 = (props: TypographyProps) => {
  const classes = [
    "text-4xl",
    "lg:text-5xl",
    "tracking-tight",
    "text-dark-green",
    props.className,
  ].join(" ");

  return <h2 className={classes}>{props.children}</h2>;
};

export const H3 = (props: TypographyProps) => {
  const classes = [
    "text-2xl",
    "lg:text-3xl",
    "tracking-tight",
    "text-dark-green",
    props.className,
  ].join(" ");

  return <h3 className={classes}>{props.children}</h3>;
};

export const H4 = (props: TypographyProps) => {
  const classes = [
    "text-xs",
    "tracking-widest",
    "uppercase",
    "text-dark-green",
    "font-bold",
    props.className,
  ].join(" ");
  return <h4 className={classes}>{props.children}</h4>;
};

export const BodyLg = (props: TypographyProps) => {
  const classes = ["text-lg", "text-dark-green", props.className].join(" ");
  return <p className={classes}>{props.children}</p>;
};

export const Body = (props: TypographyProps) => {
  const classes = ["text-dark-green", props.className].join(" ");
  return <p className={classes}>{props.children}</p>;
};

export const Number = (props: TypographyProps) => {
  const classes = ["leading-none", "text-light-green", props.className].join(
    " "
  );
  return <p className={classes}>{props.children}</p>;
};
