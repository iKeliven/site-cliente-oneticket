import { FunctionComponent } from "react";
import HeaderPages from "./HeaderPages";

const BannerOrganizer: FunctionComponent = () => {
  return (
    <div className="self-stretch h-[994.7px] flex flex-row items-start justify-start pt-0 px-0 pb-10 box-border max-w-full text-left text-41xl-5 text-white font-www-blueticket-com-br-1680x783-default-inter-medium-1356">
      <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[302px] px-[px] box-border relative bg-[url('/banner-show.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq800:pt-[196px] mq800:pb-[196px] mq800:box-border mq450:pl-5 mq450:pr-5 mq450:box-border mq1125:pl-[86px] mq1125:pr-[86px] mq1125:box-border">
        <HeaderPages />
        <img
          className="h-[954.7px] w-[1920px] relative object-cover hidden max-w-full z-[0]"
          alt=""
          src="/banner-show.png"
        />
        <b className="h-[132px] relative tracking-[-0.5px] leading-[68px] flex items-center z-[3] mq800:text-29xl mq800:leading-[54px] mq450:text-17xl mq450:leading-[41px] left-[200px]">
            <p className="m-0">Oneticket para<br />Shows e Festivais</p>
        </b>
      </div>
    </div>
  )
  };

export default BannerOrganizer;