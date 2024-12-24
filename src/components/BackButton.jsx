import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/')}
      className="inline-flex items-center  py-4 text-md font-medium text-gray-700 hover:text-gray-900"
    >
      <ArrowLeft className="w-5 h-5 mr-1" />
      Back to Questions
    </button>
  );
}