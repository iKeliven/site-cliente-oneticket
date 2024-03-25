import { FunctionComponent } from "react";

const HeaderPages: FunctionComponent = () => {
    return(
    <div>
        <img
          className="h-[34px] w-[162px] absolute !m-[0] top-[14.5px] left-[200px] overflow-hidden shrink-0 z-[1]"
          loading="lazy"
          alt=""
          src="/logo.png"
        />
        <div className="h-px w-[893.5px] absolute !m-[0] top-[31.5px] left-[353.5px] z-[1]" />
        <div className="absolute !m-[0] top-[15.5px] right-[589.2px] text-sm-3 tracking-[0.25px] leading-[32px] font-medium z-[1]">
          Produtos
        </div>
        <div className="absolute !m-[0] top-[15.5px] right-[485.4px] text-sm-6 tracking-[0.25px] leading-[32px] font-medium z-[1]">
          Clientes
        </div>
        <div className="absolute !m-[0] top-[15.5px] right-[398.6px] text-sm-8 tracking-[0.25px] leading-[32px] font-medium z-[1]">
          Ajuda
        </div>
        <button className="cursor-pointer [border:none] pt-[12.5px] pb-[13.5px] pr-[16px] pl-[17px] bg-[#FF9800] w-[190px] !m-[0] absolute top-[12px] right-[200px] rounded-9xl flex flex-row items-start justify-start box-border whitespace-nowrap z-[1] hover:bg-chocolate">
          <div className="flex-1 relative text-sm-3 font-medium font-inter text-white text-center">
            Falar com um consultor
          </div>
        </button>
        </div>
    )
};

export default HeaderPages;