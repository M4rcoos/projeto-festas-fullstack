import { useForm } from "react-hook-form";
import { apiParty } from "../../provider/party";



interface IParty {
    author: string;
    title: string;
    description: string;
    budget: number;
    image: string;
  }
  
  export const PartyForm = () => {
    const { register, handleSubmit } = useForm<IParty>();
  
    const onSubmit = (formData: IParty) => {
        apiParty.post('/', formData)
        .then((response) => {
          
          console.log('Resposta da API:', response.data);
        })
        .catch((error) => {
          // Aqui você pode lidar com erros, se houver
          console.error('Erro ao enviar dados:', error);
        });
    };
  
    
    return (
        <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("author")} placeholder="Nome do anfitrião" />
        <input {...register("title")} placeholder="nome da festa" />
        <input {...register("description")} placeholder="Descrição" />
        <input {...register("budget")} placeholder="Orçamento" />
        <input {...register("image")} placeholder="Imagem" />
        <input type="submit" />
      </form>
      </>

    );
}