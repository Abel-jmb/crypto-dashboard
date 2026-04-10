import { useState } from "react"
import CoinList from "./components/CoinList"
import Header from "./components/Header"
import { API_URL } from "./constants/api"
import useFetch from "./hooks/useFetch"
import SearchBar from "./components/SearchBar"
import Footer from "./components/Footer"

function App() {

  const [search, setSearch] = useState("")
  const [perPage, setPerPage] = useState(10)
  const {data, loading, error} = useFetch(`${API_URL}&per_page=${perPage}`)



  return (
    <>
    <main className="min-h-screen max-w-md mx-auto px-4 dark:bg-gray-900 dark:text-amber-50 md:max-w-2xl lg:max-w-5xl lg:px-2">
    <Header />
    <SearchBar setSearch={setSearch} search={search}/>
    <CoinList data={data} loading={loading} error={error} search={search} setPerPage={setPerPage}/>
    <Footer />
    </main>
    </>
  )
}

export default App
