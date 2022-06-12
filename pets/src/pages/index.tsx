import type { NextPage } from 'next'
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';

import Titulo from '../ui/components/Titulo/Titulo';
import Lista from '../ui/components/Lista/Lista';
import { useIndex } from '../data/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { 
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
  } = useIndex();

  function handleCancelar() {
    setPetSelecionado(null);
    limparFormulario();
  }

  return (
    <div>
      <Titulo 
        titulo="" 
        subtitulo={
          <span>
            Com um pequeno valor mensal, você <br />
            pode <strong>adotar um pet virtualmente</strong>
          </span>
        }
      />

      <Lista 
        pets={listaPets}
        onSelect={ (pet) => setPetSelecionado(pet) }
      />

      <Dialog 
        open={ petSelecionado !== null }
        fullWidth
        PaperProps={{ sx: { p: 5 }}}
        onClose={ () => setPetSelecionado(null) }
      >
        <Grid container spacing={2} >
          <Grid item xs={12} >
            <TextField 
              label={'E-mail'}
              type={'email'}
              fullWidth
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            />
          </Grid>

          <Grid item xs={12} >
            <TextField 
              label={'Quantia por mês'}
              type={'number'}
              fullWidth
              value={valor}
              onChange={ (e) => setValor(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5}} >
          <Button
            color={'secondary'}
            onClick={ () => handleCancelar() }
          >
            Cancelar
          </Button>
          <Button
            variant={'contained'}
            onClick={ () => adotar(petSelecionado) }
          >
            Confirmar adoção
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={ () => setMensagem('') }
      />
    </div>
  )
}

export default Home
