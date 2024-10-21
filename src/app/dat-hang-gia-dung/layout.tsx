import FooterDatHang from "./footer";
import HeaderDatHang from "./header";
export default function DatHangLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderDatHang />
      <div className="relative top-[110px] mb-[210px]"> {children}</div>
      <FooterDatHang />
    </section>
  );
}
