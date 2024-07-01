import { DataGrid } from '@mui/x-data-grid';
import { Heading } from './Heading';

// Dados de exemplo para a tabela
const rows = [
  { id: 1, atividade: 'Fac Atendido: João', data: '2024-05-05', tipo: 'Atualização', status: 'Concluído' },
  { id: 2, atividade: 'Cadastro Teatro CIC', data: '2024-05-06', tipo: 'Cadastro', status: 'Em andamento' },
  // Adicione mais linhas conforme necessário
];

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'atividade', headerName: 'Atividade', width: 350 },
  { field: 'data', headerName: 'Data', width: 200 },
  { field: 'tipo', headerName: 'Tipo', width: 300 },
  { field: 'status', headerName: 'Status', width: 120 },
];

export default function Sheets() {
  return (
    <div className="bg-white w-[79vw] flex flex-col items-start justify-start p-5 box-border gap-5 shadow-md rounded-xl">
      <Heading size='medium'>Atividades Recentes</Heading>
      <div className="self-stretch flex flex-row items-center justify-between py-[10.5px] pr-6 pl-0 gap-[20px] mq650:flex-wrap">
        {/* Renderizar a tabela */}
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10]}z
          checkboxSelection
        />
      </div>
    </div>
  );
}
