import styled from "styled-components";

export const Background = styled.div`
    height: 100vh;
    width: 100vw;
    z-index: 999;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    background: #000;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    padding: 15px;
    max-width: 1200px;
    border-radius: 10px;

    iframe {
        border: none;
        border-radius: 10px;
    }
`

export const Button = styled.button`
    color: #000;
    font-size: 14px;
    font-weight: 700;
    padding: 1px 5px;
    position: absolute;
    top: 55px;
    left: 50%;
`