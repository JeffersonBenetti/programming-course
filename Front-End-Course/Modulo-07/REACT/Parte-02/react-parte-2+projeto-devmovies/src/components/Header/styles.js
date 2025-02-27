import styled from 'styled-components'

export const Container = styled.div`
    z-index: 99;
    position: fixed;
    top: 0;
    padding: 10px 40px 10px 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 20%;
    }
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 30px;

    li {
        font-size: 24px;
        font-weight: 500;
        cursor: pointer;

        a {
            color: #fff;
            text-decoration: none;
        }
    }
`