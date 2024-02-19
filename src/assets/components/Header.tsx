import { FunctionComponent } from "react";

const Header: FunctionComponent = () => {
  return (
    <header className="w-full my-0 mx-[!important] sticky top-[0] left-[-0.1px] bg-black box-border flex flex-row items-center justify-center max-w-[1680px] max-h-[69px] z-[99] text-left text-mini-9 text-gray-300 font-www-blueticket-com-br-1680x783-default-inter-medium-1356 border-b-[1px] border-solid border-gray-500 mq1650:max-w-full">
      <div className="h-16 w-[1290px] flex flex-col items-start justify-end py-0 px-5 box-border max-w-full">
        <div className="mt-[-13px] mb-[-13px] w-full h-[90px] flex flex-row items-center justify-start pt-0 px-0 pb-px box-border max-w-[1250px] mq1300:max-w-full">
          <img
            className="h-[34px] w-[244px] relative overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/logo-blueticket-headersvg@2x.png"
          />
          <div className="w-[283px] flex flex-col items-start justify-start py-5 px-0 box-border">
            <div className="w-[162px] overflow-hidden flex flex-row items-center justify-center max-w-[162px] max-h-[56px]">
              <div className="flex-1 overflow-hidden flex flex-row items-center justify-end relative">
                <div className="h-full w-full absolute my-0 mx-[!important] top-[-0.6px] right-[0.1px] bottom-[0.6px] left-[-0.1px] z-[1]" />
                <div className="flex flex-col items-start justify-start py-0 px-0">
                  <div className="w-px h-[34px] relative">
                    <div className="absolute w-[calc(100%_+_161px)] top-[0px] right-[1px] left-[-162px] h-[34px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[41px] w-[381.6px] relative hidden max-w-full" />
          <div className="self-stretch flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-0 box-border max-w-full">
            <div className="mt-[-1px] self-stretch flex-1 flex flex-row items-center justify-start pt-0 px-0 pb-0 box-border gap-[0px_16px] max-w-full">
              <div className="self-stretch flex-1 flex flex-row items-end justify-end pt-2.5 pb-0 pr-0 pl-6 box-border max-w-[412px] mq450:max-w-full">
                <div className="flex-1 rounded-9xl flex flex-col items-start justify-start gap-[8px_0px] max-w-full">
                  <div className="self-stretch rounded-9xl bg-white flex flex-row items-end justify-start pt-0 px-6 pb-1.5">
                    <div className="flex-1 flex flex-row items-start justify-start">
                      <div className="h-8 flex-1 flex flex-col items-start justify-start py-2 px-0 box-border max-w-[312px] max-h-[32px]">
                        <div className="self-stretch overflow-hidden flex flex-col items-start justify-start pt-0.5 px-0 pb-[0.5px]">
                          <div className="relative inline-block max-w-[312px] whitespace-nowrap">
                            Buscar
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[3px]">
                      <div className="flex flex-col items-end justify-start pt-1 px-0 pb-0 box-border min-w-[28px]">
                        <div className="flex flex-row items-start justify-start pt-[7px] pb-0 pr-0 pl-1">
                          <div className="flex flex-row items-center justify-center">
                            <div className="flex flex-col items-start justify-start">
                              <img
                                className="w-6 h-6 relative overflow-hidden shrink-0"
                                alt=""
                                src="/icon-2.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-3.5 overflow-hidden shrink-0 flex flex-row items-start justify-start max-w-[388px] min-h-[14px] mq450:max-w-full">
                    <div className="self-stretch w-[388px] relative hidden min-w-[1px] min-h-[14px] max-w-full" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-0.5 pb-0 pr-px pl-0 text-center text-sm text-white">
                <div className="flex flex-row items-center justify-start py-0 pr-[3px] pl-0">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0 text-left">
                    <div className="flex flex-row items-center justify-start pt-0 pb-1 pr-[0.01000213623046875px] pl-[1.25px]">
                      <div className="relative leading-[21px] font-medium whitespace-nowrap">{`Florianópolis, SC `}</div>
                      <div className="h-7 w-7 rounded-sm flex flex-row items-center justify-center p-0.5 box-border ml-[-0.13px]">
                        <div className="flex flex-col items-start justify-start">
                          <img
                            className="w-6 h-6 relative overflow-hidden shrink-0"
                            alt=""
                            src="/icon-3.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded flex flex-row items-center justify-center pt-[9px] pb-2.5 pr-4 pl-[17px] box-border min-w-[64px] ml-[-1px] text-sm-8">
                    <div className="relative font-medium">Ajuda</div>
                  </div>
                  <div className="h-[29px] flex flex-col items-start justify-start pt-0 px-1 pb-0.5 box-border ml-[-1px]">
                    <div className="w-px h-[29px] relative bg-white box-border min-h-[29px] max-h-[29px] border-r-[1px] border-solid border-gray-400" />
                  </div>
                  <div className="rounded flex flex-row items-center justify-center py-2.5 pr-[15px] pl-[17px] box-border min-w-[64px] ml-[-1px] text-sm-6">
                    <div className="relative font-medium">Entrar</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
