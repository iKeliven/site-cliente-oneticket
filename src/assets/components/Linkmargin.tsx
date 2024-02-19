import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type LinkmarginType = {
  zNetoCristianoPalco?: string;
  joinvilleSquareGarde?: string;
  sex01DeMaroAbertura2100?: string;
  incio0030?: string;
  joinvilleSquareGardenJoin?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propMinWidth?: CSSProperties["minWidth"];
  propHeight?: CSSProperties["height"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const Linkmargin: FunctionComponent<LinkmarginType> = ({
  zNetoCristianoPalco,
  joinvilleSquareGarde,
  sex01DeMaroAbertura2100,
  incio0030,
  joinvilleSquareGardenJoin,
  propWidth,
  propMinWidth,
  propHeight,
  propAlignSelf,
  propPadding,
}) => {
  const linkmarginStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
    };
  }, [propWidth, propMinWidth]);

  const linkStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const diveventTitle1Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const divh2dC2c18f77Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="w-full flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] text-left text-mid-3 text-darkslategray font-www-blueticket-com-br-1680x783-default-inter-medium-1356"
      style={linkmarginStyle}
    >
      <div
        className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]"
        style={linkStyle}
      >
        <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
          <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
        </div>
        <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
          <div
            className="flex flex-col items-start justify-start py-4 pr-[17px] pl-3"
            style={diveventTitle1Style}
          >
            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
              <p className="m-0">{zNetoCristianoPalco}</p>
              <p className="m-0">{joinvilleSquareGarde}</p>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-2 text-black">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[27px] pl-0">
              <div className="relative tracking-[0.1px] leading-[20px]">
                <p className="m-0">{sex01DeMaroAbertura2100}</p>
                <p className="m-0">{incio0030}</p>
              </div>
            </div>
            <div
              className="flex flex-col items-start justify-start py-0 pr-[0.9799957275390625px] pl-0 text-sm-5 text-dimgray"
              style={divh2dC2c18f77Style}
            >
              <div className="relative tracking-[0.1px] leading-[20px]">
                {joinvilleSquareGardenJoin}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkmargin;
