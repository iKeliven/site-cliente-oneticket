import { SearchOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Heading } from "./Heading";
import { Text } from "./Text";
import { useNavigate } from 'react-router-dom';

export default function HeaderPages({ titulo, total, handleAddNovoClick }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center gap-3">

        <a href="/eventos" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
          <Heading size="big">Eventos</Heading>
        </a>

        <Heading size="big">|</Heading>

        <a href="/" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
                    <Heading size="big">Postagens</Heading>
        </a>

      </div>
      <div className="flex items-center gap-5">
        <div className="flex">
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-white px-5 py-3 rounded-l-xl text-black outline-none w-[150px] focus:w-[200px] transition-all duration-500"
          />
          <div className="bg-white px-5 pt-2 items-center rounded-r-xl cursor-pointer">
            <SearchOutlined sx={{ color: 'gray' }} />
          </div>
        </div>
        <Button
          component="label"
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
          style={{ backgroundColor: 'white', color: '#FF9800', border: '1px solid #FF9800', boxShadow: 'none' }}
        >
          Exportar
          <input type="file" style={{ display: 'none' }} />
        </Button>
        <Button
          variant="contained"
          style={{ backgroundColor: '#FF9800', color: '#fff', border: '1px solid #FF9800', boxShadow: 'none' }}
          onClick={() => navigate('/eventos/novo')}
        >
          Cadastrar Novo
        </Button>
      </div>

    </div>
  );
}
