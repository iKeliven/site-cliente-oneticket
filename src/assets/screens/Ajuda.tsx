import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeaderPages from "../components/HeaderPages";
import PlanoItem from "../components/PlanoItem";

export default function Ajuda(){

  return (
    <div className="flex flex-col w-[100%]">
      <div className="flex">
        <Sidebar />
        <div className="bg-[#e2e2e2] w-[100%]">
            <Header />
            <HeaderPages titulo={"Central de Ajuda"} total={""} />
            <div className="flex bg-white flex-wrap h-[70vh] shadow-md rounded-xl p-8 mx-8 mb-5 gap-9">
              <p>em desenvolvimento</p>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}