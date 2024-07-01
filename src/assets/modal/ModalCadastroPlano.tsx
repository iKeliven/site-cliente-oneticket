import React, { useState } from 'react';
import { Modal, Button, TextField } from '@mui/material';
import { Heading } from '../components/Heading';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalCadastroPlano({ open, handleClose }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de envio do formulário
    // Aqui você pode enviar os dados para o servidor ou realizar outras operações
    console.log('Dados do plano:', { nome, descricao });
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-cadastro-plano"
      aria-describedby="modal-cadastro-plano"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="modal flex flex-col w-[30vw] p-5 rounded-lg bg-white">
        <div className="flex pb-2 mb-5 items-center justify-between" style={{ borderBottom: '2px solid #e2e2e2' }}>
          <Heading size='medium' id="modal-cadastro-plano">Cadastrar Plano</Heading>
          <CloseIcon sx={{ cursor: 'pointer', color: '#FF9800' }} onClick={handleClose} />
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Descrição"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            fullWidth
            multiline // Permite várias linhas para o Textarea
            rows={4} // Define o número de linhas visíveis
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
                  fontWeight: 'bold',
                  backgroundColor: 'transparent',
                  color: '#FF9800',
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
                  fontWeight: 'bold',
                  backgroundColor: '#FF9800',
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
