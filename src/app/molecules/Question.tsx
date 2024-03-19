import { ChangeEvent } from 'react';
import ReactHtmlParser from 'react-html-parser';

import { H3 } from '../atoms/Typography';
import { OptionData, QuestionData } from '../organisms/Quiz';

export interface QuestionProps {
  question: QuestionData;
  selectedOption?: OptionData;
  onSetOption: (
    option: OptionData
  ) => (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Question = (props: QuestionProps) => {
  const { question, selectedOption, onSetOption } = props;
  return (
    <div className="flex flex-col justify-center gap-8 ">
      <H3 className="text-center">{question.question}</H3>
      <div className="flex flex-wrap justify-evenly gap-2">
        {question.options.map((option, index) => {
          const onChange = onSetOption(option);
          return (
            <div
              className="flex flex-col items-center gap-2"
              key={option.value}
            >
              <H3>{ReactHtmlParser(option.display)}</H3>
              <input
                type="radio"
                name={index.toString()}
                value={option.value}
                checked={
                  !!(selectedOption && option.value === selectedOption.value)
                }
                onChange={onChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
