import { useEffect, useState } from 'react'

import api from '../../services/api.js'
import getImages from '../../utils/getImagens.js'
import Button from '../../components/Button'
import Slider from '../../components/Slider'
import Modal from '../../components/Modal'

import { Background, Container, Info, ContainerButtons, Poster } from './styles.js'

function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movie, setMovie] = useState()
  const [topMovies, setTopMovies] = useState()
  const [series, setSeries] = useState()
  const [topSeries, setTopSeries] = useState()
  const [popularArt, setPopularArt] = useState()

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

    async function getSeries() {
      // Desestruturação.
      const { data: { results } } = await api.get('/tv/top_rated')

      setSeries(results)
    }

    async function getTopSeries() {
      // Desestruturação.
      const { data: { results } } = await api.get('/tv/popular')

      setTopSeries(results)
    }

    async function getPopularArt() {
      // Desestruturação.
      const { data: { results } } = await api.get('/person/popular')

      setPopularArt(results)
    }

    getMovies()
    getTopMovies()
    getSeries()
    getTopSeries()
    getPopularArt()
  }, [])

  return (
    <>
      {/* Trava de segurança: Enquanto não chegar o dado em movie não será executado.*/}
      {movie && (

        <Background $img={getImages(movie.backdrop_path)} alt='Capa-do-Filme'>
          {showModal && <Modal movieId={movie.id} setShowModal={setShowModal}/>}

          <Container>
            <Info>
              <h1>{movie.title}</h1>
              <p>{movie.overview}</p>

              <ContainerButtons>
                <Button red>Assista Agora</Button>
                <Button onClick={() => setShowModal(true)}>Assista o Trailer</Button>
              </ContainerButtons>
            </Info>
            <Poster>
              <img src={getImages(movie.poster_path)} alt='Poster-do-filme' />
            </Poster>
          </Container>
        </Background>
      )}
      {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
      {series && <Slider info={series} title={'Top Series'} />}
      {topSeries && <Slider info={topSeries} title={'Series Populares'} />}
      {popularArt && <Slider info={popularArt} title={'Artitas Populares'} />}
    </>
  );
}

export default Home;
