import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type Divpb1Type = {
  divvImageImage?: string;
  shows?: string;

  /** Style props */
  propMarginLeft?: CSSProperties["marginLeft"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const Divpb1: FunctionComponent<Divpb1Type> = ({
  divvImageImage,
  shows,
  propMarginLeft,
  propAlignSelf,
  propBackgroundImage,
}) => {
  const divpb4Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const divrowStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const divvImageStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div
      className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border gap-[12px_0px] min-w-[65px] max-w-[1300px] text-left text-mini text-dimgray font-www-blueticket-com-br-1680x783-default-inter-medium-1356 mq1300:max-w-full"
      style={divpb4Style}
    >
      <div
        className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6"
        style={divrowStyle}
      >
        <div className="h-20 w-20 rounded-61xl bg-whitesmoke flex flex-row items-center justify-center py-5 px-0 box-border">
          <div
            className="flex-1 overflow-hidden flex flex-row items-center justify-end bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[80px]"
            style={divvImageStyle}
          >
            <img
              className="self-stretch w-20 relative max-h-full object-cover hidden min-h-[40px]"
              alt=""
              src={divvImageImage}
            />
            <div className="h-20 w-20 relative hidden" />
            <div className="flex flex-col items-start justify-start py-0 px-0">
              <div className="w-px h-10 relative">
                <div className="absolute h-full w-[calc(100%_+_79px)] top-[0px] right-[0.7px] bottom-[0px] left-[-79.7px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center py-0 pr-14 pl-[57px]">
        <div className="relative leading-[24px]">{shows}</div>
      </div>
    </div>
  );
};

export default Divpb1;
