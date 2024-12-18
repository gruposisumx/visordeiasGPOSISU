import React from 'react';
import { GitHubRepo } from '../types/github';
import { RepoHeader } from './RepoHeader';
import { RepoStats } from './RepoStats';
import { CloneUrl } from './CloneUrl';

interface RepoCardProps {
  repo: GitHubRepo;
}

export function RepoCard({ repo }: RepoCardProps) {
  return (
    <div className="max-w-4xl mx-auto bg-gray-800 rounded-xl shadow-xl overflow-hidden">
      <div className="p-8">
        <RepoHeader repo={repo} />
        <RepoStats repo={repo} />
        <CloneUrl url={repo.clone_url} />
      </div>
    </div>
  );
}