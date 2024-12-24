import QuestionLayout from '../../layouts/QuestionLayout';
import './index.css';

const PieChart = () => {
  return (
    <QuestionLayout title="Pie Chart">
      <div className='pie-chart'>
        <div className='slice-text' style={{ '--rotation': '340deg' }}>
          110%
        </div>
        <div className='slice-text' style={{ '--rotation': '65deg' }}>
          60%
        </div>
        <div className='slice-text' style={{ '--rotation': '125deg' }}>
          40%
        </div>
        <div className='slice-text' style={{ '--rotation': '165deg' }}>
          20%
        </div>
        <div className='slice-text' style={{ '--rotation': '210deg' }}>
          50%
        </div>
        <div className='slice-text' style={{ '--rotation': '260deg' }}>
          20%
        </div>
      </div>
    </QuestionLayout>
  );
};

export  {PieChart};
