import { FunctionComponent } from "react";

import Footer from "../components/Footer1";
import BannerOrganizer from "../components/BannerOrganizer";
import Contact from "../components/Contact";
import Benefits from "../components/Benefits";
import Channels from "../components/Channels";
import Marketing from "../components/Marketing";
import Menager from "../components/Menager";

const Shows: FunctionComponent = () => {
  return (
    <div className="w-full relative flex flex-row items-start justify-start tracking-[normal]">
      <main className="flex-1 bg-white flex flex-col items-start justify-start max-w-full">
        <section className="self-stretch bg-gray-100 flex flex-col items-start justify-start max-w-full text-left text-11xl-5 text-darkorange font-inter">
          <BannerOrganizer />
          <Benefits />
          <Menager />
          <Marketing />
          <Channels />
          <div className="self-stretch bg-whitesmoke-100 flex flex-col items-center justify-start pt-10 px-5 pb-0 box-border max-w-full">
            <div className="w-[1574.4px] flex flex-row items-start justify-center py-0 pr-0 pl-px box-border max-w-full">
              <b className="relative tracking-[-0.5px] leading-[40px] mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
                <span>{`Junte-se a mais de `}</span>
                <span className="text-black">{`3 mil organizadores `}</span>
                <span>que conosco</span>
              </b>
            </div>
            <div className="w-[1574.4px] flex flex-row items-start justify-center max-w-full">
              <b className="relative tracking-[-0.5px] leading-[40px] mq800:text-5xl mq800:leading-[32px] mq450:text-lg mq450:leading-[24px]">
                <span>{`já emitiram `}</span>
                <span className="text-black">45 milhões de ingressos</span>
              </b>
            </div>
            <img
              className="w-[1574.4px] h-[400px] relative overflow-hidden shrink-0 max-w-full"
              loading="lazy"
              alt=""
              src="/divvwindow--container.svg"
            />
          </div>
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  )
};
export default Shows;