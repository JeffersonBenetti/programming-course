import { useState, useEffect } from 'react'
import { getMovieVideos } from '../../services/getData.js'

import { Container, Background, Button } from './styles.js'

function Modal({ movieId, setShowModal }) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideos(movieId))
        }

        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)}>
            <Button>X</Button>
            <Container>
                <iframe
                    src={`https://www.youtube.com/embed/FEDv_feBLho?si=FkszpYRudX4wtGzY`}
                    title='Youtube Video Player'
                    height='400px'
                    width='100%'
                ></iframe>
            </Container>
        </Background>
    )
}

export default Modal