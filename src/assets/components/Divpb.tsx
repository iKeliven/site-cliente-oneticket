import { FunctionComponent, useMemo, CSSProperties } from "react";

export type DivpbType = {
  divvImageImage?: string;
  nome?: string;
  propAlignSelf?: CSSProperties["alignSelf"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const Divpb: FunctionComponent<DivpbType> = ({
  divvImageImage,
  nome,
  propAlignSelf,
  propAlignSelf1,
}) => {
  const divrow1Style: CSSProperties = useMemo(() => ({ alignSelf: propAlignSelf }), [propAlignSelf]);
  const divrow2Style: CSSProperties = useMemo(() => ({ alignSelf: propAlignSelf1 }), [propAlignSelf1]);

  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-10 gap-[12px_0px] min-w-[65px] max-w-[1300px] ml-[-2.57px] text-left text-mini-9 text-dimgray font-www-blueticket-com-br-1680x783-default-inter-medium-1356 mq1300:max-w-full">
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6" style={divrow1Style}>
        <div className="h-20 w-20 rounded-full bg-whitesmoke flex items-center justify-center py-5 px-0 box-border overflow-hidden">
          {divvImageImage && <img className="w-10 h-10 object-contain" alt="" src={divvImageImage} />}
          <div className="flex flex-col items-start justify-start py-0 px-0">
            <div className="w-px h-10 relative">
              <div className="absolute h-full w-[calc(100%_+_79px)] top-[0px] right-[1.5px] bottom-[0px] left-[-80.5px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6" style={divrow2Style}>
        {nome && <div className="relative leading-[24px] text-center">{nome}</div>}
      </div>
    </div>
  );
};

export default Divpb;
