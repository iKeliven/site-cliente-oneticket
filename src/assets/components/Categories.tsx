import Divpb from "./Divpb";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "react-responsive";

const categorias = [
  { imagem: '/show.png', titulo: 'Shows' },
  { imagem: '/teatro.png', titulo: 'Teatros' },
  { imagem: '/infantil.png', titulo: 'Infantil' },
  { imagem: '/curso.png', titulo: 'Cursos e Workshops' },
  { imagem: '/congresso.png', titulo: 'Congressos' },
  { imagem: '/esporte.png', titulo: 'Esportivos' },
  { imagem: '/museu.png', titulo: 'Exposições' },
];

export function Categories() {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 768px)" });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTabletOrMobile ? 3 : 4,
    slidesToScroll: isTabletOrMobile ? 3 : 4,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-[1300px] mx-auto">
      <div className="py-8 px-6">
        <b className="text-5xl leading-[38px] md:text-lg md:leading-[29px]">
          Categorias
        </b>
      </div>
      {isTabletOrMobile ? (
        <Slider {...settings}>
          {categorias.map((categoria, index) => (
            <div key={index} className="px-2">
              <Divpb divvImageImage={categoria.imagem} nome={categoria.titulo} />
            </div>
          ))}
        </Slider>
      ) : (
        <div className="flex flex-wrap justify-center">
          {categorias.map((categoria, index) => (
            <div key={index} className="px-2">
              <Divpb divvImageImage={categoria.imagem} nome={categoria.titulo} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
