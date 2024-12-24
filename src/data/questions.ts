export interface Question {
  id: number;
  title: string;
  path: string;
  githubUrl: string;
}

export const questions: Question[] = [
  {
    id: 1,
    title: "Build Auto Search Component",
    path: "/autoSearch",
    githubUrl: ""
  },
  {
    id: 2,
    title: "Create a Progress Bar",
    path: "/tabs",
    githubUrl: ""
  },
  {
    id: 3,
    title: "Implement Infinite Scroll",
    path: "/infinite-scroll",
    githubUrl: ""
  },
  {
    id: 4,
    title: "Build a Star Rating Component",
    path: "/star-rating",
    githubUrl: ""
  },
  {
    id: 5,
    title: "Create a Pagination Component",
    path: "/pagination",
    githubUrl: ""
  }
];