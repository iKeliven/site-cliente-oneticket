import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Rating } from "@mui/material";
import { Heading } from "./Heading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Registrando os componentes e plugins necessários
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Feedback = ({ avaliacoes, comentarios, graficosDados }) => {
  return (
    <div className="bg-white w-[96vw] flex flex-col items-start justify-start p-5 box-border gap-5 shadow-md rounded-xl">
      <Heading size='medium'>Feedback e Avaliações</Heading>
      <div className="w-full flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold">Avaliação Média:</span>
            <Rating value={avaliacoes.media} readOnly />
            <span>({avaliacoes.media.toFixed(1)})</span>
          </div>
          <div className="w-[85vw] p-8">
            <Bar data={graficosDados} />
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <h3 className="font-bold mb-2 w-full">Comentários dos Participantes:</h3>
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
          >
            {comentarios.map((comentario, index) => (
              <SwiperSlide key={index} className="flex-1 min-w-[250px] mb-4 p-4 border border-gray-300 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold">{comentario.usuario}</span>
                  <Rating value={comentario.avaliacao} readOnly size="small" />
                </div>
                <span className="text-gray-500 text-sm">{comentario.data}</span>
                <p className="mt-2">{comentario.texto}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Feedback;