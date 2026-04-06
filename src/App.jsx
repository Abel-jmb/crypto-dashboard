import CoinList from "./components/coinList"
import { API_URL } from "./constants/api"
import useFetch from "./hooks/useFetch"

function App() {

  const {data, loading, error} = useFetch(API_URL)



  return (
    <>
    <CoinList data={data} loading={loading} error={error}/>
    </>
  )
}

export default App
