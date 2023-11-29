import React from 'react';
import {CardParty} from "../../components/CardParty/CardParty"
import * as C from "./styles"
import { Header } from "../../components/Header/Header"
import { Title } from '../../components/Title/Title';
export const Home = ()=>{
  return (
    <div>
      <Header/>
      <Title name='Suas festas'/>
      <C.Section>

      <CardParty/>
      </C.Section>
    </div>
  )
}