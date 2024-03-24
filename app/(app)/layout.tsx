import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/SideBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[5fr_1fr] gap-y-2 p-2 bg-black">
        <Sidebar />
        <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
          <div className="overflow-y-auto">
            <div className="sticky top-0 h-20 w-full p-5 bg-black/20 z-10">
              <Header />
            </div>
            {children}
            <div className="statice bottom-0 py-14 mt-28 p-5 pt-12">
              <Footer />
            </div>
          
          </div>
        
        </div>
        
        <div className="bg-blue-500"></div>
        <div className="bg-slate-500"></div>
      </div>

      {/* <div className="w-full h-screen grid grid-cols-3 gap-y-2 p-2 bg-black grid-rows-[5fr_1fr]">
        <Sidebar />
        <div className="col-span-2 bg-green-500 p-4">Column 2</div>
        <div className="col-span-1 bg-yellow-500 p-4">Column 3</div>
        <div className="col-span-1 bg-red-500 p-4">Column 4</div>
        <div className="col-span-1 bg-indigo-500 p-4">Column 5</div>
      </div> */}
    </>
  );
};

export default AppLayout;
