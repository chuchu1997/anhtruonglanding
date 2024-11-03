

import Script from "next/script";
import FooterDatHang from "./footer";
import HeaderDatHang from "./header";
import { ModalProvider } from "./context/ModalContext";
import ModalPage from "./context/ModalPage";

export default function DatHangLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <HeaderDatHang />
      <div className="relative top-[120px] md:top-[120px] mb-[250px] "> {children}</div>
      <FooterDatHang />
      <ModalPage/>
    </ModalProvider>
  );
}
