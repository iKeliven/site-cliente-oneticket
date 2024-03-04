import { FunctionComponent } from "react";

export type Linkmargin1Type = {
  camaroteViproomCarnaval?: string;
  imageSrc?: string;
  title?: string;
  date?: string;
  location?: string;
};

const Linkmargin1: FunctionComponent<Linkmargin1Type> = ({
  imageSrc = "/divvimage--image@2x.png",
  title = "The Dream Island - Carnival",
  date = "10 a 13 de Fevereiro",
  location = "Locais Diversos • Florianópolis, SC",
}) => {
  return (
    <div className="h-326 flex items-start justify-center pt-0 pb-4 max-w-317 min-h-326 max-h-326">
      <div className="w-285 rounded-lg bg-white shadow-md flex flex-col justify-between max-w-285 min-h-310 max-h-310">
        <div className="h-135 relative rounded-t-lg overflow-hidden bg-cover bg-no-repeat bg-top max-w-285 max-h-165">
          <img className="absolute inset-0 w-full h-full object-cover" alt="" src={imageSrc} />
          <div className="absolute inset-0" />
          <div className="absolute w-full top-0 right-0 left-full h-165 hidden">
            <div className="absolute inset-0 w-full top-0 right-full bottom-0 left-negative-285px hidden" />
          </div>
        </div>
        <div className="flex-1 rounded-t-none rounded-b-lg flex flex-col justify-between">
          <div className="flex flex-col justify-start py-4 pr-3.5 pl-3">
            <div className="relative font-medium inline-block max-w-261">
              <p className="m-0">{title}</p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-end py-13 pr-5 pl-3 text-sm text-black">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.1px] leading-20">{date}</div>
            </div>
            <div className="flex flex-col items-start justify-start text-sm-3 text-dimgray">
              <div className="relative tracking-[0.1px] leading-20">{location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Linkmargin1;
