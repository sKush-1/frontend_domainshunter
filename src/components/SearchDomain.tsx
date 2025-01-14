import React, { useState } from 'react';

const generatePromptId = (length = 12) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

interface SearchDomainProps {
  setPromptId: (id: string) => void;
}

const SearchDomain: React.FC<SearchDomainProps> = ({ setPromptId }) => {
  const [prompt, setPrompt] = useState('');

  const handleSearch = async () => {
    const newPromptId = generatePromptId();
    setPromptId(newPromptId);
    const requestBody = {
      prompt: prompt,
    };

    try {
      const postResponse = await fetch(`http://localhost:8000/domains/generate/${newPromptId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!postResponse.ok) {
        throw new Error('Network response was not ok');
      }

      const postData = await postResponse.json();
      console.log('POST Response:', postData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="search-domain">
      <img src="background-image.jpg" alt="Background" className="background-image" />
      <div className="search-container">
        <textarea
          placeholder="Write your prompt to find domains"
          className="search-input"
          rows={2}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchDomain;
