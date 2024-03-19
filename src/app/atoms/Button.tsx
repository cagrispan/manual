import { ReactNode } from 'react';

import { H4 } from './Typography';

export interface ButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const classes = [
    "text-white",
    "px-8",
    "py-4",
    "w-fit",
    props.disabled ? "cursor-not-allowed" : "cursor-pointer",
    props.className,
  ].join(" ");

  const onClick = !props.disabled ? props.onClick : () => null;

  return (
    <div className={classes} onClick={onClick}>
      <H4 className="text-white">{props.children}</H4>
    </div>
  );
};
