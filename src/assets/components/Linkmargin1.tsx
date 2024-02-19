import { FunctionComponent } from "react";

export type Linkmargin1Type = {
  camaroteViproomCarnaval?: string;
};

const Linkmargin1: FunctionComponent<Linkmargin1Type> = ({
  camaroteViproomCarnaval,
}) => {
  return (
    <div className="h-full w-[317px] shrink-0 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] ml-[-4px] text-left text-mid-3 text-darkslategray font-www-blueticket-com-br-1680x783-default-inter-medium-1356">
      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
        <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
          <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
        </div>
        <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start py-4 pr-[30px] pl-3">
            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
              <p className="m-0">{camaroteViproomCarnaval}</p>
              <p className="m-0">Floripa 2024</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-2 text-black">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                Sáb, 10 de Fevereiro • Abertura: 21:00
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-sm-3 text-dimgray">
              <div className="relative tracking-[0.1px] leading-[20px]">
                <p className="m-0">Passarela Nego Quirido • Florianópolis,</p>
                <p className="m-0">SC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkmargin1;
