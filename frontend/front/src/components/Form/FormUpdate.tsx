import * as C from './FormStyles';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { apiParty } from '../../provider/party';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

interface IParty {
  _id: string;
  title: string;
  author: string;
  description: string;
  budget: number;
  image: string;
  services: any[];
 
}

export const PartyForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<IParty>();
  const { _id } = useParams<{ _id: string }>(); 
  const [formData, setFormData] = useState<IParty | null>(null)

  useEffect(() => {
    if (_id) {
      apiParty.get(`/${_id}`).then((response) => {
        const data = response.data;
        if (data) {
          reset({
            title: data.title,
            author: data.author,
            description: data.description,
            budget: data.budget,
            image: data.image,
          });
        }
      });
    }
  }, [_id, reset]);

  const onSubmit = (formData: IParty) => {
    apiParty
      .put(`/${_id}`, formData)
      .then((response) => {
        if (response.data) {
          toast.success(response.data.msg); 
          reset({ ...formData })
        }
      })
      .catch(() => {
        toast.error("Erro ao atualizar festa"); 
      });
    reset();
  };
  const onDelete = () => {
    confirmAlert({
      title: 'Excluir',
      message: 'Tem certeza?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => {
            apiParty
              .delete(`/${_id}`)
              .then((response) => {
                if (response.data) {
                  toast.success(response.data.msg + "Voltando para a pagina inicial"); 
                  reset()
                }
              })
              .catch(() => {
                toast.error("Erro ao deletar festa"); 
              });
            reset();
            setTimeout(() => {
              navigate('/'); 
            }, 5000); // 
          }
        },
        {
          label: 'Não',
          onClick: () => navigate('/atualizar/' + _id)
        }
      ]
    });
  };

  return (
    <>
      <C.InputDelet onClick={onDelete}>Excluir</C.InputDelet>

    <C.Form onSubmit={handleSubmit(onSubmit)}>
      <C.Input {...register('author')} placeholder="Nome do anfitrião" required />
      <C.Input {...register('title')} placeholder="Nome da festa" required />
      <C.Input {...register('description')} placeholder="Descrição" required />
      <C.Input {...register('budget')} placeholder="Orçamento" required />
      <C.Input {...register('image')} placeholder="URL da imagem" required />
      <C.InputSubmit type="submit" />
    </C.Form>
    </>
  );
};

