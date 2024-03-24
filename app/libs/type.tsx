import { ReactNode } from "react";

export type SongList = {
    image: string;
    title: string;
    artist?: string;
    id?: number;
    href?: string;
  };

  export type Mix = {
    image: string;
    title: string;
    artist?: string;
    id?: number;
  };
  
export type Category = {
    id?: number;
    name?: string;
    image: string;
  };
  export type SongRowProps = {
    artist: string;
    title: string;
    album?: string;
    image: string;
    duration: string;
    id?: number;
  };

  export type GenreProps = {
    classname: string;
    children: ReactNode;
    image: string;
  };
  