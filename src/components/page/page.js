import { AppButton } from '../atoms/app-button';

import styles from './page-style.scss';

const Page = ({ children }) => {
  return (
    <div>
      <AppButton />
      <main className={styles.content}>{children}</main>
    </div>
  );
};

export { Page };
