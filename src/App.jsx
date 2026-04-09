import { useState } from "react"
import CoinList from "./components/CoinList"
import Header from "./components/Header"
import { API_URL } from "./constants/api"
import useFetch from "./hooks/useFetch"
import SearchBar from "./components/SearchBar"

function App() {

  const {data, loading, error} = useFetch(API_URL)
  const [search, setSearch] = useState("")



  return (
    <>
    <main className="min-h-screen max-w-md mx-auto px-4 dark:bg-gray-900 dark:text-amber-50">
    <Header />
    <SearchBar setSearch={setSearch} search={search}/>
    <CoinList data={data} loading={loading} error={error} search={search}/>
    </main>
    </>
  )
}

export default App
