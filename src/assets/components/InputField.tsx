import { FunctionComponent } from "react";
import BannerItem from "./BannerItem";

const InputField: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[23px] box-border max-w-full shrink-0 text-left text-11xl-5 text-white font-www-blueticket-com-br-1680x783-default-inter-medium-1356">
      <div className="flex-1 bg-black shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-row items-center justify-center max-w-full">
        <div className="flex-1 overflow-hidden flex flex-col items-center justify-center p-4 box-border max-w-full">
          <div className="w-[1405px] flex flex-row items-start justify-start py-0 px-5 box-border relative max-w-full">
            <img
              className="h-[342px] w-[1314px] absolute my-0 mx-[!important] bottom-[-22.2px] left-[-2.8px] object-cover"
              alt=""
              src="/prancheta-2-1@2x.png"
            />
            
            <div className="flex-1 overflow-hidden flex flex-row items-center justify-start max-w-[1365px] z-[1] mq1650:max-w-full">
        <div className="w-[1317px] overflow-hidden shrink-0 flex flex-row items-center justify-center max-w-[1317px] mq1650:max-w-full">
      <div className="flex-1 flex flex-row items-center justify-center max-w-[1317px] mq1650:max-w-full">
        <div className="h-[300px] flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[64.01004028320312px] pl-16 box-border relative max-w-full">
        <BannerItem
          title="Safari Beach Jurerê"
          location="Safari Beach Jurerê - Florianópolis - SC"
          buttonText="Ver Detalhes"
          imageSrc="/public/divvimage--image@2x.png"
        />

          <div className="h-[30px] w-[30px] my-0 mx-[!important] absolute top-[130.4px] left-[5.4px] rounded-mini bg-white flex flex-row items-center justify-center z-[1]">
            <div className="h-[30px] w-[30px] relative rounded-mini">
              <img
                className="absolute top-[3px] left-[3px] w-6 h-6 overflow-hidden"
                loading="eager"
                alt=""
                src="/icon.svg"
              />
            </div>
          </div>
          <div className="h-[30px] w-[30px] my-0 mx-[!important] absolute top-[130.4px] left-[1282.4px] rounded-mini bg-white flex flex-row items-center justify-center z-[1]">
            <div className="h-[30px] w-[30px] relative rounded-mini">
              <img
                className="absolute top-[3px] left-[3px] w-6 h-6 overflow-hidden"
                alt=""
                src="/icon-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
