import { Link, useLocation } from 'react-router-dom';
import AutoAwesomeMosaicOutlinedIcon from '@mui/icons-material/AutoAwesomeMosaicOutlined';
import SidebarItems from './SidebarItems'; // Certifique-se de importar o componente SidebarItems correto

export default function SidebarEvent() {
  const location = useLocation();

  return (
    <div className="left-0 shadow-md bg-white w-[15vw] flex flex-col items-start justify-start pt-[100px] p-4 gap-[40px] text-left">
      <div className="fixed">
        <div className="flex flex-col top-0 justify-start items-start">
          <div className="flex flex-col items-start">
          <Link to="/oneticket">
            <SidebarItems label="Página Inicial" active={location.pathname === '/oneticket'}> 
                  <AutoAwesomeMosaicOutlinedIcon sx={{ color: '#FF9800', fontSize: 40 }} />
                
              </SidebarItems>
            </Link>
            <Link to="/estabelecimentos">
            <SidebarItems label="Detalhes do Evento" active={location.pathname === '/estabelecimentos'}>
              
            </SidebarItems>
            </Link>
            <Link to="/produtoras">
              <SidebarItems label="Ingressos e Lotes" active={location.pathname === '/produtoras'}>
                
              </SidebarItems>
            </Link>
            <Link to="/planos">
            <SidebarItems label="Pontos de Venda" active={location.pathname === '/planos'}>
              
            </SidebarItems></Link>
            <Link to="/colaboradores">
            <SidebarItems label="Colaboradores" active={location.pathname === '/colaboradores'}>
              
            </SidebarItems></Link>

            <Link to="/Check-in"><SidebarItems label="Usuários" active={location.pathname === '/usuarios'}>
              
            </SidebarItems></Link>
            <Link to="/clientes">
            <SidebarItems label="Troca de Ingressos" active={location.pathname === '/clientes'}>
              
            </SidebarItems></Link>
            <Link to="/participante">
              <SidebarItems label="Pedidos e participantes" active={location.pathname === '/participante'}>
             
            </SidebarItems>
            </Link>
            
            <Link to="/ajuda">
              <SidebarItems label="Comunicados" active={location.pathname === '/ajuda'}>
             
            </SidebarItems>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
