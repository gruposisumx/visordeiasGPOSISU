export interface GitHubRepo {
  full_name: string;
  description: string | null;
  html_url: string;
  clone_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  subscribers_count: number;
}

export interface ParsedGitHubUrl {
  owner: string;
  repo: string;
}