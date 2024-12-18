import React from 'react';
import { Github, Brain } from 'lucide-react';

interface PlatformBadgeProps {
  platform: 'github' | 'huggingface';
}

export function PlatformBadge({ platform }: PlatformBadgeProps) {
  const config = {
    github: {
      icon: Github,
      text: 'GitHub Repository',
      color: 'bg-gray-700'
    },
    huggingface: {
      icon: Brain,
      text: 'Hugging Face Model',
      color: 'bg-yellow-600'
    }
  }[platform];

  const Icon = config.icon;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${config.color} text-sm`}>
      <Icon className="w-4 h-4" />
      <span>{config.text}</span>
    </div>
  );
}