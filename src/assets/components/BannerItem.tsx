import { FunctionComponent } from "react";

const BannerItem: FunctionComponent = () => {
  return (
    <div className="flex-1 overflow-hidden flex flex-row items-center justify-start max-w-[1365px] z-[1] mq1650:max-w-full">
        <div className="w-[1317px] overflow-hidden shrink-0 flex flex-row items-center justify-center max-w-[1317px] mq1650:max-w-full">
      <div className="flex-1 flex flex-row items-center justify-center max-w-[1317px] mq1650:max-w-full">
        <div className="h-[300px] flex-1 flex flex-row flex-wrap items-start justify-start py-0 pr-[64.01004028320312px] pl-16 box-border relative max-w-full">
          <div className="my-0 mx-[!important] absolute top-[0.4px] left-[64.4px] flex flex-col items-end justify-start max-w-full">
            <div className="w-[373px] flex flex-row items-end justify-center pt-5 px-0 pb-0 box-border min-h-[200px] max-w-full">
              <div className="flex-1 flex flex-col items-center justify-start pt-[15px] pb-[106px] pr-[62px] pl-4 box-border gap-[6px_0px] min-h-[180px] max-w-full">
                <div className="relative leading-[37px] font-extrabold mq450:text-lg mq450:leading-[22px] mq900:text-5xl mq900:leading-[30px]">
                  Safari Beach Jurerê
                </div>
                <div className="self-stretch flex flex-row items-start justify-end text-smi">
                  <div className="relative leading-[16px]">
                    Safari Beach Jurerê - Florianópolis - SC
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row flex-wrap items-start justify-start pt-6 pb-9 pr-[70px] pl-[154px]">
              <button className="cursor-pointer border-none py-2 pr-4 pl-4 bg-white rounded-9xl flex flex-row items-center justify-center box-border min-w-[64px]">
                <div className="flex flex-col items-center justify-start py-px pr-0 pl-px">
                  <div className="relative text-sm-3 font-medium text-black text-center">
                    Ver Detalhes
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div className="w-[793px] my-0 mx-[!important] absolute top-[0.4px] left-[460.4px] flex flex-row items-center justify-center max-w-[878.0004272460938px] mq900:max-w-full">
            <div className="flex-1 rounded-xl bg-gray-200 shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-row items-center justify-center max-w-[792.6599731445312px] mq900:max-w-full">
              <div className="h-[300px] flex-1 relative rounded-xl overflow-hidden bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[792.6599731445312px] mq900:max-w-full">
                <img
                  className="absolute h-full w-full top-[0%] right-[-0.04%] bottom-[0%] left-[-0.04%] max-w-full overflow-hidden max-h-full object-cover hidden"
                  alt=""
                  src="/divvimage--image@2x.png"
                />
                <div className="absolute h-full top-[0px] bottom-[0px] left-[-0.35px] w-full hidden" />
                <div className="absolute h-full w-[calc(100%_-_791px)] top-[0px] right-[-1.35px] bottom-[0px] left-[792.35px] hidden">
                  <div className="absolute h-full w-[calc(100%_+_791.7px)] top-[0px] right-[1px] bottom-[0px] left-[-792.7px] hidden" />
                </div>
              </div>
            </div>
          </div>
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
  );
};

export default BannerItem;
