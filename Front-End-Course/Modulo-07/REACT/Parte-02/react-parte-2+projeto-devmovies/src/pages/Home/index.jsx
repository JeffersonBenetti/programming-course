import { useEffect, useState } from 'react'

import api from '../../services/api.js'
import getImages from '../../utils/getImagens.js'
import Button from '../../components/Button/index.jsx'
import Slider from '../../components/Slider/index.jsx'

import { Background, Container, Info, ContainerButtons, Poster } from './styles.js'

function Home() {
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()

  // Usado quando você quer que uma coisa seja chamada só uma vez.
  useEffect(() => {
    async function getMovies() {
      // Desestruturação.
      const { data: { results } } = await api.get('/movie/popular')

      setMovie(results[0])
    }

    async function getTopMovies() {
      // Desestruturação.
      const { data: { results } } = await api.get('/movie/top_rated')

      setTopMovies(results)
    }

    getMovies()
    getTopMovies()
  }, [])

  return (
    <>
      {/* Trava de segurança: Enquanto não chegar o dado em movie não será executado.*/}
      {movie && (
      
        <Background $img={getImages(movie.backdrop_path)} alt='Capa-do-Filme'>

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
              <img src={getImages(movie.poster_path)} alt='Poster-do-filme' />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
    </>
  );
}

export default Home;
