import { FunctionComponent } from "react";
import { Text } from "../../../components/Text";

const BannerOrganizer: FunctionComponent = () => {
  return (
    <div className="w-[100vw] flex h-[70vh] justify[center] items-center pl-[80px] font-poppins" style={{ backgroundImage: 'url(./banner-show.png)', backgroundPosition: 'center' }}>
      <Text size="large" className="text-[white]">
        OneTicket para o seu evento!
      </Text>
    </div>
  )
};

export default BannerOrganizer;