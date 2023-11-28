import styled from "styled-components";

export const Card = styled.div`

`
export const Img = styled.img`
 max-width:100%;
 border-radius:5px 5px 0 0;
 margin: 0;
`
export const Footer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 12px;
margin-top: -8px;
border: 1px solid black;
border-top: none;
border-bottom-right-radius: 4px;
border-bottom-left-radius: 4px;
`

export const Title = styled.h4`
font-family: Arial, Helvetica, sans-serif;
    font-size: 1rem;
`
export const Btn = styled.a`
 text-decoration: none;
    padding: 2px 8px;
    border-radius:4px;
    cursor: pointer;
    color: #fff;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    transition: 0.7s;
    background-color: #8A2BE2;


    &:hover {
      background-color:#9932CC
    }
`