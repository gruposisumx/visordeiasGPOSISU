import React from 'react';
import { GitFork, Star, Eye, Users, Heart, Download, Cpu } from 'lucide-react';
import { Repository } from '../types/repository';

interface RepoStatsProps {
  repo: Repository;
}

export function RepoStats({ repo }: RepoStatsProps) {
  if (repo.type === 'github') {
    const stats = [
      { icon: Star, value: repo.stargazers_count, label: 'Stars', color: 'text-yellow-400' },
      { icon: GitFork, value: repo.forks_count, label: 'Forks', color: 'text-green-400' },
      { icon: Eye, value: repo.watchers_count, label: 'Watchers', color: 'text-purple-400' },
      { icon: Users, value: repo.subscribers_count, label: 'Subscribers', color: 'text-blue-400' },
    ];

    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map(({ icon: Icon, value, label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className={`w-5 h-5 ${color}`} />
            <span>{value} {label}</span>
          </div>
        ))}
      </div>
    );
  }

  const stats = [
    { icon: Heart, value: repo.likes, label: 'Likes', color: 'text-red-400' },
    { icon: Download, value: repo.downloads, label: 'Downloads', color: 'text-blue-400' },
    { icon: Cpu, value: repo.task_type, label: 'Task', color: 'text-purple-400' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
      {stats.map(({ icon: Icon, value, label, color }) => (
        <div key={label} className="flex items-center gap-2">
          <Icon className={`w-5 h-5 ${color}`} />
          <span>{typeof value === 'number' ? `${value} ${label}` : value}</span>
        </div>
      ))}
    </div>
  );
}