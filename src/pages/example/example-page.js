import { Page } from '../../components/page';

import styles from './example-page-style.scss';

const { section } = styles;

export const ExamplePage = props => (
  <Page>
    <section className={section}>{props.translateFormattedHTML('content')}</section>
    <section className={section}>{props.translateFormattedHTML('content')}</section>
  </Page>
);
