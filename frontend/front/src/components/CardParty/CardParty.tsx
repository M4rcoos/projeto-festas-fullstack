import React, { useEffect, useState } from 'react';
import { apiParty } from '../../provider/party';
import * as C from './CardPartyStyles';

interface IParty {
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
  apiParty.get('/').then((response)=> setParties(response.data));
 },[])

  return (
   <>
   {
    parties.map((party, index) => (
      <C.Card key={index}>
        <C.DivImg>

        <C.Img src={party.image} alt={party.title} />
        </C.DivImg>
        <C.Footer>
          <C.Title>{party.title}</C.Title>
          <C.Btn>Detalhes</C.Btn>
        </C.Footer>
      </C.Card>
    ))
   }
   </>
  );
}