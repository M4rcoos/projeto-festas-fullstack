import React from 'react';
import {CardParty} from "../../components/CardParty/CardParty"
import * as C from "./styles"

export const Home = ()=>{
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Suas Festas</h1>
      <C.Section>

      <CardParty/>
      </C.Section>
    </div>
  )
}