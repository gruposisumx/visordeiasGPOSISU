export interface BaseRepo {
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
}

export interface GitHubRepo extends BaseRepo {
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  subscribers_count: number;
  type: 'github';
}

export interface HuggingFaceRepo extends BaseRepo {
  likes: number;
  downloads: number;
  type: 'huggingface';
  task_type: string;
  model_type: string;
}

export type Repository = GitHubRepo | HuggingFaceRepo;

export interface ParsedUrl {
  owner: string;
  repo: string;
  platform: 'github' | 'huggingface';
}