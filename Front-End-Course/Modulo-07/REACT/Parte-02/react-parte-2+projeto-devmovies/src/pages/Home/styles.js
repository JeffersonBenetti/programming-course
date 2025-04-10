import styled, { keyframes } from 'styled-components'

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to {
        transform: scale(1)
    }
`

export const Background = styled.div`
    background-image: url(${ props => props.$img});
    height: 100vh;
    background-position: center;
    background-size: cover;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 150px;
        background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
    max-width: 1200px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 2;
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;

    h1 {
        font-size: 3em;
        font-weight: 700;
        color: #fff;
    }

    p {
        font-size: 16px;
        font-weight: 400;
        color: #fff;
        margin: 30px 0 20px;
    }
`
export const ContainerButtons = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 30px;
`

export const Poster = styled.div`
    img {
        height: 400px;
        border-radius: 20px;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }
`