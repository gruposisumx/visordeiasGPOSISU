import React, { useState } from 'react';
import { Github, Brain } from 'lucide-react';
import { Repository } from './types/repository';
import { parseRepositoryUrl } from './utils/url-parser';
import { fetchGitHubRepo } from './services/github';
import { fetchHuggingFaceRepo } from './services/huggingface';
import { SearchBar } from './components/SearchBar';
import { RepoCard } from './components/RepoCard';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [repoData, setRepoData] = useState<Repository | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const { owner, repo, platform } = parseRepositoryUrl(repoUrl);
      const data = platform === 'github'
        ? await fetchGitHubRepo(owner, repo)
        : await fetchHuggingFaceRepo(owner, repo);
      setRepoData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setRepoData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center mb-12">
          <div className="flex gap-4 mb-4">
            <Github className="w-16 h-16" />
            <Brain className="w-16 h-16" />
          </div>
          <h1 className="text-4xl font-bold mb-2">Repository Viewer</h1>
          <p className="text-gray-400 mb-8">View and clone repositories from GitHub and Hugging Face</p>
          
          <SearchBar
            value={repoUrl}
            onChange={setRepoUrl}
            onSubmit={handleSearch}
            loading={loading}
            error={error}
          />
        </div>

        {repoData && <RepoCard repo={repoData} />}
      </div>
    </div>
  );
}

export default App;