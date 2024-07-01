import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import HeaderData from "../components/HeaderData";
import { Chip } from "@mui/material";
import Footer from "../components/Footer";
import ModalCadastroUsuario from "../modal/ModalCadastroUsuario";
import React, { useState } from "react";

export default function DadosParticipante() {
  const [openModal, setOpenModal] = useState(false);

  const handleAddNovoClick = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#e2e2e2]">
      <div className="flex">
        <Sidebar />
        <div className="flex flex-col w-[85vw]">
          <Header />
          <HeaderData titulo={"Cliente"} total={"nome aqui"} handleAddNovoClick={handleAddNovoClick} />
          <div className="flex bg-white items-center justify-between shadow-md rounded-lg m-5 p-8 gap-5 items-center w-[77vw]">
            <div className="flex items-center justify-between w-[90%]">
              <img src="Rectangle" alt="Perfil" className="rounded-lg w-[150px] h-[150px]" />
              <div className="flex flex-col">
                <p><strong>Nome: </strong></p>
                <p><strong>CPF: </strong></p>
                <p><strong>Telefone: </strong></p>
                <p><strong>Email: </strong></p>
              </div>
              <div className="flex flex-col">
                <p>João Carlos</p>
                <p>000.000.000-00</p>
                <p>48 99999-9999</p>
                <p>joaocarlos@gmail.com</p>
              </div>
              <div className="flex flex-col">
                <p><strong>Endereco: </strong></p>
                <p><strong>Setor: </strong></p>
                <p><strong>Data de Cadastro: </strong></p>
                <p><strong>Status: </strong></p>
              </div>
              <div className="flex flex-col">
                <p>Endereço aqui</p>
                <p>Financeiro</p>
                <p>00/00/000</p>
                <Chip label="Ativo" color="success" />
              </div>
            </div>
            
          </div>
          <div className="flex h-[24vh] justify-between rounded-lg m-5 p-8 gap-5 items-center w-[77vw]">
            </div>
        </div>
      </div>
      <Footer /> 
      <ModalCadastroUsuario open={openModal} handleClose={handleCloseModal} />

    </div>
  );
}
