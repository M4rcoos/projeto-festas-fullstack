import styled from "styled-components";

export const Form =styled.form`
display: flex;
flex-direction: column;
gap:2rem;

width: 500px;
padding: 2rem 2rem 5rem 2rem;
border: 1px solid #9932CC;
border-radius:8px;
box-shadow: -7px 1px 22px 5px rgba(0,0,0,0.21);

@media (max-width: 570px) {
    width: 300px;
  }
  @media (max-width: 420px) {
    width: 280px;
padding: 2rem 2rem 4rem 2rem;
  }
`
export const Input = styled.input`
padding: 15px 8px;
border-radius: 4px;
border: 1px solid;

&:focus{
  outline: none;
  border: 1px solid #8A2BE2;
}
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
export const InputDelet = styled.button`

text-decoration: none;
    padding: 8px 16px;
    border-radius:8px;
    cursor: pointer;
    color: #fff;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1rem;
    transition: 0.7s;
    background-color: #b81414  ;
border: none;



    &:hover {
      background-color: #e61919
    }
`