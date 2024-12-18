import { GitHubRepo } from '../types/repository';

export const fetchGitHubRepo = async (owner: string, repo: string): Promise<GitHubRepo> => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!response.ok) throw new Error('GitHub repository not found');
  const data = await response.json();
  
  return {
    ...data,
    type: 'github' as const
  };
};