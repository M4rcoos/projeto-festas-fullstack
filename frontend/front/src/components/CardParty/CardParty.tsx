import React, { useEffect, useState } from 'react';
import { apiParty } from '../../provider/party';
import * as C from './CardPartyStyles';
import search from '../../assets/searchZero.svg'
import { Title } from '../Title/Title';

interface IParty {
  _id: string;
  title: string;
  author: string;
  description: string;
  budget: number;
  image: string;
  services: any[];
}

export const CardParty = () => {
  const [parties, setParties] = useState<IParty[]>([]);


 useEffect(()=>{
  apiParty.get('/')
  .then((response)=> {setParties(response.data)}
  );
 },[])

  return (
   <>
   {parties.length > 0 ? (
      parties.map((party, index) => (
        <C.Card key={index}>
          <C.DivImg>
  
          <C.Img src={party.image} alt={party.title} />
          </C.DivImg>
          <C.Footer>
            <C.Title>{party.title}</C.Title>
            <C.Btn  to={`/atualizar/${party._id}`}>Detalhes</C.Btn>
          </C.Footer>
        </C.Card>
      ))
   ) : <>
     <C.CardNone>

     <Title name='Você ainda não tem festa crie uma...'/>
 
<img src={search} alt={"mulher procurando alguma coisa"} />
</C.CardNone>
   </>
   
   }
   </>
  );
}