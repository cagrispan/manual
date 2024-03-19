import { ExternalAnchor } from '../atoms/Anchor';
import { H3 } from '../atoms/Typography';
import { OptionData } from '../organisms/Quiz';

export interface ResultProps {
  selectedOptions: OptionData[];
}

export const Result = (props: ResultProps) => {
  const rejected = (
    <H3 className="py-24 text-center">
      Unfortunately, we are unable to prescribe this medication for you. This is
      because finasteride can alter the PSA levels, which maybe used to monitor
      for cancer. You should discuss this further with your GP or specialist if
      you would still like this medication.
    </H3>
  );

  const accepted = (
    <H3 className="py-24 text-center">
      “Great news! We have the perfect treatment for your hair loss. Proceed to{" "}
      <ExternalAnchor className="underline" url="https://www.manual.co">
        www.manual.co
      </ExternalAnchor>
      , and prepare to say hello to your new hair!”
    </H3>
  );

  const result = props.selectedOptions.some(({ isRejection }) => isRejection)
    ? rejected
    : accepted;

  return result;
};
