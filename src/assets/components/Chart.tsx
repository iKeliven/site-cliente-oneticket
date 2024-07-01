import { Heading } from "./Heading";
import { Text } from "./Text";

export default function Chart() {
  return (
    <div className="flex flex-col shadow-md rounded-xl bg-white w-[57vw] p-5 gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Heading size="medium">Total de eventos</Heading>
          <Text size="small" className="text-darkorange">2300 eventos</Text>
        </div>
        <div className="flex flex-row items-start gap-5">
          <button className="cursor-pointer py-2 px-4 bg-darkorange shadow-md rounded-xl items-start justify-start hover:bg-chocolate">
            ALL
          </button>
          <button className="cursor-pointer py-2 px-4 bg-[transparent] text-darkorange rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-darkorange hover:bg-chocolate-200 hover:box-border hover:border-[3px] hover:border-solid hover:font-bold">1M</button>
          <button className="cursor-pointer py-2 px-4 bg-[transparent] text-darkorange rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-darkorange hover:bg-chocolate-200 hover:box-border hover:border-[3px] hover:border-solid hover:font-bold">6M</button>
          <button className="cursor-pointer py-2 px-4 bg-[transparent] text-darkorange rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-darkorange hover:bg-chocolate-200 hover:box-border hover:border-[3px] hover:border-solid hover:font-bold">1Y</button>
          <button className="cursor-pointer py-2 px-4 bg-[transparent] text-darkorange rounded-xl box-border flex flex-row items-center justify-center border-[1px] border-solid border-darkorange hover:bg-chocolate-200 hover:box-border hover:border-[3px] hover:border-solid hover:font-bold">YTD</button>
        </div>
      </div>
      <img src="chart.png" alt="" className="w-full" />
    </div>
  );
}
