import { FunctionComponent } from "react";

interface EventItemProps {
  title: string;
  date: string;
  location: string;
  imageUrl: string;
}

const EventItem: FunctionComponent<EventItemProps> = ({
  title,
  date,
  location,
  imageUrl,
}) => {
  return (
    <div className="h-[330px] flex flex-row items-start justify-center pt-0 px-0 pb-4 box-border max-w-[317px]">
      <div className="h-full w-[285px] rounded-lg bg-white shadow-[0px_2px_8px_rgba(25,_43,_70,_0.08)] flex flex-col items-start justify-start max-w-[285px] min-h-[310px] max-h-[310px]">
        <div className="w-full h-[135px] relative rounded-t-lg rounded-b-none overflow-hidden shrink-0 bg-cover bg-no-repeat bg-[top] max-w-[285px] max-h-[165px]" style={{ backgroundImage: `url(${imageUrl})` }}>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] w-full" />
          <div className="absolute w-[calc(100%_-_284px)] top-[0px] right-[-1px] left-[285px] h-[165px] hidden">
            <div className="absolute h-full w-[calc(100%_+_284px)] top-[0px] right-[1px] bottom-[0px] left-[-285px] hidden" />
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-t-none rounded-b-lg flex flex-col items-start justify-between">
          <div className="flex flex-col items-start justify-start py-4 pr-3.5 pl-3">
            <div className="relative leading-[21px] font-medium inline-block max-w-[261px]">
              <p className="m-0">{title}</p>
              <p className="m-0">{location}</p>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-end py-[13px] pr-[50px] pl-3 text-smi-9 text-black mq450:pr-5 mq450:box-border">
            <div className="flex flex-col items-start justify-start">
              <div className="relative tracking-[0.1px] leading-[20px]">{date}</div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-sm-3 text-dimgray">
              <div className="relative tracking-[0.1px] leading-[20px]">{location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventItem;
