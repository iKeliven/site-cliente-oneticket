import { FunctionComponent } from "react";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";

const Benefits: FunctionComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center px-[80px] py-10 max-w-full">

      <div className="flex text-darkorange">
        <Heading size="large">Recursos especiais para <b className="text-black">gestão</b> do seu evento</Heading>
      </div>
      <div className="flex flex-row items-center p-10 justify-center gap-20 flex-wrap ">
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/lotes.png"
          />
          <Heading size="medium">
            Controle de Lotes
          </Heading>
          <Text size="medium">
            Programe viradas de lotes automáticas por quantidade ou data
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/checkin.png"
          />
          <Heading size="medium">
            Check-in
          </Heading>
          <Text size="medium">
            Apps (iOs e Android) para validação, sistema de listas e emissão de etiquetas
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/afiliados.png"
          />
          <Heading size="medium">
            Afiliados
          </Heading>
          <Text size="medium">
            Gerencie sua rede de afiliados e comissários com eficiência e transparência
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/passaportes.png"
          />
          <Heading size="medium">
            Passaportes
          </Heading>
          <Text size="medium">
            Fracione a receita de ingressos passaporte para eventos individuais
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/lotes.png"
          />
          <Heading size="medium">
            Gestão Financeira
          </Heading>
          <Text size="medium">
            Visualize saldos e solicite repasses sem burocracia
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/checkin.png"
          />
          <Heading size="medium">
            Múltiplos usuários
          </Heading>
          <Text size="medium">
            Crie usuários com perfil de acesso para cada função
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/afiliados.png"
          />
          <Heading size="medium">
            Página Personalizada
          </Heading>
          <Text size="medium">
            Deixe o evento com a sua cara com imagens e vídeos personalizados
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start w-[15vw] text-black">
          <img
            className="w-[40px] h-[40px] object-cover p-3 rounded-sm bg-white shadow-md"
            loading="lazy"
            alt=""
            src="/passaportes.png"
          />
          <Heading size="medium">
            Integrações
          </Heading>
          <Text size="medium">
            Integre com Facebook Pixel e Google Analytics e amplie sua gestão de marketing
          </Text>
        </div>
      </div>
    </div>
  )
};

export default Benefits;