import FooterDatHang from "./footer";
import HeaderDatHang from "./header";
export default function DatHangLayout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <HeaderDatHang />
      <div className="relative top-[170px] md:top-[150px] mb-[250px] "> {children}</div>
      <FooterDatHang />
    </section>
  );
}
