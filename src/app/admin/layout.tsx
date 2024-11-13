import Sidebar from "./sidebar";
import HeaderAdmin from "./header";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#f8f7fa]">
      <Sidebar />
      <div className="mx-[4px] md:ml-[270px] relative min-h-[100vh]  ">
        <HeaderAdmin />
        <div className="pt-[70px]">{children}</div>
      </div>
    </div>
  ); // Return only the children without a wrapper
}
