import { FunctionComponent } from "react";

const Channels: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-10 box-border max-w-full text-left text-11xl-5 text-darkorange font-inter">
      <div className="w-[1550.4px] flex flex-col items-start justify-start gap-[80px_0px] max-w-full mq800:gap-[40px_0px] mq450:gap-[20px_0px]">
        <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px]">
          <b className="relative tracking-[-0.5px] leading-[40px] mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
            Aumente seus canais de venda e gere mais receita
          </b>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[0px_24px] max-w-full grid-cols-[repeat(4,_minmax(277px,_1fr))] text-lgi-2 text-black mq800:grid-cols-[minmax(277px,_1fr)] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(277px,_480px))]">
          <div className="flex flex-col items-start justify-start gap-[12px_0px] max-w-full">
            <div className="self-stretch h-[369.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start relative bg-[url('/public/divvimage3@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[369.6px] w-[369.6px] relative object-cover hidden min-h-[370px] max-w-full z-[0]"
                alt=""
                src="/divvimage--image@2x.png"
              />
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
              <div className="self-stretch flex-1 relative max-w-full z-[2]" />
            </div>
            <b className="relative tracking-[-0.25px] leading-[25px]">
              Site Blueticket
            </b>
            <div className="relative text-base-1 leading-[22px]">
              <p className="m-0">
                Gere mais visibilidade para seu evento listando em
              </p>
              <p className="m-0">nosso site</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px_0px] max-w-full text-lgi-1">
            <div className="self-stretch h-[369.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start relative bg-[url('/public/divvimage4@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[369.6px] w-[369.6px] relative object-cover hidden min-h-[370px] max-w-full z-[0]"
                alt=""
                src="/divvimage--image@2x.png"
              />
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
              <div className="self-stretch flex-1 relative max-w-full z-[2]" />
            </div>
            <b className="relative tracking-[-0.25px] leading-[25px]">
              Checkout no seu site
            </b>
            <div className="h-11 relative text-base-3 leading-[22px] flex items-center shrink-0 max-w-full">
              <span>
                <p className="m-0">
                  Melhore a experiência do seu cliente integrando o
                </p>
                <p className="m-0">checkout diretamente no seu site</p>
              </span>
            </div>
          </div>
          <div className="h-[462.6px] flex flex-col items-start justify-start gap-[12px_0px] max-w-full text-lgi-7">
            <div className="self-stretch flex-1 overflow-hidden flex flex-row items-start justify-start relative bg-[url('/public/divvimage5@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[369.6px] w-[369.6px] relative object-cover hidden min-h-[370px] max-w-full z-[0]"
                alt=""
                src="/divvimage--image@2x.png"
              />
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
              <div className="self-stretch flex-1 relative max-w-full z-[2]" />
            </div>
            <b className="relative tracking-[-0.25px] leading-[25px]">
              PDV Digital
            </b>
            <div className="relative text-base-1 leading-[22px]">
              <p className="m-0">Ambiente exclusivo para seus parceiros e</p>
              <p className="m-0">vendedores realizarem vendas digitais</p>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[12px_0px] max-w-full text-lgi-4">
            <div className="self-stretch h-[369.6px] overflow-hidden shrink-0 flex flex-row items-start justify-start relative bg-[url('/public/divvimage6@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full">
              <img
                className="h-[369.6px] w-[369.6px] relative object-cover hidden min-h-[370px] max-w-full z-[0]"
                alt=""
                src="/divvimage--image@2x.png"
              />
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
              <div className="self-stretch flex-1 relative max-w-full z-[2]" />
            </div>
            <b className="relative tracking-[-0.25px] leading-[25px]">
              POS Integrada
            </b>
            <div className="relative text-base-1 leading-[22px] inline-block max-w-full">
              <p className="m-0">
                Aceite pagamentos com cartão integrado à venda
              </p>
              <p className="m-0">de ingressos nos seus pontos de venda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Channels;