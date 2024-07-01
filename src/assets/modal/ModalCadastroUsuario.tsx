import React, { useState } from 'react';
import { Modal, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Heading } from '../components/Heading';
import CloseIcon from '@mui/icons-material/Close';


export default function ModalCadastroUsuario({ open, handleClose }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cidadeEstado, setCidadeEstado] = useState('');
  const [setor, setSetor] = useState('');
  const [nivelAcesso, setNivelAcesso] = useState('');

  const handleSubmit = () => {
    // Aqui você pode enviar os dados para o servidor ou realizar outras operações
    console.log('Dados do Usuario:', { nome, cpf, email, telefone, dataNascimento, endereco, numero, complemento, cidadeEstado, setor, nivelAcesso });
    handleClose();
  };

  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-cadastro-usuario"
    aria-describedby="modal-cadastro-usuario"
    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
  >
    <div className="modal flex flex-col w-[30vw] p-5 rounded-lg bg-white">
      <div className="flex pb-2 mb-5 items-center justify-between" style={{ borderBottom: '2px solid #e2e2e2' }}>
          <Heading size='medium' id="modal-cadastro-usuario">Cadastrar Usuário</Heading>
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
        <div className="flex gap-5">
          <TextField
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            fullWidth
            required
          />

          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth 
            required
          />
        </div>
        <div className="flex gap-5">
          <TextField
            label="Telefone"
            value={telefone}
            onChange={(e) => setTelefone(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Data de Nascimento"
            value={dataNascimento}
            onChange={(e) => setDataNascimento(e.target.value)}
            fullWidth
            required
          />
        </div>
        <div className="flex gap-5">
          <TextField
            label="Endereço"
            value={endereco}
            onChange={(e) => setEndereco(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="Número"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            width="30%"
            required
          />
        </div>
        
        <div className="flex gap-5">
          <TextField
            label="Complemento"
            value={complemento}
            onChange={(e) => setComplemento(e.target.value)}
            fullWidth
          />
          <FormControl fullWidth required>
            <InputLabel id="cidade-estado-label">Cidade/Estado</InputLabel>
            <Select
              labelId="cidade-estado-label"
              id="cidade-estado"
              value={cidadeEstado}
              onChange={(e) => setCidadeEstado(e.target.value)}
            >
              <MenuItem value="Florianópolis/SC">Florianópolis/SC</MenuItem>
              <MenuItem value="Balneário Camboriú/SC">Balneário Camboriú/SC</MenuItem>
              <MenuItem value="Curitiba/PR">Curitiba/PR</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-5">
          <FormControl fullWidth required>
            <InputLabel id="setor-label">Setor</InputLabel>
            <Select
              labelId="setor-label"
              id="setor"
              value={setor}
              onChange={(e) => setSetor(e.target.value)}
            >
              <MenuItem value="Financeiro">Financeiro</MenuItem>
              <MenuItem value="Administração">Administração</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
              <MenuItem value="Produção">Produção</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel id="nivel-acesso-label">Nível de Acesso</InputLabel>
            <Select
              labelId="nivel-acesso-label"
              id="nivel-acesso"
              value={nivelAcesso}
              onChange={(e) => setNivelAcesso(e.target.value)}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
        
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
