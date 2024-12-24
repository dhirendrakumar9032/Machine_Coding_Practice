import { Github } from 'lucide-react';


export default function GithubButton({ url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
      aria-label="View on GitHub"
    >
      <Github className="w-4 h-4 mr-1" />
      Code
    </a>
  );
}