import getImagens from '../../utils/getImagens.js'

import { Container } from './styles.js'

function Card({ item }) {

    return (

        <Container>
            <img src={getImagens(item.poster_path || item.profile_path || '')} />
            <h3>{item.title || item.original_name || ''}</h3>
        </Container>
    )
}

export default Card