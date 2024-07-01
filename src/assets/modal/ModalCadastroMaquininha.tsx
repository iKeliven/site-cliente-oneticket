import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { Heading } from '../components/Heading';
import CloseIcon from '@mui/icons-material/Close';


export default function ModalCadastroUsuario({ open, handleClose }) {
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o servidor ou realizar outras operações
    console.log('Dados do produtor:', { numero, cidade });
    handleClose();
  };

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-cadastro-maquininha"
    aria-describedby="modal-cadastro-maquininha"
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <div className="modal flex flex-col w-[30vw] p-5 rounded-lg bg-white">
      <div className="flex pb-2 mb-5 items-center justify-between" style={{ borderBottom: '2px solid #e2e2e2' }}>
          <Heading size='medium' id="modal-cadastro-maquininha">Cadastrar Maquininha</Heading>
          <CloseIcon sx={{ cursor: 'pointer', color: '#FF9800' }} onClick={handleClose} />
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
        <TextField
          label="Número"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          fullWidth
          required
        />
          <TextField
            label="Cidade"
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            fullWidth
            required
          />
        <div className="flex justify-end gap-5">
        <Button
            variant="contained"
            sx={{
                boxShadow: 'none',
                backgroundColor: '#FF9800AA',
                color: '#fff',
                width: '200px',
                padding: '5px',
                '&:hover': {
                fontWeight: 'bold', // Deixa o texto em negrito no hover
                backgroundColor: 'transparent', // Mantém o fundo transparente no hover
                color: '#FF9800', // Mantém a cor do texto no hover
                },
            }}
            onClick={handleClose}
            >
                Cancelar
            </Button>
            <Button
            type="submit"
            variant="contained"
            sx={{
                boxShadow: 'none',
                backgroundColor: '#FF9800',
                color: '#fff',
                width: '200px',
                padding: '5px',
                border: 'none',
                '&:hover': {
                fontWeight: 'bold', // Deixa o texto em negrito no hover
                backgroundColor: '#FF9800', // Mantém a cor de fundo no hover
                },
            }}
            >
                Cadastrar
            </Button>
        </div>
      </form>
    </div>
  </Modal>
  );
}
