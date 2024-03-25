import { FunctionComponent } from "react";

const Menager: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[39.90000000000009px] box-border max-w-full text-left text-11xl-8 text-darkorange font-inter">
      <div className="w-[1574.4px] flex flex-col items-start justify-start gap-[80px_0px] max-w-full mq800:gap-[40px_0px] mq450:gap-[20px_0px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">
          <b className="relative tracking-[-0.5px] leading-[40px] mq800:text-6xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
            Gerencie seus eventos com praticidade e autonomia
          </b>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[0px_32.9px] max-w-full text-lgi-4 text-black mq800:gap-[0px_16px] mq1300:flex-wrap">
          <div className="w-[623.1px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[623.1px] max-w-full mq800:min-w-full mq1300:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <b className="relative tracking-[-0.25px] leading-[25px]">
                Gestão fácil e rápida
              </b>
              <div className="self-stretch h-[84px] relative text-base leading-[22px] flex items-center shrink-0 z-[1]">
                <span>
                  <p className="m-0">
                    Cadastre seu evento em poucos minutos, das informações
                    iniciais até as configurações
                  </p>
                  <p className="m-0">mais avançadas</p>
                </span>
              </div>
              <b className="relative text-lgi-1 tracking-[-0.25px] leading-[25px] z-[2]">
                Relatórios detalhados
              </b>
              <div className="w-[541.9px] h-[62px] relative text-base leading-[22px] flex items-center shrink-0 max-w-full z-[3]">
                Os melhores relatórios do mercado para acompanhamento das suas
                vendas
              </div>
              <b className="relative tracking-[-0.25px] leading-[25px] z-[4]">
                Aplicativo do organizador
              </b>
              <div className="relative text-base-1 leading-[22px] inline-block max-w-full z-[5]">
                Tenha as principais informações na sua mão com nosso aplicativo
                iOS e Android
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start relative bg-[url('/public/divvimage1@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[597px] max-w-full mq800:min-w-full">
            <img
              className="h-[585.5px] w-[918.4px] relative object-cover hidden min-h-[586px] max-w-full z-[0]"
              alt=""
              src="/divvimage--image@2x.png"
            />
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
            <div className="h-[585.5px] flex-1 relative max-w-full z-[2]" />
          </div>
        </div>
      </div>
    </div>

  )
};
export default Menager;