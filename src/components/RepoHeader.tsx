import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Repository } from '../types/repository';
import { PlatformBadge } from './PlatformBadge';

interface RepoHeaderProps {
  repo: Repository;
}

export function RepoHeader({ repo }: RepoHeaderProps) {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <PlatformBadge platform={repo.type} />
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
        >
          <ExternalLink className="w-4 h-4" />
          View on {repo.type === 'github' ? 'GitHub' : 'Hugging Face'}
        </a>
      </div>
      <h2 className="text-2xl font-bold mb-4">{repo.full_name}</h2>
      {repo.description && (
        <p className="text-gray-300 mb-6">{repo.description}</p>
      )}
    </>
  );
}