import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type DivpbType = {
  divvImageImage?: string;
  teatros?: string;

  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const Divpb: FunctionComponent<DivpbType> = ({
  divvImageImage,
  teatros,
  propAlignSelf,
  propBackgroundImage,
  propAlignSelf1,
}) => {
  const divrow1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const divvImage1Style: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const divrow2Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf1,
    };
  }, [propAlignSelf1]);

  return (
    <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border gap-[12px_0px] min-w-[65px] max-w-[1300px] ml-[-2.57px] text-left text-mini-9 text-dimgray font-www-blueticket-com-br-1680x783-default-inter-medium-1356 mq1300:max-w-full">
      <div
        className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6"
        style={divrow1Style}
      >
        <div className="h-20 w-20 rounded-61xl bg-whitesmoke flex flex-row items-center justify-center py-5 px-0 box-border">
          <div
            className="flex-1 overflow-hidden flex flex-row items-center justify-end bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[80px]"
            style={divvImage1Style}
          >
            <img
              className="self-stretch w-20 relative max-h-full object-cover hidden min-h-[40px]"
              alt=""
              src={divvImageImage}
            />
            <div className="h-20 w-20 relative hidden" />
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <div className="w-px h-10 relative">
                <div className="absolute h-full w-[calc(100%_+_79px)] top-[0px] right-[1.5px] bottom-[0px] left-[-80.5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6"
        style={divrow2Style}
      >
        <div className="relative leading-[24px]">{teatros}</div>
      </div>
    </div>
  );
};

export default Divpb;
