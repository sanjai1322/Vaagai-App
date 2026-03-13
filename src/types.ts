export interface Course {
  id: string;
  title: string;
  description: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  thumbnail: string;
  progress?: number;
  category: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}
