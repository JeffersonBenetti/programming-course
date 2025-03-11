import { useState, useEffect } from 'react'
import api from '../../services/api.js'

import { Container, Background, Button } from './styles.js'

function Modal({ movieId, setShowModal}) {

    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            // Desestruturação.
            const { data: { results } } = await api.get(`/movie/${movieId}/vídeos`)

            console.log(results[0])
            setMovie(results[0])
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