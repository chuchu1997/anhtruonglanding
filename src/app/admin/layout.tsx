import Sidebar from "./sidebar";
import HeaderAdmin from "./header";
import "../globals.css";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    //   <body suppressHydrationWarning={true}>
    //     <Sidebar />
    //     <div className="content">{children}</div>
    //   </body>
    // </html>
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="icon" href="/favicon.ico" sizes="any" />

      <body suppressHydrationWarning={true} className="bg-[#f8f7fa]">
        <Sidebar />
        <div className="mx-[4px] md:ml-[270px] relative  ">
          <HeaderAdmin />
          <div className="pt-[70px]">{children}</div>
        </div>
      </body>
    </html>
  );
}
