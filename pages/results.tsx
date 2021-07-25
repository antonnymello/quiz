import styles from '../styles/Results.module.css';
import { useRouter } from 'next/dist/client/router';
import Statistics from '../components/Statistics';
import Button from '../components/Button';

const Results = () => {
  const router = useRouter();

  const total = +router.query.total;
  const corrects = +router.query.corrects;
  const percentage = Math.round((corrects / total) * 100);

  return (
    <div className={styles.result}>
      <h1>Final Result</h1>
      <div style={{ display: 'flex' }}>
        <Statistics text='Questions' value={total} />
        <Statistics text='Corrects' value={corrects} bgColor='#9CD2A4' />
        <Statistics
          text='Percentage'
          value={percentage + '%'}
          bgColor='#DE6A33'
        />
      </div>
      <Button href='/' text={'Play Again!'} />
    </div>
  );
};

export default Results;
