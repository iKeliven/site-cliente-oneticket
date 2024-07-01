import React from "react";
import { TextField, Select, MenuItem, FormControl, InputLabel, Button, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import RoomIcon from '@mui/icons-material/Room';
import WifiIcon from '@mui/icons-material/Wifi';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import HeaderSection from "../components/HeaderSection";
import Footer from "../components/Footer";
import SidebarEvent from "../components/SidebarEvent";

const NovoEvento: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <div className="bg-white p-8 box-border gap-5 shadow-md rounded-xl">
            <h2 className="font-bold text-lg mb-6">Cadastrar Evento</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-bold">Organização</h3>
                <p className="text-sm">Selecione o responsável pelo evento</p>
                <FormControl fullWidth>
                  <InputLabel>Selecione...</InputLabel>
                  <Select label="Selecione...">
                    <MenuItem value="">
                      <em>Produtora XPTO</em>
                    </MenuItem>
                    {/* Adicione mais opções conforme necessário */}
                  </Select>
                </FormControl>
              </div>

              <div>
                <h3 className="font-bold">Nome do Evento</h3>
                <p className="text-sm ">Insira o nome do evento</p>
                <TextField fullWidth InputProps={{ endAdornment: <IconButton><EditIcon /></IconButton> }} />
              </div>

              <div>
                <h3 className="font-bold">Localização</h3>
                <p className="text-sm ">Escolha o formato e a localização do seu evento</p>
                <div className="flex items-center gap-2 mb-4">
                  <Button variant="contained" startIcon={<RoomIcon />} >
                    Presencial
                  </Button>
                  <Button variant="contained" startIcon={<WifiIcon />} >
                    Evento On-line
                  </Button>
                  <Button variant="contained" startIcon={<PhonelinkIcon />}>
                    Presencial + On-line
                  </Button>
                </div>
                <TextField fullWidth label="Nome do local" InputProps={{ endAdornment: <IconButton><EditIcon /></IconButton> }} />
                <TextField fullWidth label="Endereço" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField label="CEP" fullWidth />
                  <TextField label="Número" fullWidth />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <TextField label="Cidade" fullWidth />
                  <TextField label="UF" select fullWidth>
                    <MenuItem value="">
                      <em>--</em>
                    </MenuItem>
                    {/* Adicione mais opções conforme necessário */}
                  </TextField>
                </div>
              </div>

              <div>
                <h3 className="font-bold">Mapa de Lugares</h3>
                <p className="text-sm ">Mapa de lugares onde seu evento irá acontecer</p>
                <FormControl fullWidth>
                  <InputLabel>Sem mapa</InputLabel>
                  <Select label="Sem mapa">
                    {/* Adicione mais opções conforme necessário */}
                  </Select>
                </FormControl>
              </div>

              <div>
                <h3 className="font-bold">Data e horário</h3>
                <p className="text-sm">Insira as informações do seu evento</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Abertura do Evento"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <TextField label="Hora Início" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="11:00" />
                    <TextField label="Hora Final" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="23:00" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <TextField
                    label="Encerramento do Evento"
                    type="date"
                    fullWidth
                    InputLabelProps={{ shrink: true }}
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <TextField label="Hora Início" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="11:00" />
                    <TextField label="Hora Final" type="time" fullWidth InputLabelProps={{ shrink: true }} defaultValue="23:00" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-bold">Descrição do evento</h3>
                <p className="text-sm text-gray-500">Inclua a descrição com as características e atrações do evento, detalhe as classificações etárias e defina uma categoria que se encaixe com o perfil do seu evento.</p>
                <TextField label="Descrição do Evento" multiline rows={4} fullWidth />
                <TextField label="Classificação Etária" multiline rows={4} fullWidth />
                <TextField label="Categoria" select fullWidth>
                  <MenuItem value="">
                    <em>Show</em>
                  </MenuItem>
                  {/* Adicione mais opções conforme necessário */}
                </TextField>
                <TextField label="Categoria Secundária" select fullWidth>
                  <MenuItem value="">
                    <em>Selecione</em>
                  </MenuItem>
                  {/* Adicione mais opções conforme necessário */}
                </TextField>
              </div>
            </div>

            <div className="col-span-full flex items-center gap-4 mt-6">
              <Button variant="contained">Capa</Button>
              <Button variant="contained">Galeria</Button>
              <Button variant="contained">Mapa do local</Button>
            </div>

            <div className="col-span-full mt-6">
              <h3 className="font-bold">Imagem Selecionada</h3>
              <div className="w-full bg-gray-100 rounded-lg p-4">
                {/* Exemplo de imagem */}
                <img src="./example-image.jpg" alt="Imagem Selecionada" className="w-full rounded-lg" />
              </div>
            </div>

            <div className="col-span-full mt-6">
              <h3 className="font-bold">Imagens do evento</h3>
              <div className="flex gap-4">
                {/* Exemplo de miniaturas de imagens */}
                <img src="./example-thumbnail.jpg" alt="Imagem do Evento" className="w-24 h-24 rounded-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NovoEvento;
