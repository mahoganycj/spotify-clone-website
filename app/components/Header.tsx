"use client";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import {
  useRouter,
  usePathname,
  useSearchParams,
  useParams,
} from "next/navigation";
import { FaUserAlt } from "react-icons/fa";
import { GoSearch } from "react-icons/go";
import { authorize, getToken } from "../API/Authorize";
import useRefreshToken from "../hooks/useRefreshToken";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleGoLogin = () => {
    return (location.href = "/login");
  };

  return pathname === "/search" ? (
    <>
      <div className="w-full mb-4 flex items-center justify-between">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 12L12 17L7 12M12 6V16V6ZM12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>

            <h3 className="text-white font-medium ml-2 hover:scale-105 text-sm select-none cursor-pointer">
              Install App
            </h3>
          </div>

          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="What's New"
          >
            <svg
              className=""
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0001 19C15.0003 19.5046 14.8097 19.9906 14.4666 20.3605C14.1235 20.7305 13.6532 20.9572 13.1501 20.995L13.0001 21H11.0001C10.4955 21.0002 10.0095 20.8096 9.63954 20.4665C9.26956 20.1234 9.04294 19.6532 9.00509 19.15L9.00009 19H15.0001ZM12.0001 2C13.8151 1.99997 15.5591 2.70489 16.8643 3.96607C18.1695 5.22726 18.9339 6.94609 18.9961 8.76L19.0001 9V12.764L20.8221 16.408C20.9016 16.567 20.9414 16.7429 20.9381 16.9206C20.9347 17.0984 20.8884 17.2727 20.8029 17.4286C20.7175 17.5845 20.5956 17.7174 20.4476 17.8158C20.2996 17.9143 20.1299 17.9754 19.9531 17.994L19.8381 18H4.16209C3.98426 18.0001 3.80906 17.957 3.65151 17.8745C3.49397 17.792 3.35877 17.6725 3.25751 17.5264C3.15625 17.3802 3.09194 17.2116 3.0701 17.0351C3.04825 16.8586 3.06953 16.6795 3.13209 16.513L3.17809 16.408L5.00009 12.764V9C5.00009 7.14348 5.73759 5.36301 7.05035 4.05025C8.3631 2.7375 10.1436 2 12.0001 2ZM12.0001 4C10.7116 4.00007 9.47293 4.49754 8.54232 5.38866C7.6117 6.27978 7.06101 7.49575 7.00509 8.783L7.00009 9V12.764C7.0001 13.012 6.95399 13.2579 6.86409 13.489L6.78909 13.659L5.61909 16H18.3821L17.2121 13.658C17.1011 13.4363 17.0323 13.1959 17.0091 12.949L17.0001 12.764V9C17.0001 7.67392 16.4733 6.40215 15.5356 5.46447C14.5979 4.52678 13.3262 4 12.0001 4Z"
                fill="#A7A7A7"
              />
            </svg>
          </div>
          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="Profile"
          >
            <svg
              className="hover:white"
              width="20"
              height="20"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.419 15.2347C19.127 13.9527 21 11.1951 21 8C21 3.58172 17.4183 0 13 0C8.58172 0 5 3.58172 5 8C5 11.1951 6.87303 13.9527 9.58097 15.2347L9.18597 15.7239L1.37195 20.4478C0.745831 20.9565 0 22.1983 0 23V27H26V23C26 22.1983 25.2542 20.9565 24.6281 20.4478L16.814 15.7239L16.419 15.2347Z"
                fill="#A7A7A7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  ) : (
    // HOME
    <>
      <div className="w-full mb-4 flex items-center justify-between">
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
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 12L12 17L7 12M12 6V16V6ZM12 1C18.075 1 23 5.925 23 12C23 18.075 18.075 23 12 23C5.925 23 1 18.075 1 12C1 5.925 5.925 1 12 1Z"
                stroke="white"
                stroke-width="2"
              />
            </svg>

            <h3 className="text-white font-medium ml-2 hover:scale-105 text-sm select-none cursor-pointer">
              Install App
            </h3>
          </div>

          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="What's New"
          >
            <svg
              className=""
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.0001 19C15.0003 19.5046 14.8097 19.9906 14.4666 20.3605C14.1235 20.7305 13.6532 20.9572 13.1501 20.995L13.0001 21H11.0001C10.4955 21.0002 10.0095 20.8096 9.63954 20.4665C9.26956 20.1234 9.04294 19.6532 9.00509 19.15L9.00009 19H15.0001ZM12.0001 2C13.8151 1.99997 15.5591 2.70489 16.8643 3.96607C18.1695 5.22726 18.9339 6.94609 18.9961 8.76L19.0001 9V12.764L20.8221 16.408C20.9016 16.567 20.9414 16.7429 20.9381 16.9206C20.9347 17.0984 20.8884 17.2727 20.8029 17.4286C20.7175 17.5845 20.5956 17.7174 20.4476 17.8158C20.2996 17.9143 20.1299 17.9754 19.9531 17.994L19.8381 18H4.16209C3.98426 18.0001 3.80906 17.957 3.65151 17.8745C3.49397 17.792 3.35877 17.6725 3.25751 17.5264C3.15625 17.3802 3.09194 17.2116 3.0701 17.0351C3.04825 16.8586 3.06953 16.6795 3.13209 16.513L3.17809 16.408L5.00009 12.764V9C5.00009 7.14348 5.73759 5.36301 7.05035 4.05025C8.3631 2.7375 10.1436 2 12.0001 2ZM12.0001 4C10.7116 4.00007 9.47293 4.49754 8.54232 5.38866C7.6117 6.27978 7.06101 7.49575 7.00509 8.783L7.00009 9V12.764C7.0001 13.012 6.95399 13.2579 6.86409 13.489L6.78909 13.659L5.61909 16H18.3821L17.2121 13.658C17.1011 13.4363 17.0323 13.1959 17.0091 12.949L17.0001 12.764V9C17.0001 7.67392 16.4733 6.40215 15.5356 5.46447C14.5979 4.52678 13.3262 4 12.0001 4Z"
                fill="#A7A7A7"
              />
            </svg>
          </div>
          <div
            className="p-2 rounded-full bg-slate-800 hover:scale-105 text-sm cursor-pointer"
            title="Profile"
            onClick={handleGoLogin}
          >
            <svg
              className="hover:white"
              width="20"
              height="20"
              viewBox="0 0 26 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.419 15.2347C19.127 13.9527 21 11.1951 21 8C21 3.58172 17.4183 0 13 0C8.58172 0 5 3.58172 5 8C5 11.1951 6.87303 13.9527 9.58097 15.2347L9.18597 15.7239L1.37195 20.4478C0.745831 20.9565 0 22.1983 0 23V27H26V23C26 22.1983 25.2542 20.9565 24.6281 20.4478L16.814 15.7239L16.419 15.2347Z"
                fill="#A7A7A7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
