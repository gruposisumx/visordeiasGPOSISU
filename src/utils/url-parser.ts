import { ParsedUrl } from '../types/repository';

export const parseRepositoryUrl = (url: string): ParsedUrl => {
  try {
    const githubRegex = /github\.com\/([^/]+)\/([^/]+)/;
    const huggingfaceRegex = /huggingface\.co\/([^/]+)\/([^/]+)/;

    const githubMatches = url.match(githubRegex);
    if (githubMatches) {
      return {
        owner: githubMatches[1],
        repo: githubMatches[2].replace('.git', ''),
        platform: 'github'
      };
    }

    const hfMatches = url.match(huggingfaceRegex);
    if (hfMatches) {
      return {
        owner: hfMatches[1],
        repo: hfMatches[2],
        platform: 'huggingface'
      };
    }

    throw new Error('Invalid repository URL');
  } catch (err) {
    throw new Error('Please enter a valid GitHub or Hugging Face repository URL');
  }
};