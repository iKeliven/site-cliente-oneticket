import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon, Refresh as RefreshIcon } from '@mui/icons-material';
import { Heading } from './Heading';

const rows = [
  { id: 1, evento: 'Concerto', data: '10/05/2024', cidade: 'Florianópolis - SC', status: 'encerrado', vendidos: 50, total: 100 },
  { id: 2, evento: 'Espetáculo da Chapeuzinho', data: '10/05/2024', cidade: 'Florianópolis - SC', status: 'ativo', vendidos: 50, total: 100 },
  { id: 3, evento: 'Festival de Cinema', data: '10/05/2024', cidade: 'Florianópolis - SC', status: 'ativo', vendidos: 50, total: 100 },
  { id: 4, evento: 'Os Três Porquinhos', data: '10/05/2024', cidade: 'Florianópolis - SC', status: 'ativo', vendidos: 50, total: 100 },
  { id: 5, evento: 'Exposição de Fotografia', data: '10/05/2024', cidade: 'Florianópolis - SC', status: 'ativo', vendidos: 50, total: 100 },
];

const ProximosEventos = () => {
  return (
    <div className="bg-white w-[95vw] flex flex-col items-start justify-start p-5 box-border gap-5 shadow-md rounded-xl">
      <Heading size='medium'>Próximos Eventos</Heading>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Nome do evento</TableCell>
              <TableCell>Cidade</TableCell>
              <TableCell>Quando</TableCell>
              <TableCell>Ingressos</TableCell>
              <TableCell>Gerenciar</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={row.status === 'ativo' ? 'success' : 'error'}
                    variant="outlined"
                    size="small"
                  />
                </TableCell>
                <TableCell>
                  <div>
                    <strong>{row.evento}</strong>
                    <div>descrição</div>
                  </div>
                </TableCell>
                <TableCell>{row.cidade}</TableCell>
                <TableCell>{row.data}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <span>{row.vendidos}</span>
                    <span className="flex-grow h-2 bg-gray-200 rounded">
                      <span className="block h-full bg-orange-500 rounded" style={{ width: `${(row.vendidos / row.total) * 100}%` }}></span>
                    </span>
                    <span>{row.total}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <IconButton size="small">
                    <RefreshIcon style={{ color: '#f97316' }}/>
                  </IconButton>
                  <IconButton size="small">
                    <EditIcon  style={{ color: '#f97316' }}/>
                  </IconButton>
                  <IconButton size="small">
                    <DeleteIcon style={{ color: '#f97316' }} />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default ProximosEventos;
