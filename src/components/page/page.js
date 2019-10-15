import styles from './page-style.scss';

const Page = ({ children }) => {
  return (
    <div>
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export { Page };
