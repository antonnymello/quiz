import styles from '../styles/Statistics.module.css';

interface StatisticsProps {
  value: any;
  text: string;
  bgColor?: string;
  fontColor?: string;
}

const Statistics = (props: StatisticsProps) => {
  return (
    <div className={styles.statistics}>
      <div
        className={styles.value}
        style={{
          backgroundColor: props.bgColor ?? '#FDD60F',
          color: props.fontColor ?? '#333',
        }}
      >
        {props.value}
      </div>

      <div className={styles.text}>{props.text}</div>
    </div>
  );
};

export default Statistics;
