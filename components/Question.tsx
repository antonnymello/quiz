import styles from '../styles/Question.module.css';
import QuestionModel from '../model/question';
import Asking from './Asking';
import Answer from './Answer';
import Timer from './Timer';

const letters = [
  { value: 'A', color: '#f2c866' },
  { value: 'B', color: '#F266BA' },
  { value: 'C', color: '#85D4F2' },
  { value: 'D', color: '#BCE596' },
];

interface QuestionProps {
  value: QuestionModel;
  answerTimeout?: number;
  onResponse: (index: number) => void;
  onTimeout: () => void;
}

const Question = (props: QuestionProps) => {
  const question = props.value;

  const renderAnswers = () => {
    return question.answers.map((answer, i) => {
      return (
        <Answer
          key={`${question.id}-${i}`}
          value={answer}
          index={i}
          charIndex={letters[i].value}
          bgColor={letters[i].color}
          onResponse={props.onResponse}
        />
      );
    });
  };

  return (
    <div className={styles.question}>
      <Asking text={question.asking} />

      <Timer
        key={question.id}
        duration={props.answerTimeout ?? 10}
        onTimeout={props.onTimeout}
      />
      {renderAnswers()}
    </div>
  );
};

export default Question;
