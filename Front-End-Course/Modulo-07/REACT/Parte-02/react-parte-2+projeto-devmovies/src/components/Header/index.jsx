import { Link } from 'react-router-dom'

import Logo from '../../assets/logo.png'

import { Container, Menu } from './styles.js'

function Header() {

    return (
        <Container>
            <img src={Logo} alt='Logo-dev-movies' />
            
            <Menu>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/movies'>Filmes</Link>
                </li>
                <li>
                    <Link to='/series'>Series</Link>
                </li>
            </Menu>
        </Container>
    )
}

export default Header