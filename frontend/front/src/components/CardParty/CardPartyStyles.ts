import styled from "styled-components";

export const Card = styled.div`
width: 400px;

@media (max-width: 430px) {
  width: 300px;
  }
`
export const Img = styled.img`
  width: 100%;
  height: 300px; 
  border-radius: 5px 5px 0 0;
  margin: 0;
  object-fit: cover; /* Mantém a proporção e corta a imagem para preencher o contêiner */
  object-position: center; /* Centraliza a imagem no contêiner (pode ser ajustado conforme necessário) */
  @media (max-width: 430px) {
    height: 200px;
  }
`
export const DivImg = styled.div`
  width: 100%;
  height: 300px; /* Altura desejada para as imagens dentro do card */
  overflow: hidden; /* Esconde qualquer parte da imagem que exceda os limites do container */
  @media (max-width: 430px) {
    height: 200px;
  }
`;
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
    overflow: hidden;

`
export const Btn = styled.a`
 text-decoration: none;
    padding: 4px 12px;
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