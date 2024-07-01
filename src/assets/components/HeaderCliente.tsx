import { SearchOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Heading } from "./Heading";
import { Text } from "./Text";

export default function HeaderCliente({ titulo, total }) {
  return (
    <div className="flex justify-between items-center px-8 py-5">
      <div className="flex items-center gap-3">
        <Heading size="big">{titulo}</Heading>
        <Heading size="big">|</Heading>
        <Text size="medium" className="text-[darkOrange]">
          {total}
        </Text>
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
          style={{ backgroundColor: 'white', color: '#FF9800', border: '1px solid #FF9800', boxShadow: 'none'}}
        >
          Exportar
          <input type="file" style={{ display: 'none' }} />
        </Button>
      </div>
      
    </div>
  );
}
