import { HuggingFaceRepo } from '../types/repository';

export const fetchHuggingFaceRepo = async (owner: string, repo: string): Promise<HuggingFaceRepo> => {
  const response = await fetch(`https://huggingface.co/api/models/${owner}/${repo}`);
  if (!response.ok) throw new Error('Hugging Face model not found');
  const data = await response.json();
  
  return {
    full_name: `${owner}/${repo}`,
    description: data.description,
    html_url: `https://huggingface.co/${owner}/${repo}`,
    clone_url: `https://huggingface.co/${owner}/${repo}.git`,
    likes: data.likes || 0,
    downloads: data.downloads || 0,
    task_type: data.pipeline_tag || 'Unknown',
    model_type: data.model_type || 'Unknown',
    type: 'huggingface' as const
  };
};