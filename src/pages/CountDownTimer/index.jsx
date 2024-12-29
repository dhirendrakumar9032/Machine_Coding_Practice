import { useEffect, useState } from 'react';
import QuestionLayout from '../../layouts/QuestionLayout';
import './index.css';

const CountDownTimer = () => {
    const [timer, setTimer] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let timerId = null;
        if (isActive) {
            timerId = setInterval(() => {
                setTimer((prevTimer) => prevTimer > 0 ? prevTimer - 1 : 0);
            }, 1000);
        } else {
            clearInterval(timerId);
        }

        return () => clearInterval(timerId);
    }, [isActive]);

    const handleChange = (type, value) => {
        const numberValue = parseInt(value, 10);
        if (type === 'second') {
            setTimer((prevTimer) => {
                const newTimer = (Math.floor(prevTimer / 60) * 60) + numberValue;
                return newTimer;
            });
        } else if (type === 'minutes') {
            setTimer((prevTimer) => {
                const hours = Math.floor(prevTimer / 3600);
                const seconds = prevTimer % 60;
                const newTimer = hours * 3600 + numberValue * 60 + seconds;
                return newTimer;
            });
        } else if (type === 'hour') {
            setTimer((prevTimer) => {
                const minutes = Math.floor((prevTimer % 3600) / 60);
                const seconds = prevTimer % 60;
                const newTimer = numberValue * 3600 + minutes * 60 + seconds;
                return newTimer;
            });
        }
    };


    const handleStart = () => {
        setIsActive(!isActive);
    };

    const handleStop = () => {
        setIsActive(false);
        setTimer(0);
    };

    const formatTime = (time) => {
        return time.toString().padStart(2, '0');
    };

    return (
        <QuestionLayout title="Count Down Timer">
            <div className="countDownTimer">
                <div className="inputs">
                    <input
                        type="number"
                        value={formatTime(Math.floor(timer / 3600))}
                        onChange={(e) => handleChange('hour', e.target.value)}
                    />
                    :
                    <input
                        type="number"
                        value={formatTime(Math.floor((timer % 3600) / 60))}
                        onChange={(e) => handleChange('minutes', e.target.value)}
                    />
                    :
                    <input
                        type="number"
                        value={formatTime(timer % 60)}
                        onChange={(e) => handleChange('second', e.target.value)}
                    />
                </div>
                <div className="footer">
                    <button onClick={handleStart}>{isActive?'Pause':'Start'}</button>
                    <button onClick={handleStop}>Reset</button>
                </div>
            </div>
        </QuestionLayout>
    );
};

export { CountDownTimer };
