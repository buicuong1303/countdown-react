import './Card.scss';
import React, { useEffect, useState, useRef } from 'react';

function formartTime(seconds) {
  if (!seconds) return;
  console.log(seconds);
  let hours = Math.floor(seconds / 3600);

  seconds = seconds % 3600;
  let minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;

  return `${hours}:${minutes}:${seconds}`;
}
function Card(props) {
  const { dataItem } = props;
  let [time, setTime] = useState('');
  const timeRef = useRef(dataItem.time);
  useEffect(() => {
    const clockInterval = setInterval(() => {
      const newTime = timeRef.current - 1;
      if (newTime >= 0) {
        setTime(formartTime(newTime));
        timeRef.current = newTime;
        console.log(timeRef.current);
      }
    }, 1000);
    return () => {
      console.log('clean up clock');
      clearInterval(clockInterval);
    };
  }, []);
  return (
    <div className="card">
      {timeRef.current > 1 ? (
        <>
          <div className="ctn-img">
            <img src={dataItem.imageUrl} />
          </div>
          <div className="ctn-name">
            <img width={15} height={15} src="https://dummyimage.com/200x200/000/fff" />
            <span className="txt-name">{dataItem.name}</span>
          </div>
          <div className="quantity-item">1 Items</div>
          <div className="quantity-panto">
            <img width={15} height={15} src="https://dummyimage.com/200x200/000/fff" />
            <span className="txt-panto">{dataItem.quantity} PANTO POINT</span>
          </div>
          <div className="time-remaining">
            <img width={15} height={15} src="https://dummyimage.com/200x200/000/fff" />{' '}
            <span className="txt-time"> {time} </span>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default Card;
