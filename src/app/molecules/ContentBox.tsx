import { BodyLg, H3, H4, Number } from '@/app/atoms/Typography';

export interface ContentBoxData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  index: string;
}

export interface ContentBoxProps {
  data: ContentBoxData;
  reverse?: boolean;
}

export const ContentBox = (props: ContentBoxProps) => {
  const { title, subtitle, description, image, index } = props.data;

  const flex = [
    "relative",
    "flex",
    "flex-col",
    props.reverse ? "lg:flex-row-reverse" : "lg:flex-row",
    "items-center",
    "max-w-[900px]",
    "m-auto",
    "gap-8",
    "lg:gap-24",
  ].join(" ");

  const number = [
    "relative",
    "mr-5",
    "lg:absolute",
    "leading-none",
    "lg:-top-5",
    "lg:right-0",
    "-z-10",
    "text-8xl",
    "lg:top-0",
    "lg:text-[450px]",
    props.reverse ? "lg:left-16" : "lg:right-16",
  ].join(" ");

  const imageClasses = [
    "w-full",
    "min-w-[370px]",
    "h-[455px]",
    "bg-cover",
    "bg-center",
    "clear-both",
    image,
  ].join(" ");

  return (
    <div className={flex}>
      <div className={imageClasses} />
      <div className="flex align-center relative lg:static">
        <Number className={number}>{index}</Number>
        <div>
          <H4>{title}</H4>
          <H3 className="mt-3">{subtitle}</H3>
          <BodyLg className="mt-5">{description}</BodyLg>
        </div>
      </div>
    </div>
  );
};
