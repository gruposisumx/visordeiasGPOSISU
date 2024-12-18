import React from 'react';
import { Copy } from 'lucide-react';
import { copyToClipboard } from '../utils/clipboard';

interface CloneUrlProps {
  url: string;
}

export function CloneUrl({ url }: CloneUrlProps) {
  return (
    <div className="bg-gray-900 p-4 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-400">Clone with HTTPS</span>
        <button
          onClick={() => copyToClipboard(url)}
          className="text-blue-400 hover:text-blue-300 flex items-center gap-1"
        >
          <Copy className="w-4 h-4" />
          Copy
        </button>
      </div>
      <code className="text-sm text-gray-300">{url}</code>
    </div>
  );
}