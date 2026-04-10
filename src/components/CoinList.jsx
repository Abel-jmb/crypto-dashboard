import CoinCard from "./CoinCard";
import Error from "./Error";
import Loader from "./Loader";

const CoinList = ({ data, loading, error, search }) => {
  
    let coinSearch = data && data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));


  return (
    <div>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <ul className="grid grid-cols-1 gap-4">
        {coinSearch && coinSearch.map((c) => <CoinCard key={c.id} coin={c} />)}
      </ul>
    </div>
  );
};

export default CoinList;