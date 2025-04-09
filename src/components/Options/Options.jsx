import clsx from 'clsx';
import css from './Options.module.css';

const Options = ({ update, reset, total }) => {
  return (
    <ul className={css.optionList}>
      <li>
        <button
          onClick={() => {
            update('good');
          }}
          className={css.optBtn}
        >
          Good
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            update('neutral');
          }}
          className={css.optBtn}
        >
          Neutral
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            update('bad');
          }}
          className={css.optBtn}
        >
          Bad
        </button>
      </li>
      {total !== 0 && (
        <li>
          <button onClick={reset} className={clsx(css.optBtn, css.resetBtn)}>
            Reset
          </button>
        </li>
      )}
    </ul>
  );
};

export default Options;
