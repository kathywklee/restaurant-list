import { Link, HOME, EXAMPLE } from '../../../mechanisms/routing';

import styles from './header-style.scss';

const Header = props => (
  <header className={styles.header}>
    <aside className={styles.logo}>
      <img src="/example.png" alt="Logo" />
    </aside>

    <nav className={styles.nav}>
      <Link route={HOME}>
        <a className={styles.nav__item}>{props.translate('home')}</a>
      </Link>
      <Link route={EXAMPLE}>
        <a className={styles.nav__item}>{props.translate('example')}</a>
      </Link>
    </nav>
  </header>
);

export { Header };
