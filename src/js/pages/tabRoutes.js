import React from 'react';

import DayList from './DayList';
import Settings from './Settings';

const withTabProps = (InputComponent, key, activeIndex, tabbar, navigator) => (
  <InputComponent
    active={activeIndex === key}
    key={key}
    tabbar={tabbar}
    navigator={navigator}
  />
);

const tabRoutes = [
  {
    component: DayList,
    title: 'Time Card',
    icon: 'md-info',
  },
  {
    component: Settings,
    title: 'Settings',
    icon: 'md-settings',
  },
];

export { tabRoutes, withTabProps };
