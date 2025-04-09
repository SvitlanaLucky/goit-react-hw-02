import css from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    total !== 0 && (
      <div>
        <ul className={css.feedbackList}>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
        </ul>
        <p className={css.positivePercentage}>Positive: {positive}%</p>
      </div>
    )
  );
};

export default Feedback;
