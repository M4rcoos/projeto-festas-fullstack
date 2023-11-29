
import { Header } from '../../components/Header/Header';
import { PartyForm } from '../../components/Form/Form';
import * as C from './styles'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const CreateParty = ()=>{


  return (
    <div>
      <Header/>
      <C.Section>
      <h1 style={{textAlign:'center'}}>Crie sua Próxima festa</h1>

      <PartyForm/>
      <ToastContainer style={{marginTop:70}} />
      </C.Section>
    </div>
  )
}