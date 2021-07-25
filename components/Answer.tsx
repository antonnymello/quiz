import styles from '../styles/Answer.module.css';
import AnswerModel from '../model/answer';

interface AnswerProps {
  value: AnswerModel;
  index: number;
  charIndex: string;
  bgColor: string;
  onResponse: (index: number) => void;
}

const Answer = (props: AnswerProps) => {
  const answer = props.value;
  const answerRevealed = answer.revealed ? styles.answerRevealed : '';

  return (
    <div
      className={styles.answer}
      onClick={() => props.onResponse(props.index)}
    >
      <div className={`${answerRevealed} ${styles.answerContent}`}>
        <div className={styles.front}>
          <div
            className={styles.charIndex}
            style={{
              backgroundColor: props.bgColor,
            }}
          >
            {props.charIndex}
          </div>
          <div className={styles.value}>{answer.value}</div>
        </div>

        <div className={styles.back}>
          {answer.correct ? (
            <div className={styles.correct}>
              <div>The correct answer is...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          ) : (
            <div className={styles.wrong}>
              <div>The selected answer is wrong...</div>
              <div className={styles.value}>{answer.value}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Answer;
