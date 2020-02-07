import React, { useState, useEffect } from 'react';
import { Button, Icon } from 'react-onsenui';

import MyPage from '../components/MyPage';
import SwipeableList from '../components/SwipeableList/SwipeableList';
import SwipeableListItem from '../components/SwipeableList/SwipeableListItem';
import TimeEntry from './TimeEntry';

const background = (
  <Icon
    size={{ default: 32, material: 40 }}
    icon={{ default: 'ion-ios-trash-outline' }}
  />);

const TimeList = ({ navigator }) => {
  const [timeEntryArr, setTimeEntryArr] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    setTimeEntryArr([
      '8:20AM - 8:30AM',
      '8:30AM - 8:45AM',
      '8:45AM - 9:00AM',
      '9:00AM - 12:00PM',
      '1:00PM - 5:00PM',
    ]);
    setLoading(false);
  });
  return (
    <MyPage headerOptions={{ title: 'Time Entries for {dayName}', add: true, back: true, rightCallback: () => navigator.pushPage({ component: TimeEntry, props: { back: true } }) }}>
      {loading
        ? 'Now Loading, please wait'
        : (
          <SwipeableList>
            {timeEntryArr.map((value, idx) => (
              <SwipeableListItem background={background} key={idx} onClick={() => navigator.pushPage({ component: TimeEntry, props: { back: true, data: { startDate: new Date() } } })}>
                <Button modifier="quiet" style={{ color: 'black' }}>
                  <div className="ItemContent">{value}</div>
                </Button>
              </SwipeableListItem>))}
          </SwipeableList>)}
    </MyPage>
  );
};

export default TimeList;
