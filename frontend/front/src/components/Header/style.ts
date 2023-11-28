import styled from "styled-components";

export const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
border-bottom: 1px solid #9932CC ;
padding: 8px;
@media (max-width: 520px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`
export const Logo = styled.h1`
color: #8A2BE2;
font-family: Arial, Helvetica, sans-serif;
    font-size: 1.8rem;

`
export const Navigation = styled.ul`
    display: flex;
    align-items: center;
    justify-content:space-around ;
    gap: 1rem;
    @media (max-width: 350px) {
      padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const NavItem = styled.li`
list-style: none;
`
export const ListItem = styled.a`
    text-decoration: none;
    padding: 8px 16px;
    border-radius:8px;
    cursor: pointer;
    color: #000;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    `
export const ListItemCreate = styled.a`
    text-decoration: none;
    padding: 8px 16px;
    border-radius:8px;
    cursor: pointer;
    color: #fff;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    transition: 0.7s;
    background-color: #8A2BE2;


    &:hover {
      background-color:#9932CC
    }
    `
    