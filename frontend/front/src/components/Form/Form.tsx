import { useForm } from "react-hook-form";
import { apiParty } from "../../provider/party";
import * as C from './FormStyles'



interface IParty {
    author: string;
    title: string;
    description: string;
    budget: number;
    image: string;
  }
  
  export const PartyForm = () => {
    const { register, handleSubmit,reset  } = useForm<IParty>();
  
    const onSubmit = (formData: IParty) => {
        apiParty.post('/', formData)
        .then((response) => {
          
          console.log('Resposta da API:', response.data);
        })
        .catch((error) => {
          // Aqui você pode lidar com erros, se houver
          console.error('Erro ao enviar dados:', error);
        });
        reset();
    };
  
    return (
        <>
      <C.Form onSubmit={handleSubmit(onSubmit)}>
        <C.Input {...register("author")} placeholder="Nome do anfitrião" required/>
        <C.Input {...register("title")} placeholder="nome da festa" required/>
        <C.Input {...register("description")} placeholder="Descrição" required/>
        <C.Input {...register("budget")} placeholder="Orçamento" required/>
        <C.Input {...register("image")} placeholder="Url da imagem" required/>
        <C.InputSubmit type="submit" />
      </C.Form>
      </>

    );
}