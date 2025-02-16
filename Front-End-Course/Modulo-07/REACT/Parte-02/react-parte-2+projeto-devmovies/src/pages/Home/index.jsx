import { useEffect, useState } from 'react'

import api from '../../services/api.js'
import Button from '../../components/Button/index.jsx'
import { Background, Container, Info, ContainerButtons, Poster } from './styles.js'

function Home() {
  const [movie, setMovie] = useState()

  // Usado quando você quer que uma coisa seja chamada só uma vez.
  useEffect(() => {
    async function getMovies() {
      // Desestruturação.
      const { data: { results } } = await api.get('/movie/popular')

      setMovie(results[0])
      console.log(results[0])
    }

    getMovies()
  }, [])

  return (
    <>
      {/* Trava de segurança: Enquanto não chegar o dado em movie não será executado.*/}
      {movie && (
        <Background $img={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}>

          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButtons>
                <Button red>Assista Agora</Button>
                <Button>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt='Capa-do-filme' />
            </Poster>
          </Container>
        </Background>
      )}
    </>
  );
}

export default Home;
