import { ParsedGitHubUrl } from '../types/github';

export const parseGithubUrl = (url: string): ParsedGitHubUrl => {
  try {
    const regex = /github\.com\/([^/]+)\/([^/]+)/;
    const matches = url.match(regex);
    if (matches) {
      return { owner: matches[1], repo: matches[2].replace('.git', '') };
    }
    throw new Error('Invalid GitHub URL');
  } catch (err) {
    throw new Error('Please enter a valid GitHub repository URL');
  }
};

export const fetchGitHubRepo = async (owner: string, repo: string) => {
  const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`);
  if (!response.ok) throw new Error('Repository not found');
  return response.json();
};