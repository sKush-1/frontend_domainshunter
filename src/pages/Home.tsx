import { useState } from 'react';
import DomainPriceTable from "../components/DomainPricing";
import Navbar from "../components/Navbar";
import SearchDomain from "../components/SearchDomain";

const Home = () => {
  const [promptId, setPromptId] = useState('');

  return (
    <>
      <Navbar />
      <SearchDomain setPromptId={setPromptId} />
      {promptId && <DomainPriceTable promptId={promptId} />}
    </>
  );
};

export default Home;
