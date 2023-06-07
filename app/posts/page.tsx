'use client';

import { useState, useEffect } from 'react';
import PostPreview from '@/components/PostPreview';
import { PostMetadata } from '@/components/PostMetadata';

export default function Blog() {
  const [sortKey, setSortKey] = useState<string>('');
  const [postMetadata, setPostMetadata] = useState<PostMetadata[]>([]);
  const [activeButton, setActiveButton] = useState<string>('');

  useEffect(() => {
    const fetchPostMetadata = async () => {
      const response = await fetch(`/api/posts${sortKey ? `?sortBy=${sortKey}` : ''}`);
      const data = await response.json();
      setPostMetadata(data);
    };

    fetchPostMetadata();
  }, [sortKey]);

  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.file} {...post} />
  ));

  const handleButtonClick = (key: string) => {
    setSortKey(key);
    setActiveButton(key);
  };

  return (
    <div>
      <div className="flex justify-center pb-4">
        <p className="font-mono px-2">/sort:</p>
        <button
          className={`bg-transparent text-${activeButton === 'date' ? 'white' : 'blue-400'} hover:bg-blue-400 font-semibold font-mono hover:text-white px-1 rounded`}
          onClick={() => handleButtonClick('date')}
        >
          date
        </button>
        <p className="font-mono">|</p>
        <button
          className={`bg-transparent text-${activeButton === 'lastUpdated' ? 'white' : 'blue-400'} hover:bg-blue-400 font-semibold font-mono hover:text-white px-1 rounded`}
          onClick={() => handleButtonClick('lastUpdated')}
        >
          last updated
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4">
        {postPreviews}
      </div>
    </div>
  );
}
