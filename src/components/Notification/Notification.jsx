import css from './Notification.module.css';

const Notification = ({ total }) => {
  return total === 0 && <p className={css.notification}>Not feedback yet</p>;
};

export default Notification;
