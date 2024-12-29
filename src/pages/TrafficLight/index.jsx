import { useState, useEffect } from 'react';
import QuestionLayout from '../../layouts/QuestionLayout';
import './index.css';

const TrafficLight = () => {
  const [signal, setSignal] = useState('red');
  const [addOn, setAddOn] = useState(0);

  useEffect(() => {
    let timeoutId;

    const changeSignal = () => {
      if (signal === 'green') {
        timeoutId = setTimeout(() => {
          setSignal('yellow');
          setAddOn(0);
        }, 10000 + addOn);
      } else if (signal === 'yellow') {
        timeoutId = setTimeout(() => setSignal('red'), 3000);
      } else if (signal === 'red') {
        timeoutId = setTimeout(() => setSignal('green'), 5000);
      }
    };

    changeSignal();

    return () => clearTimeout(timeoutId);
  }, [signal, addOn]);

  const handleAddtime = e => {
    const extraTime = parseInt(e.target.value, 10);
    setAddOn(extraTime);
  };

  return (
    <QuestionLayout title="Progress Bar">
    <div className='trafficLightContainer'>
      <div className='signals'>
        <div className={`signal ${signal === 'green' ? 'green' : ''}`}>
          Green
        </div>
        <div className={`signal ${signal === 'yellow' ? 'yellow' : ''}`}>
          Yellow
        </div>
        <div className={`signal ${signal === 'red' ? 'red' : ''}`}>Red</div>
      </div>
      <div className='buttons'>
        <button onClick={() => setSignal('green')}>Turn Green</button>
        <button onClick={() => setSignal('red')}>Turn Red</button>
      </div>
      <div className='addon'>
        <select className='select' onChange={handleAddtime} value={addOn}>
          <option value={0}>No Additional Time</option>
          <option value={5000}>Add 5 Sec</option>
          <option value={10000}>Add 10 Sec</option>
          <option value={15000}>Add 15 Sec</option>
        </select>
      </div>
    </div>
    </QuestionLayout>
  );
};

export { TrafficLight };
