import { FunctionComponent } from "react";
import InputField from "./InputField";
import Divpb1 from "./Divpb1";
import Divpb from "./Divpb";
import Linkmargin2 from "./Linkmargin2";
import Linkmargin1 from "./Linkmargin1";
import Linkmargin from "./Linkmargin";
import Header from "./Header";
import Footer from "./Footer";

const Home: FunctionComponent = () => {
  return (
    <div className="w-[1680px] flex flex-col items-start justify-start max-w-[1680px] min-h-[783px] tracking-[normal] mq1650:max-w-full">
      <main className="w-full bg-gray-100 flex flex-col items-start justify-start max-w-[1680px] mq1650:max-w-full">
        <section className="w-full h-[4127px] flex flex-col items-center justify-start pt-0 px-0 pb-0 box-border gap-[1px_0px] max-w-[1680px] text-left text-11xl-5 text-black font-www-blueticket-com-br-1680x783-default-inter-medium-1356 mq900:h-auto mq1650:max-w-full">
          <InputField />
          <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-px box-border max-w-full shrink-0">
            <div className="h-px w-[1290px] relative max-w-[1250px] mq1300:max-w-full" />
          </div>
          <div className="w-[1312px] flex flex-row items-start justify-start py-0 pr-3 pl-0 box-border max-w-full shrink-0 mq1650:max-w-[calc(100%_-_12px)]">
            <div className="flex-1 flex flex-col items-center justify-start gap-[26px_0px] max-w-full">
              <div className="w-full flex flex-col items-start justify-start max-w-[1300px] mq1300:max-w-full">
                <div className="self-stretch flex flex-row flex-wrap items-center justify-start py-8 px-6">
                  <b className="relative leading-[48px] mq450:text-lg mq450:leading-[29px] mq900:text-5xl mq900:leading-[38px]">
                    Categorias
                  </b>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-center py-0 pr-[22px] pl-0 text-[15.6px] text-dimgray">
                  <Divpb1
                    divvImageImage="/divvimage--image@2x.png"
                    shows="Shows"
                  />
                  <Divpb
                    divvImageImage="/divvimage--image@2x.png"
                    teatros="Teatros"
                  />
                  <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border gap-[12px_0px] min-w-[65px] max-w-[1300px] ml-[-2.57px] mq1300:max-w-full">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6">
                      <div className="h-20 w-20 rounded-61xl bg-whitesmoke flex flex-row items-center justify-center py-5 px-0 box-border">
                        <div className="flex-1 overflow-hidden flex flex-row items-center justify-end bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[80px]">
                          <img
                            className="self-stretch w-20 relative max-h-full object-cover hidden min-h-[40px]"
                            alt=""
                            src="/divvimage--image@2x.png"
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
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6">
                      <div className="relative leading-[24px]">Infantil</div>
                    </div>
                  </div>
                  <Divpb
                    divvImageImage="/divvimage--image@2x.png"
                    teatros="Baladas"
                    propAlignSelf="unset"
                    propBackgroundImage="url('/divvimage--image@2x.png')"
                    propAlignSelf1="unset"
                  />
                  <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-4 box-border gap-[12px_0px] min-w-[65px] max-w-[1300px] ml-[-2.57px] text-mini mq1300:max-w-full">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6">
                      <div className="h-20 w-20 rounded-61xl bg-whitesmoke flex flex-row items-center justify-center py-5 px-0 box-border">
                        <div className="flex-1 overflow-hidden flex flex-row items-center justify-end bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[80px]">
                          <img
                            className="self-stretch w-20 relative max-h-full object-cover hidden min-h-[40px]"
                            alt=""
                            src="/divvimage--image@2x.png"
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
                    <div className="flex flex-row flex-wrap items-center justify-center py-0 px-6">
                      <div className="flex flex-col items-center justify-start pt-0 px-0 pb-px">
                        <div className="flex flex-row items-start justify-start py-0 pr-[22px] pl-[25px]">
                          <div className="relative leading-[24px]">
                            Cursos e
                          </div>
                        </div>
                        <div className="h-[23px] flex flex-row items-start justify-start py-0 pr-[17px] pl-4 box-border text-base-4">
                          <div className="mt-[-1px] relative leading-[24px]">
                            Workshops
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Divpb1
                    divvImageImage="/divvimage--image@2x.png"
                    shows="Congressos"
                    propMarginLeft="-2.57px"
                    propAlignSelf="stretch"
                    propBackgroundImage="url('/divvimage--image@2x.png')"
                  />
                  <div className="flex-1 flex flex-col items-center justify-start pt-0 px-0 pb-10 box-border gap-[12px_0px] min-w-[65px] max-w-[1300px] ml-[-2.57px] text-base-1 mq1300:max-w-full">
                    <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-6">
                      <div className="h-20 w-20 rounded-61xl bg-whitesmoke flex flex-row items-center justify-center py-5 px-0 box-border">
                        <div className="flex-1 overflow-hidden flex flex-row items-center justify-end bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[80px]">
                          <img
                            className="self-stretch w-20 relative max-h-full object-cover hidden min-h-[40px]"
                            alt=""
                            src="/divvimage--image@2x.png"
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
                    <div className="flex flex-row flex-wrap items-center justify-center py-0 pr-[42px] pl-[43px]">
                      <div className="relative leading-[24px]">Esportivos</div>
                    </div>
                  </div>
                  <Divpb1
                    divvImageImage="/divvimage--image@2x.png"
                    shows="Exposições"
                    propMarginLeft="-2.57px"
                    propAlignSelf="unset"
                    propBackgroundImage="url('/divvimage--image@2x.png')"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-0 px-2.5 box-border max-w-full text-[30.3px]">
                <div className="w-full h-[1188px] flex flex-col items-start justify-start pt-9 pb-[42px] pr-3 pl-0 box-border gap-[24px_0px] max-w-[1280px] mq900:pt-5 mq900:pb-5 mq900:box-border mq1300:pt-[23px] mq1300:pb-[27px] mq1300:box-border mq1300:max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-2">
                    <b className="relative leading-[48px] inline-block max-w-[1240px] mq450:text-lg mq450:leading-[29px] mq900:text-5xl mq900:leading-[38px] mq1300:max-w-full">
                      Carnaval 2024
                    </b>
                  </div>
                  <div className="w-[1268px] flex-1 overflow-x-auto flex flex-row flex-wrap items-start justify-start max-w-full text-mid-3 text-darkslategray">
                    <div className="h-full w-[317px] shrink-0 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] text-[16.7px]">
                      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                        <div className="w-full h-[135px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[285px] max-h-[165px]">
                          <img
                            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                            alt=""
                            src="/divvimage--image@2x.png"
                          />
                          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full" />
                          <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[165px] hidden">
                            <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                          </div>
                        </div>
                        <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                          <div className="flex flex-col items-start justify-start py-4 pr-[33px] pl-3">
                            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                              <p className="m-0">Carnaferrugem 2024 - Pacote</p>
                              <p className="m-0">Completo</p>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-start justify-end py-[13px] pr-[71px] pl-3 text-smi text-black">
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                09 a 14 de Fevereiro
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start text-sm-5 text-dimgray">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                Carnaferrugem • Garopaba, SC
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[317px] shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-px box-border max-w-[317px] min-h-[326px] max-h-[326px] ml-[-4px]">
                      <div className="h-[326px] flex-1 flex flex-col items-start justify-end pt-0 px-4 pb-0 box-border">
                        <div className="mt-[-15px] w-full h-[341px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="self-stretch h-[164.5px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top]">
                            <img
                              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                              alt=""
                              src="/divvimage--image@2x.png"
                            />
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full hidden" />
                            <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[164.5px] hidden">
                              <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                            </div>
                          </div>
                          <div className="self-stretch h-[] rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">Camarote Ilha da Magia |</p>
                                <p className="m-0">Carnaval Floripa 2024</p>
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-end py-0 px-3 text-sm-1 text-black">
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-2.5 pl-0">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Sáb, 10 de Fevereiro • Abertura: 17:00 •
                                  </p>
                                  <p className="m-0">Início: 17:00</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-sm-3 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Passarela Nego Quirido • Florianópolis,
                                  </p>
                                  <p className="m-0">SC</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[317px] shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-px box-border max-w-[317px] min-h-[326px] max-h-[326px] ml-[-4px] text-mid-6">
                      <div className="h-[326px] flex-1 flex flex-col items-start justify-end pt-0 px-4 pb-0 box-border">
                        <div className="mt-[-15px] w-full rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="self-stretch h-[164.5px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top]">
                            <img
                              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                              alt=""
                              src="/divvimage--image@2x.png"
                            />
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full hidden" />
                            <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[164.5px] hidden">
                              <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                            </div>
                          </div>
                          <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">Camarote Mô Quirido |</p>
                                <p className="m-0">Carnaval Floripa 2024</p>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-end pt-0 px-3 pb-12 text-sm-2 text-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                                  Sáb, 10 de Fevereiro • Abertura: 20:30
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-sm-3 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Passarela Nego Quirido • Florianópolis,
                                  </p>
                                  <p className="m-0">SC</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[317px] shrink-0 flex flex-row items-center justify-center pt-0 px-0 pb-px box-border max-w-[317px] min-h-[326px] max-h-[326px] ml-[-4px] text-mid-2">
                      <div className="h-[326px] flex-1 flex flex-col items-start justify-end pt-0 px-4 pb-0 box-border">
                        <div className="mt-[-15px] w-full rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="self-stretch h-[164.5px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top]">
                            <img
                              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                              alt=""
                              src="/divvimage--image@2x.png"
                            />
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full hidden" />
                            <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[164.5px] hidden">
                              <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                            </div>
                          </div>
                          <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">
                                  Camarote Setor1 | Carnaval
                                </p>
                                <p className="m-0">Floripa 2024</p>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-end pt-0 px-3 pb-12 text-sm-2 text-black">
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                                  Sáb, 10 de Fevereiro • Abertura: 21:00
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-sm-3 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Passarela Nego Quirido • Florianópolis,
                                  </p>
                                  <p className="m-0">SC</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Linkmargin2
                      camaroteSeTuDixCarnaval="Camarote Se Tu Dix | Carnaval"
                      floripa2024="Floripa 2024"
                    />
                    <div className="h-full w-[317px] shrink-0 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] ml-[-4px]">
                      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                        <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                          <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                        </div>
                        <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                          <div className="flex flex-col items-start justify-start py-4 pr-[27px] pl-3">
                            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                              <p className="m-0">
                                Camarote Municipal da Raça |
                              </p>
                              <p className="m-0">Carnaval Floripa 2024</p>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-2 text-black">
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[7px] pl-0">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                <p className="m-0">
                                  Sáb, 10 de Fevereiro • Abertura: 21:00 •
                                </p>
                                <p className="m-0">Início: 21:00</p>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-sm-3 text-dimgray">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                <p className="m-0">
                                  Passarela Nego Quirido • Florianópolis,
                                </p>
                                <p className="m-0">SC</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Linkmargin1 camaroteViproomCarnaval="Camarote Viproom | Carnaval" />
                    <Linkmargin1 camaroteViproomCarnaval="Camarote Premium | Carnaval" />
                    <Linkmargin2
                      camaroteSeTuDixCarnaval={`Camarote Swing & Balada |`}
                      floripa2024="Carnaval Floripa 2024"
                      propAlignSelf="stretch"
                    />
                    <div className="h-full w-[317px] shrink-0 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] ml-[-4px] text-mid-2">
                      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                        <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                          <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                        </div>
                        <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                          <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                              <p className="m-0">Camarote Que Beleza! |</p>
                              <p className="m-0">Carnaval Floripa 2024</p>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-2 text-black">
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                <p className="m-0">
                                  Sáb, 10 de Fevereiro • Abertura: 22:00 •
                                </p>
                                <p className="m-0">Início: 22:00</p>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[11px] pl-0 text-sm-3 text-dimgray">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                <p className="m-0">
                                  Passarela Nego Quirido • Florianópolis,
                                </p>
                                <p className="m-0">SC</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-[317px] shrink-0 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] z-[1] ml-[-4px] text-mid">
                      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                        <div className="w-full h-[59px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                          <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                        </div>
                        <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                          <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                              <p className="m-0">Carnaferrugem 2024 -</p>
                              <p className="m-0">PASSAPORTE FESTAS</p>
                            </div>
                          </div>
                          <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 pr-[71px] pl-3 text-smi-9 text-black">
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                10 a 13 de Fevereiro
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start text-sm-5 text-dimgray">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                Carnaferrugem • Garopaba, SC
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-full w-[317px] shrink-0 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] z-[2] ml-[-4px] text-mid">
                      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                        <div className="w-full h-[59.5px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                          <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                          <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                        </div>
                        <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                          <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                              Peixada do Gui 2024
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-end pt-[89.5px] px-3 pb-12 text-sm-1 text-black">
                            <div className="flex flex-col items-start justify-start">
                              <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                                Ter, 13 de Fevereiro • Abertura: 12:00
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-8 pl-0 text-sm-2 text-dimgray">
                              <div className="relative tracking-[0.1px] leading-[20px]">
                                <p className="m-0">
                                  Centro de Eventos Luiz Henrique da
                                </p>
                                <p className="m-0">
                                  Silveira • Florianópolis, SC
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start pt-9 pb-[42px] pr-3 pl-0 box-border gap-[24px_0px] max-w-[1280px] z-[3] mt-[-32px] text-[31.5px] mq900:pb-5 mq900:box-border mq1300:pb-[27px] mq1300:box-border mq1300:max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-2 shrink-0">
                    <b className="relative leading-[48px] inline-block max-w-[1240px] mq450:text-lgi mq450:leading-[29px] mq900:text-6xl mq900:leading-[38px] mq1300:max-w-full">
                      Em Alta
                    </b>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[30px_0px] max-w-full shrink-0 text-mid-3 text-darkslategray">
                    <div className="self-stretch grid flex-row items-start justify-start grid-cols-[repeat(4,_minmax(238px,_1fr))] mq450:grid-cols-[minmax(238px,_1fr)] mq1300:[grid-row-gap:20px] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(238px,_412px))]">
                      <div className="h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                        <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="w-full h-[135px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[285px] max-h-[165px]">
                            <img
                              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                              alt=""
                              src="/divvimage--image@2x.png"
                            />
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full" />
                            <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[165px] hidden">
                              <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                            </div>
                          </div>
                          <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="flex flex-col items-start justify-start py-4 pr-3.5 pl-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">
                                  The Dream Island - Carnival
                                </p>
                                <p className="m-0">
                                  Florianopolis 2024 [PASSAPO...
                                </p>
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-end py-[13px] pr-[50px] pl-3 text-smi-9 text-black mq450:pr-5 mq450:box-border">
                              <div className="flex flex-col items-start justify-start">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  10 a 13 de Fevereiro
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start text-sm-3 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  Locais Diversos • Florianópolis, SC
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center pt-0 px-0 pb-px box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                        <div className="h-[326px] flex-1 flex flex-col items-start justify-end pt-0 px-4 pb-0 box-border">
                          <div className="mt-[-15px] w-full h-[341px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="self-stretch h-[164.5px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top]">
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                                alt=""
                                src="/divvimage--image@2x.png"
                              />
                              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full hidden" />
                              <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[164.5px] hidden">
                                <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                              </div>
                            </div>
                            <div className="self-stretch h-[] rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="self-stretch flex flex-col items-start justify-start py-4 pr-[39px] pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">
                                    Vibe Verão apresenta: Maria
                                  </p>
                                  <p className="m-0">Gadú</p>
                                </div>
                              </div>
                              <div className="self-stretch flex-1 flex flex-col items-start justify-end py-0 px-3 text-sm-1 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sáb, 17 de Fevereiro • Abertura: 18:00 •
                                    </p>
                                    <p className="m-0">Início: 18:00</p>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-sm-2 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Boulevard 14/32 — Aeroporto de
                                    </p>
                                    <p className="m-0">
                                      Florianópolis • Florianópolis, SC
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] text-mid-4">
                        <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="w-full h-[135px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-[285px] max-h-[165px]">
                            <img
                              className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                              alt=""
                              src="/divvimage--image@2x.png"
                            />
                            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full" />
                            <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[165px] hidden">
                              <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                            </div>
                          </div>
                          <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                Murilo Huff | Florianópolis
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-end py-[34px] pr-[31px] pl-3 text-sm-1 text-black">
                              <div className="self-stretch flex flex-col items-start justify-start">
                                <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                                  Sex, 23 de Fevereiro • Abertura: 21:00
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start py-0 pr-px pl-0 text-sm-3 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  Stage Music Park • Florianópolis, SC
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-center pt-0 px-0 pb-px box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                        <div className="h-[326px] flex-1 flex flex-col items-start justify-end pt-0 px-4 pb-0 box-border">
                          <div className="mt-[-15px] w-full rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="self-stretch h-[164.5px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-[url('/public/divvimage--image@2x.png')] bg-cover bg-no-repeat bg-[top]">
                              <img
                                className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-cover hidden"
                                alt=""
                                src="/divvimage--image@2x.png"
                              />
                              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full hidden" />
                              <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[164.5px] hidden">
                                <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
                              </div>
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">Murilo Huff | Balneário</p>
                                  <p className="m-0">Camboriú</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-0 px-3 pb-12 text-sm-1 text-black">
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                                    Sáb, 24 de Fevereiro • Abertura: 21:00
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-sm-2 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      LIVE - Music Park BC • Balneário
                                    </p>
                                    <p className="m-0">Camboriú, SC</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start max-w-full">
                      <div className="h-[683px] w-[317px] flex flex-col items-start justify-start gap-[30px_0px] mq900:hidden">
                        <Linkmargin
                          zNetoCristianoPalco={`Zé Neto & Cristiano | Palco`}
                          joinvilleSquareGarde="360º | Joinville Square Garde..."
                          sex01DeMaroAbertura2100="Sex, 01 de Março • Abertura: 21:00 •"
                          incio0030="Início: 00:30"
                          joinvilleSquareGardenJoin="Joinville Square Garden • Joinville, SC"
                        />
                        <div className="w-full flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[69.5px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  SPC em Blumenau
                                </div>
                              </div>
                              <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 pr-[23px] pl-3 text-sm-3 text-black">
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative tracking-[0.1px] leading-[20px] whitespace-nowrap">
                                    Sex, 24 de Maio • Abertura: 20:00
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    Parque Vila Germânica • Blumenau, SC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row flex-wrap items-start justify-start [row-gap:20px] max-w-[calc(100%_-_317px)] text-mid-4 mq900:max-w-full">
                        <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[238px] max-w-[317px] min-h-[326px] max-h-[326px]">
                          <div className="h-[310px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">
                                    Capital Inicial Tour 4.0
                                  </p>
                                  <p className="m-0">Chapecó/SC</p>
                                </div>
                              </div>
                              <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-3 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[25px] pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Qui, 28 de Março • Abertura: 18:30 •
                                    </p>
                                    <p className="m-0">Início: 22:00</p>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Camino Estação Gastrônomica •
                                    </p>
                                    <p className="m-0">Chapecó, SC</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[238px] max-w-[317px] min-h-[326px] max-h-[326px] text-mid-7">
                          <div className="h-[310px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="flex flex-col items-start justify-start py-4 pr-[15px] pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">
                                    27ª EXPOFEIRA NACIONAL DA
                                  </p>
                                  <p className="m-0">CEBOLA</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-2 text-black">
                                <div className="flex flex-col items-start justify-start">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    04 a 07 de Abril
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-sm-3 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Parque Nacional da Cebola •
                                    </p>
                                    <p className="m-0">Ituporanga, SC</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[238px] max-w-[317px] min-h-[326px] max-h-[326px] text-mid-6">
                          <div className="h-[311px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[59.5px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="self-stretch flex flex-col items-start justify-start py-4 px-[11px]">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  MAD IN BRAZZA - FLORIPA
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-[89.5px] px-3 pb-12 text-sm-2 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[35px] pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sáb, 27 de Abril • Abertura: 16:00 •
                                    </p>
                                    <p className="m-0">Início: 17:00</p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start text-sm-3 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    Arena Opus • São José, SC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-col items-start justify-start pt-9 px-0 pb-3 box-border gap-[24px_0px] max-w-[1280px] z-[4] mt-[-32px] text-[31px] mq1300:pb-5 mq1300:box-border mq1300:max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-2">
                    <h1 className="m-0 relative text-inherit leading-[48px] font-bold font-inherit inline-block max-w-[1240px] mq450:text-lgi mq450:leading-[29px] mq900:text-6xl mq900:leading-[38px] mq1300:max-w-full">
                      Teatro SC
                    </h1>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start pt-0 pb-[30px] pr-3 pl-0 gap-[30px_0px] text-mid-6 text-darkslategray">
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] shrink-0">
                      <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[285px] max-w-[317px] min-h-[326px] max-h-[326px]">
                        <div className="h-[310px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                            <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                            <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                          </div>
                          <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="flex flex-col items-start justify-start py-4 pr-3.5 pl-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">Afonso Padilha 2024 //</p>
                                <p className="m-0">
                                  FLORIPA // 14.02 Quarta // 19...
                                </p>
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-2 text-black">
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Qua, 14 de Fevereiro • Abertura: 18:00 •
                                  </p>
                                  <p className="m-0">Início: 19:00</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start text-sm-1 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Teatro Ademir Rosa - CIC •
                                  </p>
                                  <p className="m-0">Florianópolis, SC</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[285px] max-w-[317px] min-h-[326px] max-h-[326px] text-mid-2">
                        <div className="h-[310px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                            <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                            <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                          </div>
                          <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="flex flex-col items-start justify-start py-4 pr-[18px] pl-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">Festival de Dança de</p>
                                <p className="m-0">
                                  Florianópolis - Prêmio Desterro
                                </p>
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-1 text-black">
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Sáb, 17 de Fevereiro • Abertura: 15:00 •
                                  </p>
                                  <p className="m-0">Início: 16:00</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-6 pl-0 text-sm-2 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Teatro Ademir Rosa (Teatro do CIC) •
                                  </p>
                                  <p className="m-0">Florianópolis, SC</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[285px] max-w-[317px] min-h-[326px] max-h-[326px]">
                        <div className="h-[310px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                            <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                            <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                          </div>
                          <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="flex flex-col items-start justify-start py-4 pr-[13px] pl-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                <p className="m-0">Afonso Padilha 2024 //</p>
                                <p className="m-0">
                                  JOINVILLE // 17.02 Sábado // ...
                                </p>
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-1 text-black">
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[9px] pl-0">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Sáb, 17 de Fevereiro • Abertura: 21:30 •
                                  </p>
                                  <p className="m-0">Início: 22:00</p>
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start text-sm-3 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  Teatro Juarez Machado • Joinville, SC
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <Linkmargin
                        zNetoCristianoPalco="Aventura Congelante |"
                        joinvilleSquareGarde="Itajaí/SC"
                        sex01DeMaroAbertura2100="Sex, 08 de Março • Abertura: 18:45 •"
                        incio0030="Início: 19:00"
                        joinvilleSquareGardenJoin="Teatro Municipal de Itajaí • Itajaí, SC"
                        propWidth="unset"
                        propMinWidth="285px"
                        propHeight="310px"
                        propAlignSelf="stretch"
                        propPadding="unset"
                      />
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-center [row-gap:20px] shrink-0 text-mid-7">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[30px_0px] min-w-[285px] max-w-[317px]">
                        <div className="w-full h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="flex flex-col items-start justify-start py-4 pr-[25px] pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">MATHEUS CEARÁ em VOCÊS</p>
                                  <p className="m-0">PEDEM E EU CONTO!</p>
                                </div>
                              </div>
                              <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-2 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-6 pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sex, 08 de Março • Abertura: 19:30 •
                                    </p>
                                    <p className="m-0">Início: 20:00</p>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Teatro Governador Pedro Ivo •
                                    </p>
                                    <p className="m-0">Florianópolis, SC</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="flex flex-col items-start justify-start py-4 pr-[25px] pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">MATHEUS CEARÁ em VOCÊS</p>
                                  <p className="m-0">PEDEM E EU CONTO!</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-3 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[18px] pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Dom, 10 de Março • Abertura: 18:30 •
                                    </p>
                                    <p className="m-0">Início: 19:00</p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start text-sm-5 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    Teatro Michelangelo • Blumenau, SC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[30px_0px] min-w-[285px] max-w-[317px] text-mid-6">
                        <div className="w-full h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="self-stretch flex flex-col items-start justify-start py-4 px-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">ABBA EXPERIENCE IN</p>
                                  <p className="m-0">CONCERT | Itajaí/SC</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-1 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[29px] pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sex, 08 de Março • Abertura: 21:15 •
                                    </p>
                                    <p className="m-0">Início: 21:30</p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start text-sm-5 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    Teatro Municipal de Itajaí • Itajaí, SC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] text-mid-3">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="h-[39px] flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="flex flex-col items-start justify-start py-4 pr-9 pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">
                                    Show Sob Medida com Nany
                                  </p>
                                  <p className="m-0">People</p>
                                </div>
                              </div>
                              <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-2 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-6 pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sex, 29 de Março • Abertura: 19:30 •
                                    </p>
                                    <p className="m-0">Início: 20:00</p>
                                  </div>
                                </div>
                                <div className="self-stretch flex flex-col items-start justify-start text-sm-5 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Cinemark Floripa Shopping •
                                    </p>
                                    <p className="m-0">Florianópolis, SC</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-start justify-start gap-[30px_0px] min-w-[285px] max-w-[317px]">
                        <div className="w-full h-[326px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px]">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[49px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="flex flex-col items-start justify-start py-4 pr-[25px] pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  <p className="m-0">MATHEUS CEARÁ em VOCÊS</p>
                                  <p className="m-0">PEDEM E EU CONTO!</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-[79px] px-3 pb-12 text-sm-2 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[23px] pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sáb, 09 de Março • Abertura: 19:30 •
                                    </p>
                                    <p className="m-0">Início: 20:00</p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start text-sm-5 text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    Teatro Municipal de Itajaí • Itajaí, SC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="w-full h-[327px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px] min-h-[326px] max-h-[326px] text-mid-4">
                          <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                            <div className="w-full h-[59.5px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                              <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                              <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                            </div>
                            <div className="self-stretch rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                              <div className="flex flex-col items-start justify-start py-4 pr-[30px] pl-3">
                                <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                  ESPETÁCULO STAR BEATLES
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-end pt-[89.5px] px-3 pb-12 text-sm-3 text-black">
                                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-8 pl-0">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    <p className="m-0">
                                      Sáb, 20 de Abril • Abertura: 19:00 •
                                    </p>
                                    <p className="m-0">Início: 20:00</p>
                                  </div>
                                </div>
                                <div className="flex flex-col items-start justify-start text-dimgray">
                                  <div className="relative tracking-[0.1px] leading-[20px]">
                                    Teatro Carlos Gomes • Blumenau, SC
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border min-w-[285px] max-w-[317px] min-h-[326px] max-h-[326px] text-mid-4">
                        <div className="h-[311px] w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start pt-0 px-0 pb-px box-border max-w-[285px] min-h-[310px] max-h-[310px]">
                          <div className="w-full h-[49.5px] rounded-t-lg rounded-b-none overflow-hidden flex flex-row items-center justify-center relative max-w-[285px] max-h-[165px]">
                            <div className="h-full w-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] [filter:blur(2px)]" />
                            <div className="self-stretch flex-1 relative max-w-[285px] z-[1]" />
                          </div>
                          <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
                            <div className="flex flex-col items-start justify-start py-4 pr-[30px] pl-3">
                              <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
                                ESPETÁCULO STAR BEATLES
                              </div>
                            </div>
                            <div className="self-stretch flex-1 flex flex-col items-start justify-end py-12 px-3 text-sm-3 text-black">
                              <div className="self-stretch flex flex-col items-start justify-start py-0 pr-[19px] pl-0">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Sáb, 09 de Março • Abertura: 20:00 •
                                  </p>
                                  <p className="m-0">Início: 21:00</p>
                                </div>
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start text-sm-1 text-dimgray">
                                <div className="relative tracking-[0.1px] leading-[20px]">
                                  <p className="m-0">
                                    Teatro Ademir Rosa - CIC •
                                  </p>
                                  <p className="m-0">Florianópolis, SC</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Header />
      </main>
      <Footer1 />
    </div>
  );
};

export default Home;
