import { questions } from '../../data/questions';
import QuestionCard from '../../components/QuestionCard';

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mt-10 mb-8">Practice Questions</h2>
      <div className="mx-auto">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            isAlternate={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}