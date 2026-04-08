import CoinList from "./components/coinList"
import Header from "./components/Header"
import { API_URL } from "./constants/api"
import useFetch from "./hooks/useFetch"

function App() {

  const {data, loading, error} = useFetch(API_URL)



  return (
    <>
    <main className="min-h-screen max-w-md mx-auto px-4 dark:bg-gray-900 dark:text-amber-50">
    <Header />
    <CoinList data={data} loading={loading} error={error}/>
    </main>
    </>
  )
}

export default App
