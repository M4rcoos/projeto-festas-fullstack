import * as C from './FormStyles';
import { useForm } from 'react-hook-form';
import { apiParty } from '../../provider/party';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IParty {
  author: string;
  title: string;
  description: string;
  budget: number;
  image: string;
}





export const PartyForm = () => {
const { register, handleSubmit, reset } = useForm<IParty>();

const onSubmit = (formData: IParty) => {
  apiParty
    .post('/', formData)
    .then((response) => {
      if (response.data && response.data.msg) {
        toast.success(response.data.msg); 
      }
    })
    .catch(() => {
      toast.error("Erro ao criar festa"); 
    });
  reset();
};
  return (
    <C.Form onSubmit={handleSubmit(onSubmit)}>
      <C.Input {...register('author')} placeholder="Nome do anfitrião" required />
      <C.Input {...register('title')} placeholder="Nome da festa" required />
      <C.Input {...register('description')} placeholder="Descrição" required />
      <C.Input {...register('budget')} placeholder="Orçamento" required />
      <C.Input {...register('image')} placeholder="URL da imagem" required />
      <C.InputSubmit type="submit" />
    </C.Form>
  );
};
