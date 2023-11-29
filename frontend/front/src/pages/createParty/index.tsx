import React from 'react';
import {CardParty} from "../../components/CardParty/CardParty"
import { Header } from '../../components/Header/Header';
import { PartyForm } from '../../components/Form/Form';
import * as C from './styles'

export const CreateParty = ()=>{

  
  return (
    <div>
      <Header/>
      <C.Section>
      <h1 style={{textAlign:'center'}}>Crie sua Próxima festa</h1>
      <PartyForm/>
      </C.Section>
    </div>
  )
}