import { Code2 } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-lg sticky top-0 w-full">
    <div className="container mx-auto flex items-center flex-wrap">
      <Code2 className="w-8 h-8 mr-3" />
      <h1 className="text-2xl font-bold">Machine Coding Assignments</h1>
    </div>
  </nav>
  
  );
}