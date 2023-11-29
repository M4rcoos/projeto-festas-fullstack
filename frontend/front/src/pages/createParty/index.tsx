
import { Header } from '../../components/Header/Header';
import { PartyForm } from '../../components/Form/Form';
import * as C from './styles'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from '../../components/Title/Title';


export const CreateParty = ()=>{


  return (
    <div>
      <Header/>
      <C.Section>
      <Title name='Crie sua próxima festa'/>
      

      <PartyForm/>
      <ToastContainer style={{marginTop:70}} />
      </C.Section>
    </div>
  )
}