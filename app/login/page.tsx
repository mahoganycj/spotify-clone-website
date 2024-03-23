"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Logo from "../components/Icons/LogoSpotify";
import ThirdPartyAuthButton from "../components/Buttons/ThirdPartyAuthButton";
import {
  faApple,
  faFacebook,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const authProviders = [
  {
    icon: faGoogle,
    name: "Google",
  },
  {
    icon: faFacebook,
    name: "Facebook",
  },
  {
    icon: faApple,
    name: "Apple",
  },
];

const Login = () => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col font-body bg-black md:bg-gradient-to-b md:from-zinc-900 md:to-black overflow-auto">
      <header className="py-12 md:py-8 px-8 md:px-12 md:mb-8 bg-black">
        <nav>
          <a href={"/"} className="outline-none">
            <Logo className="w-20 md:w-28" />
          </a>
        </nav>
      </header>

      <main className="self-center w-full max-w-[46rem] flex flex-col items-stretch gap-8 px-8 md:px-28 md:py-20 pb-20 md:rounded-lg bg-black">
        <h1 className="text-3xl md:text-[2.9rem] md:text-center md:mb-7 font-extrabold">
          Log in to Spotify
        </h1>

        <div className="flex flex-col gap-2 md:px-[5.5rem]">
          {authProviders.map((provider) => (
            <ThirdPartyAuthButton
              key={provider.name}
              icon={provider.icon}
              provider={provider.name}
            />
          ))}
        </div>

        <hr className="border-t-[1px] border-zinc-800" />

        <form
          className="flex flex-col gap-5 md:px-[5.5rem]"
          onSubmit={(e) => {
            e.preventDefault();
            <Link href={"/"} />;
          }}
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="username" className="text-sm font-extrabold">
              Email or username
            </label>
            <input
              type="username"
              name="usernmae"
              id="username"
              placeholder="Email or username"
              className="p-3 rounded-[5px] border-[1px] outline-none focus:outline-offset-0 focus:outline-2 focus:outline-white bg-zinc-900 border-zinc-400 hover:border-white placeholder:text-sm placeholder:font-bold transition-all"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm font-extrabold">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              className="p-3 rounded-[5px] border-[1px] outline-none focus:outline-offset-0 focus:outline-2 focus:outline-white bg-zinc-900 border-zinc-400 hover:border-white placeholder:text-sm placeholder:font-bold transition-all"
            />
          </div>

          <Link className="mt-5 py-3 bg-brand rounded-full text-center hover:bg-green-600" href={"/"} >Log In</Link>
          
        </form>

        <div className="flex flex-col gap-5 items-center text-center">
          <Link href="#">Forgot your password ?</Link>

          <hr className="hidden md:block w-full border-t-[1px] mb-6 border-zinc-800" />

          <div className="flex flex-col gap-1 md:gap-2 md:flex-row">
            <p className="text-zinc-400">Don&apos;t have an account?</p>
            <Link href="#">Sign up for Spotify</Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
