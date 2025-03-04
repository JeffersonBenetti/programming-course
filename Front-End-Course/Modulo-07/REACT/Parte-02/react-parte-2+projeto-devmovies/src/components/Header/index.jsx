import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'

import Logo from '../../assets/logo.png'

import { Container, Menu, Li } from './styles.js'

function Header() {

    const [changeBackgrund, setChangeBackground] = useState()
    const { pathname } = useLocation()

    window.onscroll = () => {
        if(!changeBackgrund && window.pageYOffset > 150){
            setChangeBackground(true)
        } 
        if(changeBackgrund && window.pageYOffset < 150) {
            setChangeBackground(false)
        }
    }

    return (
        <Container $changeBackgrund={changeBackgrund}>
            <img src={Logo} alt='Logo-dev-movies' />

            <Menu>
                <Li $isActive={pathname === '/'}>
                    <Link to='/'>Home</Link>
                </Li>
                <Li $isActive={pathname.includes('movies')}>
                    <Link to='/movies'>Filmes</Link>
                </Li>
                <Li $isActive={pathname.includes('series')}>
                    <Link to='/series'>Series</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header