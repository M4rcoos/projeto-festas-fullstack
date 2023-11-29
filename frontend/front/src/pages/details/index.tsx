import { Header } from '../../components/Header/Header';
import { PartyForm } from '../../components/Form/FormUpdate';
import { ToastContainer } from 'react-toastify';

import * as C from './styles'


export const Details = ()=>{
  return (
    <div>
      <Header/>
      <C.Section>
      <h1 style={{textAlign:'center'}}>Editar festa</h1>

      <PartyForm/>
      <ToastContainer style={{marginTop:70}} />
      </C.Section>
      
    </div>
  )
}