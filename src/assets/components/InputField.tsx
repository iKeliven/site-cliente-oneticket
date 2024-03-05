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
            
              <BannerItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputField;
