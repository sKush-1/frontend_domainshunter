import React, { useState } from 'react';
import DomainPriceTable from './DomainPricing';

const generatePromptId = (length = 12) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const SearchDomain = () => {
  const [prompt, setPrompt] = useState('');
  const [promptId, setPromptId] = useState('');
  const [domains, setDomains] = useState([]);

  const handleSearch = async () => {
    const newPromptId = generatePromptId();
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

      // Fetch domains after POST request is successful
      const getResponse = await fetch(`http://localhost:8000/domains/${newPromptId}`);
      if (!getResponse.ok) {
        throw new Error('Failed to fetch domains');
      }

      const getData = await getResponse.json();
      setDomains(getData.available_domains);
      setPromptId(newPromptId);
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
      {promptId && <DomainPriceTable promptId={promptId} />}
    </div>
  );
};

export default SearchDomain;
