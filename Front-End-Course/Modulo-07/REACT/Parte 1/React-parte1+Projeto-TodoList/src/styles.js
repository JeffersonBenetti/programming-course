import { CgTrash, CgCheck } from "react-icons/cg";

import styled from "styled-components";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TodoList = styled.div`
    width: 500px;
    background: #fff;
    padding: 30px 28px;
    border-radius: 5px;
`

export const Input = styled.input`
    width: 330px;
    height: 40px;
    padding: 10px; 
    outline: none;
    border: 2px solid rgba(209, 211, 212, 0.8);
    border-radius: 5px;       
    margin-right: 15px;
`

export const Button = styled.button`
    border: none;
    background: #8052ec;
    padding: 10px;
    height: 40px;
    border-radius: 5px;
    font-size: 14px;
    letter-spacing: 1.5px;
    font-weight: 700;
    line-height: 2px;
    color: #fff;

    &:hover {
        opacity: 0.8;
    }

    &:active {
        transform: scale(1.1);
    }
`

export const ListItem = styled.div`
    background: ${ props => props.$isFinished ? '#e8ff8b' : '#e4e4e4'};
    box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    width: 100%;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    padding: 0 15px;

    li {
        list-style: none; 
        font-size: 20px;
        color: ${ props => props.$isFinished ? '#00ff00' : '#ff0000'};
    }
`

export const Trash = styled(CgTrash)`
    font-size: 20px;
    color: red;

    cursor: pointer;
`

export const Check = styled(CgCheck)`
    font-size: 25px;
    color: green;

    cursor: pointer;
`

export const H3 = styled.h3`
    color: #012012;
    font-size: 20px;
    margin-top: 30px;
    text-align: center;
`