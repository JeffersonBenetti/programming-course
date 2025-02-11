import styled from 'styled-components'

export const Background = styled.div`
    background-image: url(${ props => props.$img});
    height: 100vh;
    background-position: center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
    }
`

export const Container = styled.div`
    max-width: 1500px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 50px;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 20px;
        font-weight: 500;
        color: #fff;
        margin: 30px 0 20px;
    }
`

export const Poster = styled.div`
    img {
        height: 400px;
        border-radius: 20px;
    }
`