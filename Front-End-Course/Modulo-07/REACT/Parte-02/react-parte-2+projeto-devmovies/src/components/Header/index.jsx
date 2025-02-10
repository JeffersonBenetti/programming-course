import Logo from '../../assets/logo.png'

function Header() {

    return (
        <>
            <img src={Logo} alt='Logo-dev-movies' style={{height: 100}}/>
            <h1>Header</h1>
        </>
    )
}

export default Header