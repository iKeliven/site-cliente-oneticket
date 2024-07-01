import { DeleteOutline, DriveFileRenameOutline } from '@mui/icons-material';
import { Heading } from './Heading';
import fundoFake from '../../../public/fundofake.png'; // Certifique-se de ajustar o caminho correto para a imagem
import Chip from '@mui/material/Chip'; // Importe o Chip do Material-UI

export default function PlanoItem({ nome }) {
    return (
        <div className="flex flex-col rounded-xl shadow-md w-[31%] bg-[#e2e2e2]  h-[250px]">
            <div className="flex justify-start p-5 items-end h-[20vh]"  style={{ backgroundImage: `url(${fundoFake})`, backgroundSize: 'cover' }}>
                <Heading size='large'>{nome}</Heading>
            </div>
            <div className="flex justify-between items-center p-5 ">
                <Chip label="Ativo" color="success" />
                <div className="flex">
                    <DeleteOutline sx={{ color: '#FF9800', fontSize: 40 }} />
                    <DriveFileRenameOutline sx={{ color: '#FF9800', fontSize: 40 }} />
                </div>
            </div>
        </div>
    )
}
