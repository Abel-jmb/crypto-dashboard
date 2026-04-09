const SearchBar = ({setSearch, search}) => {


    const handleChange = (e) => {
        setSearch(e.target.value)
    }


    return (
        <>
        <h2>Busqueda</h2>
        <input onChange={handleChange} type="text" name="search" id="serach" value={search} />
        </>
    );
}
 
export default SearchBar
;