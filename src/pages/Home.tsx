import { useState } from 'react';
import DomainPriceTable from "../components/DomainPricing";
import Navbar from "../components/Navbar";
import SearchDomain from "../components/SearchDomain";
import DomainSuggestionsGuide from '../components/DomainsSuggestionsGuide';
import Footer from '../components/Footer';



const Home = () => {
  const [promptId, setPromptId] = useState('');

  return (
    <>
      <Navbar />
      <SearchDomain setPromptId={setPromptId} />
      {promptId && <DomainPriceTable promptId={promptId} />}
      <DomainSuggestionsGuide/>
      <Footer/>
    </>
  );
};

export default Home;
