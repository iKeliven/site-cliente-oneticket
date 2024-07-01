import { Avatar, IconButton, Button } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

export default function HeaderSection() {
  return (
    <div className="flex justify-between items-center fixed w-full top-0 py-5 px-10 bg-[#D9D9D9] z-50">
      <section className='flex flex-col'>
        <img src="./logo-black.png" alt="OneTicket" className="h-7" />
      </section>
      <section className="flex gap-5">
        <nav className="flex gap-5">
          <ul className="flex gap-5 list-none">
            <li>
              <a href="/eventos" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
                Eventos
              </a>
            </li>
            <li>
              <a href="" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
                Canais de venda
              </a>
            </li>
            <li>
              <a href="" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
                Relatórios
              </a>
            </li>
            <li>
              <a href="" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
                Financeiro
              </a>
            </li>
            <li>
              <a href="" className="font-bold pb-2 border-b-2 border-transparent hover:border-current">
                Marketing
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <IconButton 
            className="cursor-pointer"
            sx={{ color: '#000', background: '#fff', padding: '10px', borderRadius: '10px' }}
          >
            <NotificationsIcon />
          </IconButton>
          <Button
            endIcon={<HelpOutlineIcon />}
            sx={{ color: '#000', background: '#fff', padding: '10px 20px', borderRadius: '25px' }}
          >
            Ajuda
          </Button>
          <Avatar className="cursor-pointer" alt="Joao Sharp">JC</Avatar>
        </div>
      </section>
    </div>
  );
}
