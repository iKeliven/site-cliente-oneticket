import { Heading } from "./Heading"
import { useNavigate } from 'react-router-dom';


export default function Atalhos() {
    const navigate = useNavigate();

    return (
        <div className="shadow-md rounded-xl bg-white w-[16vw] flex flex-col items-center justify-start p-5 gap-5 z-[1]">
            <Heading size="medium">Atalhos</Heading>
            <button
                onClick={() => navigate('/eventos/novo')}
                className="cursor-pointer border-none p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate"
            >
                Cadastrar Evento
            </button>
            <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
                Cadastrar Postagem
            </button>
            <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
                Cadastrar Equipe
            </button>
            <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
                Cadastrar Produtor
            </button>
            <button className="cursor-pointer [border:none] p-5 bg-darkorange w-[15vw] rounded-md flex flex-row items-start justify-center font-bold hover:bg-chocolate">
                Cadastrar Maquininha
            </button>

        </div>
    )
}