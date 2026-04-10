import CoinCard from "./CoinCard";
import Error from "./Error";
import Loader from "./Loader";

const CoinList = ({ data, loading, error, search, setPerPage }) => {
  let coinSearch =
    data &&
    data.filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  const handleClick = () => {
    setPerPage((prev) => prev + 10);
  };

  return (
    <div>
      {loading && <Loader />}
      {error && <Error error={error} />}
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {coinSearch && coinSearch.map((c) => <CoinCard key={c.id} coin={c} />)}
      </ul>
      <div className="flex flex-col items-center justify-center py-8 px-4 transition-all duration-500">
        {!search ? (
          <button
            onClick={handleClick}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold rounded-xl transition-all duration-200 ease-in-out">
            Ver más monedas
          </button>
        ) : coinSearch && coinSearch.length > 0 ? (
          <div className="flex items-center gap-2 text-emerald-600 font-medium bg-emerald-50 px-4 py-2 rounded-full border border-emerald-100">
            Resultados Enontrados
          </div>
        ) : (
          <div className="text-center p-6 bg-gray-200 dark:bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 max-w-sm">
            <p className="text-gray-400 mb-1 text-2xl">🔍</p>
            <p className="text-gray-600 font-medium">No se encontraron resultados</p>
            <p className="text-gray-400 text-sm mt-1">
              para el término:{" "}
              <span className="text-blue-500 font-bold italic">"{search}"</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinList;
