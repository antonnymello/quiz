import styles from '../styles/Asking.module.css';

interface AskingProps {
  text: string;
}

const Asking = (props: AskingProps) => {
  return (
    <div className={styles.asking}>
      <span className={styles.text}>{props.text}</span>
    </div>
  );
};

export default Asking;
