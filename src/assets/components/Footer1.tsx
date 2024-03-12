import { FunctionComponent } from "react";


const Footer: FunctionComponent = () => {
  return (
    <footer className="self-stretch bg-black flex flex-row items-center justify-center p-[45px] box-border max-w-full text-left text-base-3 text-white font-www-blueticket-com-br-1680x783-default-inter-medium-1356 mq450:pt-[29px] mq450:pb-[29px] mq450:box-border mq900:pl-[22px] mq900:pr-[22px] mq900:box-border">
      <div className="flex-1 flex flex-row flex-wrap items-center justify-center max-w-full">
        <div className="w-[1300px] flex flex-col items-start justify-start gap-[48px_0px] max-w-[1300px] mq900:gap-[48px_0px] mq1300:max-w-full">
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-[11px] pl-0 box-border max-w-full">
            <div className="w-[211px] flex flex-row items-center justify-start">
              <div className="w-[121px] flex flex-row items-start justify-center pt-0 px-0 pb-[50px] box-border">
                <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[1px_0px]">
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-6">
                    <div className="relative leading-[18px] font-medium">
                      Sobre Nós
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-4 pr-px pl-0 text-mini-9">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[15px_0px]">
                      <div className="relative leading-[18px]">Serviços</div>
                      <div className="relative text-base-3 leading-[18px]">
                        Logomarca
                      </div>
                      <div className="relative text-base-4 leading-[18px] whitespace-nowrap">
                        Central de Ajuda
                      </div>
                    </div>
                  </div>
                  <div className="relative text-mini leading-[18px]">
                    Fale Conosco
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[252px] flex flex-row items-center justify-start ml-[-3.3px]">
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-[84px]">
                <div className="flex flex-col items-start justify-start gap-[16px_0px]">
                  <div className="flex flex-col items-start justify-start">
                    <div className="flex flex-row items-start justify-start pt-0 pb-6 pr-4 pl-0">
                      <div className="relative leading-[18px] font-medium">
                        Para Consumidores
                      </div>
                    </div>
                    <div className="relative text-base-1 leading-[18px]">
                      Política de Privacidade
                    </div>
                  </div>
                  <div className="relative text-mini-8 leading-[18px]">
                    Termos de Uso
                  </div>
                  <div className="relative text-base-4 leading-[18px]">
                    Meia Entrada
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[275px] flex flex-row items-center justify-start ml-[-3.3px] text-mini">
              <div className="flex flex-row items-start justify-center pt-0 px-0 pb-4">
                <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0 gap-[1px_0px]">
                  <div className="flex flex-row items-start justify-start pt-0 pb-6 pr-[38px] pl-0 text-base-3">
                    <div className="relative leading-[18px] font-medium">
                      Para Organizadores
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[15px] justify-start pt-0 px-0 pb-[15px]">
                    <div className="relative leading-[18px]"><a href="../shows">Shows</a></div>
                    <div className="relative leading-[18px]">Teatros</div>
                    <div className="relative text-mini leading-[18px]">Casas Noturnas</div>
                    <div className="relative leading-[18px]">Workshows e Congressos</div>
                    <div className="relative leading-[18px]">Eventos Esportivos</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[212px] flex-1 relative min-w-[335px] min-h-[24px] max-w-full ml-[-3.3px]" />
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px_0px] max-w-full">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-white" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full mq900:flex-wrap">
              <div className="h-[34px] w-6 relative hidden" />
              <div className="w-[162px] overflow-hidden shrink-0 flex flex-col items-center justify-center pt-px px-0 pb-0 box-border relative">
                <div className="w-[268px] my-0 mx-[!important] absolute right-[-111.9px] bottom-[7.6px] flex flex-col items-start justify-start">
                  <img
                    className="w-[150px] h-[17px] relative object-cover"
                    loading="eager"
                    alt=""
                    src="/captura-de-tela-20240206-as-1750-2@2x.png"
                  />
                </div>
                <div className="self-stretch h-[33px] flex flex-row items-start justify-start py-0 px-0 box-border">
                  <div className="mb-[-1px] h-[34px] w-[289px] relative z-[1]" />
                </div>
              </div>
              <div className="h-[34px] w-[614px] relative max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
