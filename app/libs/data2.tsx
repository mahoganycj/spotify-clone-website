export type Mix = {
  image: string;
  title: string;
  artist?: string;
  id?: number;
};

export const data2: Mix[] = [
  {
    id: 1,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default",
    title: "Cavetown Mix ",
    artist: "Sir Chloe, The walters and moriondo",
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist:
      "Best tracks from the world of OPM and pop. Cover: elijah woods&Ben",
  },

  {
    id: 3,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "IV Of Spades, Ben&Ben, Cup of Joe and more",
  },
  {
    id: 4,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "Ben&Ben Mix",
    artist: "Ben&Ben",
  },
  {
    id: 7,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    title: "Daily Mix 5",
    artist: "Cavetown, The Walters, TEMPOREX and more",
  },
];

export type ICategory = {
  id?: number;
  name?: string;
  image: string;
};
export const category: ICategory[] = [
  {
    id: 1,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default",
    name: "Cavetown Mix ",
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    name: "Hot Hits Philippines",
  },

  {
    id: 3,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    name: "Daily Mix 1",
  },
  {
    id: 4,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    name: "Ben&Ben Mix",
  },
  {
    id: 7,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    name: "Daily Mix 5",
  },
];

export type SongRowProps = {
  artist: string;
  title: string;
  album?: string;
  image: string;
  duration: string;
  id?: number;
};

export const Song: SongRowProps[] = [
  {
    id: 1,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default",
    title: "Cavetown Mix ",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 2,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 3,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "Ben&Ben Mix",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 4,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    title: "Daily Mix 5",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },

  {
    id: 6,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 7,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "Ben&Ben Mix",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 8,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    title: "Daily Mix 5",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
];
