import { useState, useEffect } from 'react';
import { AxiosError } from 'axios';

import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/ApiService';

export function useIndex() {
  const 
    [listaPets, setListaPets] = useState<Pet[]>([]),
    [petSelecionado, setPetSelecionado] = useState<Pet | null>(null),
    [email, setEmail] = useState(''),
    [valor, setValor] = useState(''),
    [mensagem, setMensagem] = useState('');

  useEffect(() => {
    ApiService.get('/pets')
      .then( (resposta) => {
        setListaPets(resposta.data);
      })
  }, [])

  // Outra maneira de limpar os dados do formulário
  //
  // useEffect(() => {
  //   if(petSelecionado === null) {
  //     limparFormulario();
  //   }
  // }, [petSelecionado])

  function adotar() {
    if(petSelecionado !== null) {
      if(validarDadosAdocao()) {
        ApiService.post('/adocoes', {
          pet_id: petSelecionado.id,
          email,
          valor
        })
          .then( () => {
            setPetSelecionado(null);
            setMensagem('Pet adotado com sucesso!');
            limparFormulario(); // vide useEffect acima
          })
          .catch( (error: AxiosError) => {
            setMensagem(error.response?.data.message);
          })
      } else {
        setMensagem('Preencha os campos corretamente')
      }
    }
  }

  function validarDadosAdocao() {
    return email.length > 0 && valor.length > 0;
  }

  function limparFormulario() {
    setEmail('');
    setValor('');
  }


  return {
    listaPets,
    petSelecionado,
    setPetSelecionado,
    email,
    setEmail,
    valor,
    setValor,
    mensagem,
    setMensagem,
    adotar,
    limparFormulario
  };
}