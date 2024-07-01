import { FunctionComponent } from "react";

const Contact: FunctionComponent = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start pt-10 px-5 pb-20 box-border gap-[80px_0px] bg-[url('/public/divbgcontato@3x.png')] bg-cover bg-no-repeat bg-[top] max-w-full z-[1] text-left text-11xl-5 text-darkorange font-inter mq800:gap-[40px_0px] mq450:gap-[20px_0px]">
      <div className="w-[591.4px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
        <b className="relative leading-[32px] mq800:text-5xl mq800:leading-[26px] mq450:text-lg mq450:leading-[19px]">
          Vamos Conversar?
        </b>
      </div>
      <div className="w-[591.3px] flex flex-row flex-wrap items-start justify-center py-0 px-0 box-border gap-[0px_8px] max-w-full">
        <input
          className="w-full [border:none] [outline:none] bg-whitesmoke-200 h-14 flex-1 rounded-37xl flex flex-row items-start justify-start p-5 box-border font-inter text-base-1 text-gray-300 min-w-[260px] max-w-full"
          placeholder="Digite seu e-mail aqui"
          type="text"
        />
        <button className="cursor-pointer [border:none] pt-[20.5px] pb-[21.5px] pr-4 pl-[17.299999999999997px] bg-darkorange w-[183.3px] rounded-9xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-chocolate">
          <div className="flex-1 relative text-sm-3 font-medium font-inter text-white text-center shrink-0">
            Falar com um consultor
          </div>
        </button>
      </div>
    </div>
  );
};

export default Contact;