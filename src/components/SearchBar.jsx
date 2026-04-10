const SearchBar = ({ setSearch, search }) => {
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="p-2 mb-4 lg:mx-auto lg:max-w-3xl">
      <h2 className="text-lg font-bold mb-4 flex items-center gap-2">Buscar Moneda</h2>
      <div className="relative group">
        <input
          onChange={handleChange}
          type="text"
          name="search"
          id="search"
          value={search}
          placeholder="Ej: Bitcoin, ETH, USD..."
          className="w-full pl-4 pr-10 py-3 bg-white border-2 border-gray-200 rounded-xl shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-10 placeholder:text-gray-400 text-gray-700"
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
          <svg
            xmlns="http://w3.org"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};


export default SearchBar;
