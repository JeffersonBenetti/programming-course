import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { Background, Container, Cover } from './styles.js'
import { getMovieById, getMovieVideos, getMovieCredits, getMovieSimilar } from '../../services/getData.js'
import { getImages } from '../../utils/getImages.js'

function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideos, setMovieVideos] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideos(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ]).then(([movie, videos, credits, similar]) => {
                console.log({ movie, videos, credits, similar })
                setMovie(movie)
                setMovieVideos(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            }).catch(error => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <>
                    {movie && <Background $image={getImages(movie.backdrop_path)}></Background>}
                    <Container>
                        <Cover>
                            <img src={getImages(movie.poster_path)} />
                        </Cover>
                        <div>detalhe</div>
                    </Container>
                </>
            )}
        </>
    )
}

export default Detail