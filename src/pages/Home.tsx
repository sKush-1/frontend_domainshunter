import DomainPriceTable from "../components/DomainPricing"
import Navbar from "../components/Navbar"
import SearchDomain from "../components/SearchDomain"

const Home = () => {
  return (
    <>
    <Navbar />
    <SearchDomain/>
    <DomainPriceTable/>

    </>

  )
}

export default Home