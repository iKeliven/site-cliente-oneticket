import { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const HeaderPages: FunctionComponent = () => {
  return (
    <div className="flex px-[80px] py-5 items-center justify-between w-[100vw]">
      <img
        className="w-[15vw]"
        loading="lazy"
        alt=""
        src="/logo.png"
      />
      <div className="flex gap-10">
        <Link to="#" className="text-sm-6 tracking-[0.25px] leading-[32px] font-medium ">Produtos</Link>
        <Link to="#" className="text-sm-6 tracking-[0.25px] leading-[32px] font-medium ">Clientes</Link>
        <Link to="#" className="text-sm-6 tracking-[0.25px] leading-[32px] font-medium ">Ajuda</Link>
        <Link to="#" className="text-sm-6 tracking-[0.25px] leading-[32px] font-medium ">Clientes</Link>

        <button className="[border:none] p-[5] bg-[darkOrange] w-[190px] rounded-9xl box-border hover:bg-chocolate">
          <div className="text-sm-3 font-medium text-white text-center">
            Falar com um consultor
          </div>
        </button>
      </div>

    </div>
  );
};

export default HeaderPages;
