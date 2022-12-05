import React from 'react';
import styles from './sidebar-home-page-style.scss';
import { RestaurantSorting } from '../../../components/molecules/restaurant-sorting';

export const SidebarHomePage = () => (
  <aside className={styles.side}>
    <RestaurantSorting />
  </aside>
);
