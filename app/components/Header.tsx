"use client";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { GoSearch } from "react-icons/go";
import ArrowDownIcon from "./Icons/ArrowDownIcon";
import NotifIcon from "./Icons/NotifIcon";
import ProfileIcon from "./Icons/ProfileIcon";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoLogin = () => {
    return (location.href = "/login");
  };

  return pathname === "/search" ? (
    <>
      <div className="hidden lg:flex w-full mb-4 items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="
        rounded-full 
        bg-black 
        flex 
        items-center 
        justify-center 
        cursor-pointer 
        hover:opacity-75 
        transition
      "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
        rounded-full 
        bg-black 
        flex 
        items-center 
        justify-center 
        cursor-pointer 
        hover:opacity-75 
        transition
      "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
          <div className="absolute m-24">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <GoSearch />
            </div>
            <input
              className="block p-4 ps-10 rounded-full px-5 py-4 bg-neutral-800 text-sm hover:bg-neutral-700 placeholder:text-sm w-60"
              type="search"
              placeholder="What do you want to play?"
            />
          </div>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          {/* <div className="px-4 py-2 bg-white rounded-full hover:scale-105 text-sm">
            <h3 className="text-black font-medium">Explore Premium</h3>
          </div> */}
          <div className="flex px-4 py-2 rounded-full bg-slate-800 hover:scale-105 text-sm">
            {/* arrow-down-icon */}
            <ArrowDownIcon />

            <h3 className="text-white font-medium ml-2 hover:scale-105 text-sm select-none cursor-pointer">
              Install App
            </h3>
          </div>

          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="What's New"
          >
            {/* NotifIcon */}
            <NotifIcon />
          </div>
          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="Profile"
          >
            {/* ProfileIcon */}
            <ProfileIcon />
          </div>
        </div>
      </div>
    </>
  ) : (
    // HOME
    <>
      <div className="hidden lg:flex w-full mb-4 items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button
            onClick={() => router.back()}
            className="
        rounded-full 
        bg-black 
        flex 
        items-center 
        justify-center 
        cursor-pointer 
        hover:opacity-75 
        transition
      "
          >
            <RxCaretLeft className="text-white" size={35} />
          </button>
          <button
            onClick={() => router.forward()}
            className="
        rounded-full 
        bg-black 
        flex 
        items-center 
        justify-center 
        cursor-pointer 
        hover:opacity-75 
        transition
      "
          >
            <RxCaretRight className="text-white" size={35} />
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4">
          <div className="px-4 py-2 bg-white rounded-full hover:scale-105 text-sm select-none cursor-pointer">
            <h3 className="text-black font-medium">Explore Premium</h3>
          </div>
          <div className="flex px-4 py-2 rounded-full bg-slate-800 hover:scale-105 text-sm">
            <ArrowDownIcon />
            <h3 className="text-white font-medium ml-2 hover:scale-105 text-sm select-none cursor-pointer">
              Install App
            </h3>
          </div>

          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="What's New"
          >
          <NotifIcon/>
          </div>
          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="Profile"
            onClick={handleGoLogin}
          >
            <ProfileIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
