import React from 'react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  loading: boolean;
  error?: string;
}

export function SearchBar({ value, onChange, onSubmit, loading, error }: SearchBarProps) {
  return (
    <div className="w-full max-w-2xl">
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter repository URL (e.g., github.com/owner/repo or huggingface.co/owner/model)"
          className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500 text-white"
        />
        <button
          onClick={onSubmit}
          disabled={loading}
          className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'View Repository'}
        </button>
      </div>
      {error && (
        <p className="mt-4 text-red-400 text-sm">{error}</p>
      )}
    </div>
  );
}