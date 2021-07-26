import styles from '../styles/Quiz.module.css';
import QuestionModel from '../model/question';
import Question from './Question';
import React from 'react';
import Button from './Button';

interface QuizProps {
  question: QuestionModel;
  last: boolean;
  answeredQuestion: (question: QuestionModel) => void;
  nextStep: () => void;
}

const Quiz = (props: QuizProps) => {
  const onResponse = (index: number) => {
    if (props.question.notAnswered) {
      props.answeredQuestion(props.question.answerWith(index));
    }
  };

  return (
    <div className={styles.quiz}>
      {props.question ? (
        <Question
          value={props.question}
          answerTimeout={5}
          onResponse={onResponse}
          onTimeout={props.nextStep}
        />
      ) : (
        false
      )}

      <Button onClick={props.nextStep} text={props.last ? 'Finish' : 'Next'} />
    </div>
  );
};

export default Quiz;
