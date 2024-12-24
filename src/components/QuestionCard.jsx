import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GithubButton from './GithubButton';



export default function QuestionCard({ question, isAlternate }) {
  return (
    <div className={`p-6 mb-4 rounded-lg shadow-md ${
      isAlternate ? 'bg-white' : 'bg-gray-50'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-gray-800">
          {question.title}
        </h2>
        <GithubButton url={question.githubUrl} />
      </div>
      <Link 
        to={question.path}
        className="flex items-center justify-between py-3 px-1 rounded-md hover:bg-gray-100 transition-colors"
      >
        <span className="text-gray-600">View Solution</span>
        <ChevronRight className="w-5 h-5 text-gray-400" />
      </Link>
    </div>
  );
}