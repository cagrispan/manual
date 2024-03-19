"use client";

import React, { ChangeEvent, useState } from 'react';

import { Button } from '../atoms/Button';
import { Question } from '../molecules/Question';
import { Result } from '../molecules/Result';

export interface QuestionData {
  question: string;
  type: string;
  options: OptionData[];
}

export interface OptionData {
  display: string;
  isRejection: boolean;
  value: string;
}

export const Quiz = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [step, setStep] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<OptionData[]>([]);

  const onOpen = () => {
    setIsOpen(true);
    setStep(0);
    setSelectedOptions([]);
    fetchQuestions();
    document.body.style.overflow = "hidden";
  };

  const fetchQuestions = () => {
    fetch(
      "https://manual-case-study.herokuapp.com/questionnaires/972423.json",
      { headers: { accept: "*/*" } }
    )
      .then((response) => response.json())
      .then((response) => setQuestions(response.questions))
      .catch((error) => console.log(error));
  };

  const onNavigate = (toStep: number) => {
    setStep(toStep);
  };

  const onClose = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  const onSetStepOption =
    (option: OptionData) => (e: ChangeEvent<HTMLInputElement>) => {
      const selectedOptionsCopy = [...selectedOptions];
      selectedOptionsCopy[step] = option;
      setSelectedOptions(selectedOptionsCopy);
    };

  const backButton = (
    <Button className="bg-dark-red" onClick={onNavigate.bind(null, step - 1)}>
      Back
    </Button>
  );
  const nextButton = (
    <Button
      className="bg-dark-green ml-auto"
      onClick={onNavigate.bind(null, step + 1)}
      disabled={!selectedOptions[step]}
    >
      Next
    </Button>
  );
  const closeButton = (
    <Button className="bg-dark-green ml-auto" onClick={onClose}>
      Close
    </Button>
  );

  const actions = (
    <div className="flex justify-between mt-8">
      {step > 0 && backButton}
      {step < questions.length && nextButton}
      {step === questions.length && closeButton}
    </div>
  );

  const content =
    step < questions.length ? (
      <Question
        question={questions[step]}
        onSetOption={onSetStepOption}
        selectedOption={selectedOptions[step]}
      />
    ) : (
      <Result selectedOptions={selectedOptions} />
    );

  return (
    <div>
      <Button className="bg-dark-red mt-8" onClick={onOpen}>
        Take the quiz
      </Button>
      {isOpen && (
        <div className="w-screen h-screen min-w-[400px] z-10 bg-white fixed top-0 left-0 flex justify-center items-center overflow-auto">
          {!!questions.length && (
            <div className="w-4/5">
              {content}
              {actions}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
