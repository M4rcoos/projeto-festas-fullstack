import React from 'react';
import {CardParty} from "../../components/CardParty/CardParty"
import { Header } from '../../components/Header/Header';
import { PartyForm } from '../../components/Form/Form';

export const CreateParty = ()=>{

  
  return (
    <div>
      <Header/>
      <h1 style={{textAlign:'center'}}>Crie sua Próxima festa</h1>
      <PartyForm/>
    </div>
  )
}