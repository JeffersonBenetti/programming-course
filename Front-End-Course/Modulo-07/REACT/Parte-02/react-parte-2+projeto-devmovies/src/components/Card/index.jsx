import getImagens from '../../utils/getImagens.js'

import { Container } from './styles.js'

function Card ({ item }){

    return (
        
        <Container>
            <img src={getImagens(item.poster_path)} />
            <h3>{item.original_title}</h3>
        </Container>
    )
}

export default Card