import Footer from "../components/Footer";
import Header from "../components/Header";
import MusicPlayer from "../components/MusicPlayer";
import NowPlayingTrack from "../components/NowPlayingTrack";
import OtherControls from "../components/OtherControls";
import Sidebar from "../components/SideBar";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-full h-screen grid grid-cols-[max-content_auto] grid-rows-[7fr_1fr] gap-y-2 p-2 bg-black">
        <Sidebar />
        <div className="bg-secondary02 grid grid-cols-[1fr] overflow-hidden rounded-lg">
          <div className="overflow-y-auto">
            <div className="sticky top-0 h-20 w-full p-5 bg-black/50 z-10">
              <Header />
            </div>
            {children}
            <div className="px-5 py-5">
              <Footer />
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-10 h-28 grid grid-cols-4 p-2">
          <div className="bg-black col-span-1 px-2 flex items-center">
            <NowPlayingTrack/>
          </div>
          <div className="bg-black col-span-2 flex items-center justify-center">
            <MusicPlayer />
          </div>
          <div className="bg-black col-span-1 px-2 flex items-center justify-end">
            <OtherControls />
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
