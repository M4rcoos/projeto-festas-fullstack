import styled from "styled-components";

export const Form =styled.form`
display: flex;
flex-direction: column;
gap:2rem;

width: 500px;
height: 70vh;
padding: 1rem 2rem;
border: 1px solid #9932CC;
border-radius:8px;
box-shadow: -7px 1px 22px 5px rgba(0,0,0,0.21);

@media (max-width: 570px) {
    width: 300px;
  }
  @media (max-width: 420px) {
    width: 280px;
padding: 1rem;
  }
`
export const Input = styled.input`
padding: 5px 8px;
border-radius: 4px;
border: 1px solid;
`
export const InputSubmit = styled.input`

text-decoration: none;
    padding: 8px 16px;
    border-radius:8px;
    cursor: pointer;
    color: #fff;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    transition: 0.7s;
    background-color: #8A2BE2;
border: none;



    &:hover {
      background-color:#9932CC
    }
`