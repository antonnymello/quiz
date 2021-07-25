import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import styles from '../styles/Timer.module.css';

interface TimerProps {
  key: any;
  duration: number;
  onTimeout: () => void;
}

const Timer = (props: TimerProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer
        duration={props.duration}
        size={120}
        isPlaying
        onComplete={props.onTimeout}
        colors={[
          ['#BCE596', 0.33],
          ['#F7B801', 0.33],
          ['#ED827A', 0.33],
        ]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
};

export default Timer;
