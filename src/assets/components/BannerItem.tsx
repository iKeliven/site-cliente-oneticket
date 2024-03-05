import { FunctionComponent } from "react";

interface BannerItemProps {
  title: string;
  location: string;
  buttonText: string;
  imageSrc: string;
}

const BannerItem: FunctionComponent<BannerItemProps> = ({
  title,
  location,
  buttonText,
  imageSrc,
}) => {
  return (
    <div className="h-[300px] flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[64.01004028320312px] pl-16 box-border relative max-w-full">
      <div className="my-0 mx-[!important] absolute top-[0.4px] left-[64.4px] flex flex-col items-end justify-start max-w-full">
        <div className="w-[373px] flex flex-row items-end justify-center pt-5 px-0 pb-0 box-border min-h-[200px] max-w-full">
          <div className="flex-1 flex flex-col items-center justify-start pt-[15px] pb-[106px] pr-[62px] pl-4 box-border gap-[6px_0px] min-h-[180px] max-w-full">
            <div className="relative leading-[37px] font-extrabold mq450:text-lg mq450:leading-[22px] mq900:text-5xl mq900:leading-[30px]">
              {title}
            </div>
            <div className="self-stretch flex flex-row items-start justify-end text-smi">
              <div className="relative leading-[16px]">{location}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap items-start justify-start pt-6 pb-9 pr-[70px] pl-[154px]">
          <button className="cursor-pointer border-none py-2 pr-4 pl-4 bg-white rounded-9xl flex flex-row items-center justify-center box-border min-w-[64px]">
            <div className="flex flex-col items-center justify-start py-px pr-0 pl-px relative text-sm-3 font-medium text-black text-center">
              {buttonText}
            </div>
          </button>
        </div>
      </div>
      <div className="w-[793px] my-0 mx-[!important] absolute top-[0.4px] left-[460.4px] flex flex-row items-center justify-center max-w-[690px] mq900:max-w-full">
        <div className="flex-1 rounded-xl bg-gray-200 shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-row items-center justify-center max-w-[690px] mq900:max-w-full">
          <div className="h-[300px] flex-1 relative rounded-xl overflow-hidden bg-cover bg-no-repeat bg-[top]" style={{ backgroundImage: `url(${imageSrc})` }}>
            <img
              className="absolute h-full w-full top-[0%] right-[-0.04%] bottom-[0%] left-[-0.04%] max-w-full overflow-hidden max-h-full object-cover hidden"
              alt=""
              src={imageSrc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
