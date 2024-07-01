import { FunctionComponent } from "react";

type SearchButtonProps = {
  label: string;
};

const SearchButton: FunctionComponent<SearchButtonProps> = ({ label }) => (
  <div className="flex flex-row items-center justify-start pt-1 px-0">
    <div className="flex flex-col items-start justify-start pt-1 px-0 text-left">
      <div className="flex flex-row items-center justify-start pt-0 pb-1 pr-[0.01000213623046875px] pl-[1.25px]">
        <div className="relative leading-[21px] font-medium whitespace-nowrap">
          {label}
        </div>
        <div className="h-7 w-7 rounded-sm flex flex-row items-center justify-center p-0.5 box-border ml-[-0.13px]">
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
);

export default SearchButton;
