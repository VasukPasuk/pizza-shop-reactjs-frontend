import React, { useEffect, useState } from 'react';
import './style.scss';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useMenu } from '../../../hooks/useMenu.tsx';
import getFormattedDate from '../../../features/getFormattedDate.tsx';

function UpperBar(props) {
  const { setMenu } = useMenu();
  return (
    <div id="upper-bar">
      <div className="upper-bar__left-side">
        <RxHamburgerMenu
          className="upper-bar__left-side__menu-switcher"
          size={24}
          onClick={() => setMenu((prevState) => !prevState)}
        />
        <div className="upper-bar__left-side__breadcrumbs-box">Admin / Products / Create</div>
      </div>
      <TimeBox />
    </div>
  );
}

function TimeBox() {
  const [time, setTime] = useState<string>(getFormattedDate());
  useEffect(() => {
    function timeIntervalHandler() {
      setTime((prev) => getFormattedDate());
    }
    const timeInterval = setInterval(timeIntervalHandler, 1000);
    return () => {
      clearInterval(timeInterval);
    };
  }, []);
  return <div className="upper-bar__right-side">{time}</div>;
}

export default UpperBar;
