import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Question } from '../data/questions';
import GithubButton from './GithubButton';

interface QuestionCardProps {
  question: Question;
  isAlternate: boolean;
}

export default function QuestionCard({ question, isAlternate }: QuestionCardProps) {
  return (
    <div className={`p-6 mb-4 rounded-lg shadow-md ${
      isAlternate ? 'bg-white' : 'bg-gray-50'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-gray-800">
          {question.id}. {question.title}
        </h2>
        <GithubButton url={question.githubUrl} />
      </div>
      <Link 
        to={question.path}
        className="flex items-center justify-between p-3 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span className="text-gray-600">View Solution</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </Link>
    </div>
  );
}