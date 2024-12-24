import { ReactNode } from 'react';
import BackButton from '../components/BackButton';



export default function QuestionLayout({ children, title }) {
  return (
    <div className="container mx-auto px-2 py-6 mt-10">
      <BackButton />
      <h1 className="text-2xl font-bold text-gray-800 mt-2 mb-4">{title}</h1>
      {children}
    </div>
  );
}