import React, { useState } from 'react';
import { Modal, Button, TextField, FormControl, FormControlLabel, Checkbox } from '@mui/material';
import { Heading } from '../components/Heading';
import CloseIcon from '@mui/icons-material/Close';

export default function ModalCadastroProdutora({ open, handleClose }) {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [tipoIndividual, setTipoIndividual] = useState(false);
  const [tipoEmpresarial, setTipoEmpresarial] = useState(false);
  const [razaoSocial, setRazaoSocial] = useState('');
  const [nomeFantasia, setNomeFantasia] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [emailInstitucional, setEmailInstitucional] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [cep, setCep] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [banco, setBanco] = useState('');
  const [agencia, setAgencia] = useState('');
  const [conta, setConta] = useState('');
  const [tipoConta, setTipoConta] = useState('');

  const handleTipoIndividualChange = (event) => {
    setTipoIndividual(event.target.checked);
    setTipoEmpresarial(false);
  };

  const handleTipoEmpresarialChange = (event) => {
    setTipoEmpresarial(event.target.checked);
    setTipoIndividual(false);
  };

  const handleNextPage = () => {
    if (tipoIndividual || tipoEmpresarial) {
      if (tipoIndividual) {
        console.log('Página 2: Razão Social, Nome Fantasia, CNPJ, Email Institucional');
      } else if (tipoEmpresarial) {
        console.log('Página 2: Endereço');
      }
      // Adicionar lógica para navegar para a próxima página ou enviar os dados para o servidor
    } else {
      console.log('Selecione um tipo antes de prosseguir.');
    }
  };

  const handleNextToBankPage = () => {
    console.log('Página 3: Dados Bancários');
    // Adicionar lógica para navegar para a próxima página ou enviar os dados para o servidor
  };

  const handleSuccess = () => {
    console.log('Produtora cadastrada com sucesso');
    // Adicionar lógica para direcionar para a página ProdutoraDados
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-cadastro-produtor"
      aria-describedby="modal-cadastro-produtor"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <div className="modal flex flex-col w-[30vw] p-5 rounded-lg bg-white">
        <div className="flex pb-2 mb-5 items-center justify-between" style={{ borderBottom: '2px solid #e2e2e2' }}>
          <Heading size='medium' id="modal-cadastro-produtor">Cadastrar Produtora</Heading>
          <CloseIcon sx={{ cursor: 'pointer', color: '#FF9800' }} onClick={handleClose} />
        </div>
        <form className='flex flex-col gap-5'>
          <TextField
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            fullWidth
            required
          />
          <TextField
            label="CPF"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            fullWidth
            required
          />
          <div className="flex gap-5">
            <TextField
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              fullWidth
              required
            />
          </div>
          <div className="flex gap-5">
            <FormControlLabel
              control={<Checkbox checked={tipoIndividual} onChange={handleTipoIndividualChange} />}
              label="Individual"
            />
            <FormControlLabel
              control={<Checkbox checked={tipoEmpresarial} onChange={handleTipoEmpresarialChange} />}
              label="Empresarial"
            />
          </div>
          
          {tipoIndividual && (
            <>
              <TextField
                label="Razão Social"
                value={razaoSocial}
                onChange={(e) => setRazaoSocial(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Nome Fantasia"
                value={nomeFantasia}
                onChange={(e) => setNomeFantasia(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="CNPJ"
                value={cnpj}
                onChange={(e) => setCnpj(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Email Institucional"
                value={emailInstitucional}
                onChange={(e) => setEmailInstitucional(e.target.value)}
                fullWidth
                required
              />
              <Button variant="contained" onClick={handleNextPage}>Próxima Página</Button>
            </>
          )}

          {tipoEmpresarial && (
            <>
              <TextField
                label="Endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Complemento"
                value={complemento}
                onChange={(e) => setComplemento(e.target.value)}
                fullWidth
              />
              <TextField
                label="CEP"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                fullWidth
                required
              />
              <div className="flex gap-5">
                <TextField
                  label="Cidade"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  fullWidth
                  required
                />
                <TextField
                  label="Estado"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  fullWidth
                  required
                />
              </div>
              <Button variant="contained" onClick={handleNextPage}>Próxima Página</Button>
            </>
          )}

          {endereco && (
            <>
              <TextField
                label="Banco"
                value={banco}
                onChange={(e) => setBanco(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Agência"
                value={agencia}
                onChange={(e) => setAgencia(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Conta"
                value={conta}
                onChange={(e) => setConta(e.target.value)}
                fullWidth
                required
              />
              <TextField
                label="Tipo de Conta"
                value={tipoConta}
                onChange={(e) => setTipoConta(e.target.value)}
                fullWidth
                required
              />
              <Button variant="contained" onClick={handleNextToBankPage}>Próxima Página</Button>
            </>
          )}

          {banco && (
            <>
              <Button variant="contained" onClick={handleSuccess}>Cadastrar</Button>
            </>
          )}

        </form>
      </div>
    </Modal>
  );
}
