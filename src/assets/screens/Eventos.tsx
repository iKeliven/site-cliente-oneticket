import { FunctionComponent } from "react";
import DashData from "../components/DashData";
import HeaderSection from "../components/HeaderSection";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Footer from "../components/Footer";
import ProximosEventos from "../components/ProximosEventos";
import Atalhos from "../components/Atalhos";
import FiltroEvento from "../components/FiltroEvento";
import Tarefas from "../components/Tarefas";
import SidebarEvent from "../components/SidebarEvent";
import ListaEventos from "../components/ListaEventos";
import FeedbackEvent from "../components/FeedbackEvent";
import HeaderPages from "../components/HeaderPages";

// Dados de exemplo
const avaliacoes = {
  media: 4.5,
};
const comentarios = [
  {
    usuario: "João Silva",
    avaliacao: 4,
    data: "2024-05-10",
    texto: "Ótimo evento! Muito bem organizado e divertido.",
  },
  {
    usuario: "Maria Oliveira",
    avaliacao: 5,
    data: "2024-05-08",
    texto: "Adorei a experiência, com certeza participarei novamente!",
  },
  {
    usuario: "Carlos Pereira",
    avaliacao: 5,
    data: "2024-05-07",
    texto: "Foi bom.",
  },
  {
    usuario: "João Silva",
    avaliacao: 4,
    data: "2024-05-10",
    texto: "Ótimo evento! Muito bem organizado e divertido.",
  },
  {
    usuario: "Maria Oliveira",
    avaliacao: 5,
    data: "2024-05-08",
    texto: "Adorei a experiência, com certeza participarei novamente!",
  },
  {
    usuario: "Carlos Pereira",
    avaliacao: 3,
    data: "2024-05-07",
    texto: "Foi bom, mas acho que poderia melhorar em alguns aspectos.",
  },
];


const graficosDados = {
  labels: ['1 Estrela', '2 Estrelas', '3 Estrelas', '4 Estrelas', '5 Estrelas'],
  datasets: [{
    label: 'Avaliações',
    data: [2, 3, 20, 40, 35],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
    ],
    borderWidth: 1,
  }],
};

const tarefas = [
  "Confirmar local do evento",
  "Enviar e-mails de confirmação",
  "Preparar materiais de marketing",
];

const alertas = [
  "Evento 'Festival de Cinema' em 2 dias",
  "Pendência de pagamento para 'Concerto'",
];

const Eventos: FunctionComponent = () => {
  return (
    <div className="flex flex-col w-[100vw]">
      <HeaderSection />
      <div className="flex">
        <SidebarEvent />
        <div className="flex w-[75vw] flex-col bg-[#e6e6e6] pt-[120px] gap-5 p-8 flex-grow">
          <HeaderPages />
          <div className="flex gap-5">
            <ListaEventos />
            <FiltroEvento />

          </div>

          <FeedbackEvent avaliacoes={avaliacoes} comentarios={comentarios} graficosDados={graficosDados} />
          <Tarefas tarefas={tarefas} alertas={alertas} />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Eventos;
