import { FunctionComponent } from "react";

const Marketing: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[80.10000000000036px] box-border max-w-full text-left text-11xl-6 text-white font-inter mq450:pb-[34px] mq450:box-border mq1125:pb-[52px] mq1125:box-border">
      <div className="flex-1 flex flex-col items-center justify-start pt-10 px-5 pb-0 box-border gap-[80px_0px] bg-[url('/public/divbgferramentas@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:gap-[40px_0px] mq450:gap-[20px_0px]">
        <div className="w-[1574.1px] flex flex-row items-start justify-center max-w-full">
          <div className="flex flex-col items-start justify-start max-w-full">
            <div className="relative tracking-[-0.5px] leading-[40px] font-medium mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
              <span>{`Ferramentas de `}</span>
              <span className="text-darkorange">marketing</span>
              <span>{` e `}</span>
              <span className="text-darkorange">inteligência</span>
              <span> próprias</span>
            </div>
            <div className="flex flex-row items-start justify-start py-0 pr-3 pl-[11.300000000000011px] text-11xl-5">
              <div className="relative tracking-[-0.5px] leading-[40px] font-medium mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
                <span>{`para você `}</span>
                <span className="text-darkorange">atrair</span>
                <span>{`, `}</span>
                <span className="text-darkorange">{`entender `}</span>
                <span>{`e `}</span>
                <span className="text-darkorange">{`engajar `}</span>
                <span>seu público</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1574.4px] flex flex-row items-start justify-center gap-[0px_38.7px] max-w-full text-base mq800:gap-[0px_19px] mq1300:flex-wrap">
          <div className="w-[617.3px] flex flex-col items-start justify-start pt-10 px-0 pb-0 box-border min-w-[617.3px] max-w-full mq800:min-w-full mq1300:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <b className="relative text-lgi-1 tracking-[-0.25px] leading-[25px]">
                Relatórios Avançados
              </b>
              <div className="w-[512.1px] h-[62px] relative leading-[22px] flex items-center shrink-0 max-w-full">
                Entenda com profundidade quem está visitando a página do seu
                evento
              </div>
              <b className="relative text-lgi-4 tracking-[-0.25px] leading-[25px]">
                Modelos de Campanha
              </b>
              <div className="self-stretch h-[84px] relative leading-[22px] flex items-center shrink-0">
                <span>
                  <p className="m-0">
                    Crie campanhas com cupons especiais e envie para públicos
                    segmentados em poucos
                  </p>
                  <p className="m-0">cliques</p>
                </span>
              </div>
              <b className="relative text-lgi-2 tracking-[-0.25px] leading-[25px]">
                Atinja seu Público
              </b>
              <div className="relative text-base-1 leading-[22px] inline-block max-w-full">
                Fale com sua base de contatos com eficiência utilizando e-mail e
                SMS
              </div>
            </div>
          </div>
          <div className="flex-1 overflow-hidden flex flex-row items-start justify-start relative bg-[url('/public/divvimage2@3x.png')] bg-cover bg-no-repeat bg-[top] min-w-[597px] max-w-full mq800:min-w-full">
            <img
              className="h-[611.8px] w-[918.4px] relative object-cover hidden min-h-[612px] max-w-full z-[0]"
              alt=""
              src="/divvimage--image@2x.png"
            />
            <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] z-[1]" />
            <div className="h-[611.8px] flex-1 relative max-w-full z-[2]" />
          </div>
        </div>
      </div>
    </div>
  )
};
export default Marketing;
