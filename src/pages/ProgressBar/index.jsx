import { useState, useEffect } from 'react';
import QuestionLayout from '../../layouts/QuestionLayout';

import './index.css';

const ProgressBar = () => {
    const [completed, setCompleted] = useState(10);

    useEffect(() => {
        let timerId = null;
        timerId = setTimeout(() => {
            setCompleted(prev => prev + 15);
        }, 1000);

        if (completed > 100) {
            clearTimeout(timerId);
            setCompleted(10);
        }

        return () => clearTimeout(timerId);
    }, [completed]);

    return (
        <QuestionLayout title="Progress Bar">
            <div className='container'>
                <div className='progressBar'>
                    <div
                        className={`complete ${completed > 80 && 'success'}`}
                        style={{ width: `${completed}%` }}
                    >
                        {completed > 0 && <div className='percentage'>{completed}%</div>}
                    </div>
                </div>
                <div className='inputContainer'></div>
            </div>
        </QuestionLayout>
    );
};

export { ProgressBar }