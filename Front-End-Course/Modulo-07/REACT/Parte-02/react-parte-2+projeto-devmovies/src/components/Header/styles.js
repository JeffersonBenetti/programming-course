import styled from 'styled-components'

export const Container = styled.div`
    min-height: 50px;
    z-index: 99;
    position: fixed;
    top: 0;
    padding: 10px 40px 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${ props => props.$changeBackgrund ? '#000' : 'transparent'};
    transition: background 0.3s ease-in-out;

    img {
        width: 20%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;
`

export const Li = styled.li`
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
    position: relative;

    a {
         color: #fff;
         text-decoration: none;
    }

    &::after {
        content: '';
        width: ${(props) => props.$isActive ? '100%' : 0};
        height: 3px;
        background: #189b20;
        position: absolute;
        bottom: -10px;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after {
        width: 100%;
    }
`