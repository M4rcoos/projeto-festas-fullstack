import { Header } from '../../components/Header/Header';
import { PartyForm } from '../../components/Form/FormUpdate';
import { ToastContainer } from 'react-toastify';

import * as C from './styles'
import { Title } from '../../components/Title/Title';


export const Details = ()=>{
  return (
    <div>
      <Header/>
      <C.Section>
      <Title name='Editar festa'/>
     

      <PartyForm/>
      <ToastContainer style={{marginTop:70}} />
      </C.Section>
      
    </div>
  )
}