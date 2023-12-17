import './App.scss'
import { useEffect, useState } from 'react'
import SearchBar from './Components/SearchBar'
import MovieCard from './Components/MovieCard'
import TvCard from './Components/TvCard'
import PersonCard from './Components/PersonCard'
import Footer from './Components/Footer'
const apiKey = import.meta.env.VITE_API_KEY;

function App() {

  const [list, setlist] = useState([]);
  const [srcValue, setSrcValue] = useState('');
  const [selValue, setSelValue] = useState('movie');
  const [error, setError] = useState(false);

  const handleSearch = (newValue) => setSrcValue(newValue); 

  useEffect(() => {
    const query = new URLSearchParams({
      api_key: apiKey,
      query: srcValue,
      language: 'en-EN',
    });
    fetch(`https://api.themoviedb.org/3/search/${selValue}?${query.toString()}`)
    .then(response => response.json())
    .then(obj => {setlist(obj.results)})
    .catch(err => {
      console.warn(err);
      setError(true);
    });
  }, [srcValue, selValue]);
  
  return (
    <main>
      <h1>The Calin Database</h1>
      <SearchBar
        handleSearch={handleSearch}
        setSelValue={setSelValue}
      />
      {error ? 
      <div className='error'>Error detected, please reload the page</div> 
      : 
      <section className='cardsContainer'>
        {list.map(data => {
          switch(selValue){
            case 'movie':
              return <MovieCard key={data.id} {...data}/>

            case 'tv':
              return <TvCard key={data.id} {...data}/>
            
            case 'person':
              return <PersonCard key={data.id} {...data}/>

            default:
              setError(true);
        }})}
      </section>}
      <Footer
        author='Calin'
        year='2023'
      />
    </main>
  )
}

export default App
