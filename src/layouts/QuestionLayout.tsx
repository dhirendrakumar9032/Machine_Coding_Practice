import { ReactNode } from 'react';
import BackButton from '../components/BackButton';

interface QuestionLayoutProps {
  children: ReactNode;
  title: string;
}

export default function QuestionLayout({ children, title }: QuestionLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-6">
      <BackButton />
      <h1 className="text-2xl font-bold text-gray-800 mt-4 mb-6">{title}</h1>
      {children}
    </div>
  );
}