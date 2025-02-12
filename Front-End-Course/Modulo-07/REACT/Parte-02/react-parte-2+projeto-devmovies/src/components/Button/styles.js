import styled, { css } from 'styled-components'

const buttonStyles = css`
    border: 2px solid #fff;
    background: transparent;
    color: #fff;
    border-radius: 30px;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 500;
    transition: all 200ms ease-in-out;

    &:hover {
        background: #fff;
        color: #ff0000;
    }
`

export const ButtonRed = styled.button`
    ${buttonStyles}

    background: #ff0000;
    border: 4px solid transparent;
    box-shadow: 0px 0px 10px 5px rgb(255 0 0 / 30%);

    &:hover {
        box-shadow: 0px 0px 10px 10px rgb(255 0 0 / 50%);
        background: #ff0000;
        color: #fff;
    }
`

export const ButtonWhite = styled.button`
    ${buttonStyles}
`