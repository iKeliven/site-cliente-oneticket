import { FunctionComponent } from "react";
import Footer1 from "../components/Footer1";
import Header from "../components/Header";
import InputField from "../components/InputField";
import { Categories } from "../components/Categories";
import EventItem from "../components/EventItem";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full flex flex-col items-start justify-start bg-gray-100">
      <Header />
      <InputField />
      <main className="flex-grow w-full  flex flex-col justify-center items-center font-www-blueticket-com-br-1680x783-default-inter-medium-1356">
        <div className="w-full flex flex-col items-center justify-center gap-4 sm:p-8 md:p-12 lg:p-16">
          <Categories />
          <div className="self-stretch flex flex-col items-center justify-center max-h-[9700px] py-0 px-2.5 box-border max-w-full text-[30.3px]">
           <div className="self-stretch flex flex-col items-center justify-center py-0 px-2.5 box-border max-w-full text-[30.3px]">
            <div className="w-full flex flex-col items-start justify-center pt-9 pb-[42px] pr-3 pl-0 box-border gap-[24px_0px] max-w-[1280px] mq900:pt-5 mq900:pb-5 mq900:box-border mq1300:pt-[23px] mq1300:pb-[27px] mq1300:box-border mq1300:max-w-full">
              <div className="flex flex-row items-start justify-center py-0 px-2">
                <b className="relative leading-[48px] inline-block max-w-[1240px] mq450:text-lg mq450:leading-[29px] mq900:text-5xl mq900:leading-[38px] mq1300:max-w-full">
                  Carnaval 2024
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[30px_0px] max-w-full shrink-0 text-mid-3 text-darkslategray">
                <div className="self-stretch grid flex-row items-center justify-center grid-cols-[repeat(4,_minmax(238px,_1fr))] mq450:grid-cols-[minmax(238px,_1fr)] mq1300:[grid-row-gap:20px] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(238px,_412px))]">
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
              </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start pt-9 pb-[42px] pr-3 pl-0 box-border gap-[24px_0px] max-w-[1280px] z-[3] mt-[-32px] text-[31.5px] mq900:pb-5 mq900:box-border mq1300:pb-[27px] mq1300:box-border mq1300:max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-2 shrink-0">
                <b className="relative leading-[48px] inline-block max-w-[1240px] mq450:text-lgi mq450:leading-[29px] mq900:text-6xl mq900:leading-[38px] mq1300:max-w-full">
                  Em Alta
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[30px_0px] max-w-full shrink-0 text-mid-3 text-darkslategray">
                <div className="self-stretch grid flex-row items-center justify-center grid-cols-[repeat(4,_minmax(238px,_1fr))] mq450:grid-cols-[minmax(238px,_1fr)] mq1300:[grid-row-gap:20px] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(238px,_412px))]">
                <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  
            
                  
                </div>
                
                  
                </div>
              </div>
              <div className="w-full flex flex-col items-start justify-start pt-9 pb-[42px] pr-3 pl-0 box-border gap-[24px_0px] max-w-[1280px] z-[3] mt-[-32px] text-[31.5px] mq900:pb-5 mq900:box-border mq1300:pb-[27px] mq1300:box-border mq1300:max-w-full">
              <div className="flex flex-row items-start justify-start py-0 px-2 shrink-0">
                <b className="relative leading-[48px] inline-block max-w-[1240px] mq450:text-lgi mq450:leading-[29px] mq900:text-6xl mq900:leading-[38px] mq1300:max-w-full">
                  Recomendados para você
                </b>
              </div>
              <div className="self-stretch flex flex-col items-center justify-center gap-[30px_0px] max-w-full shrink-0 text-mid-3 text-darkslategray">
                <div className="self-stretch grid flex-row items-center justify-center grid-cols-[repeat(4,_minmax(238px,_1fr))] mq450:grid-cols-[minmax(238px,_1fr)] mq1300:[grid-row-gap:20px] mq1300:justify-center mq1300:grid-cols-[repeat(2,_minmax(238px,_412px))]">
                <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  <EventItem
                    title="The Dream Island - Carnival"
                    date="10 a 13 de Fevereiro"
                    location="Locais Diversos • Florianópolis, SC"
                    imageUrl="/img-event.png"
                  />
                  
            
                  
                </div>
                
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </main>
      <Footer1 />
    </div>
  );
};

export default Home;