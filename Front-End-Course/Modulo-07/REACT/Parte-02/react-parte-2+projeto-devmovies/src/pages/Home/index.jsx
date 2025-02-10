import { useState } from 'react'

import api from '../../services/api.js'
import { Background } from './styles.js' 

function Home() {
  const [movie, setMovie] = useState()

  async function getMovies(){
    const data = await api.get('/movie/popular')

    // setMovie(data.data.results[0])
    console.log(data)
  }

  getMovies()

  return (
    <Background $img={'https://image.tmdb.org/t/p/original/v9Du2HC3hlknAvGlWhquRbeifwW.jpg'}>
      <h1>Home</h1>
      <p>Essa é a Home</p>
    </Background>
  );
}

export default Home;
