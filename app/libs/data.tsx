import { SongList, Mix, Category, SongRowProps, GenreProps } from "./type";

export const data: SongList[] = [
  {
    id: 1,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebef138aa4569dba63ee549997/2/en/default",
    title: "Cavetown Mix ",
    artist: "Sir Chloe, The walters and moriondo",
    count : 20,
    type : 'Mix',
    classname : "bg-gradient-to-r from-red-800 to-orange-800 ",
  },
  {
    id: 2,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist: "Best tracks from the world of OPM and pop. Cover: elijah woods",
    count : 40,
    type : 'Playlist',
    classname : "bg-gradient-to-r from-yellow-900 to-orange-600 ",
  },
  {
    id: 3,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4k9wp4ipHdA1bu1T4x1ZTG/en/default",
    title: "IV of Spades Mix",
    artist: "Ben&Ben, IV of Spades",
    count : 60,
    type : 'Mix',
    classname : "bg-gradient-to-r from-red-900 to-yellow-600 ",
  },
  {
    id: 4,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Ben&Ben, Mart Anthony and JR",
    count : 45,
    type : 'Mix',
    classname : "bg-gradient-to-r from-blue-600 to-purple-600 ",
  },
  {
    id: 5,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/chill/3l0CmX0FuQjFxr8SK7Vqag/en/default",
    title: "Daily Mix 4",
    artist:
      "The Rare Occasions, The Neighbourhood, My Chemical Romance and more",
      count : 25,
      type : 'Mix',
      classname : "bg-gradient-to-r from-pink-800 to-pink-600 "
  },
  {
    id: 6,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "Ben&Ben Mix",
    artist: "Ben&Ben",
    count : 18,
    type : 'Mix',
    classname : "bg-gradient-to-r from-red-700 to-pink-500 "
  },
  {
    id: 7,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    title: "Daily Mix 5",
    artist: "Ben&Ben",
    count : 48,
    type : 'Mix',
    classname :"bg-gradient-to-r from-blue-600 to-purple-600 ",
  },
  {
    id: 8,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/61nn6nOoLWjVC1ER2qFAvN/en/default",
    title: "Cup of Joe Mix",
    artist: "TONEEJAY, Ben&Ben and mrld",
    count : 60,
    type : 'Mix',
    classname :" bg-gradient-to-r from-red-600 to-blue-700 ",
  },
];


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

export const category: Category[] = [
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
      "https://i.scdn.co/image/ab67616d000048519c93931e7cfa4d8216056795",
    title: "Vacation",
    artist: "Young",
    album: "Vibes",
    duration: "4:32",
  },
  {
    id: 3,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },

  {
    id: 4,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 5,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "A little Piece of Heaven",
    artist: "SlowMo",
    album: "Paradise",
    duration: "3:45",
  },

  {
    id: 6,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Simber Bad",
    album: "Hellsong",
    duration: "4:45",
  },
  {
    id: 7,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "Ben&Ben Mix",
    artist: "Cavetown",
    album: "New Candle",
    duration: "3:56",
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
  {
    id: 9,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "16 Mirrors",
    artist: "Alex G",
    album: "Trick",
    duration: "3:20",
  },
  {
    id: 10,
    image:
      "https://i.scdn.co/image/ab67616d000048519c93931e7cfa4d8216056795",
    title: "Vacation",
    artist: "Young",
    album: "Vibes",
    duration: "4:32",
  },
  {
    id: 11,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },

  {
    id: 12,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 13,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "Ben&Ben Mix",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 14,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    title: "Daily Mix 5",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
  {
    id: 15,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },

  {
    id: 16,
    image:
      "https://i.scdn.co/image/ab67616d00004851b83030fd0c602ef0f5801503",
    title: "Tears Over Beers",
    artist: "Modern Baseball",
    album: "Sports",
    duration: "3:45",
  },
  {
    id: 17,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "16 Mirrors",
    artist: "Alex G",
    album: "Trick",
    duration: "3:20",
  },
  {
    id: 18,
    image:
      "https://i.scdn.co/image/ab67616d000048519c93931e7cfa4d8216056795",
    title: "Vacation",
    artist: "Young",
    album: "Vibes",
    duration: "4:32",
  },
  {
    id: 19,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb61916bb9f5c6a1a9ba1c9ab6/5/en/default",
    title: "Me and My Husband",
    artist: "Cavetown",
    album: "Be the Cowboy",
    duration: "2:05",
  },
  {
    id: 20,
    image: "https://i.scdn.co/image/ab67616d00004851cd8c5684a88874b97247fa4a",
    title: "Sports",
    artist: "Beach Bunny",
    album: "Sports",
    duration: "3:08",
  },
];


export const GenreData : GenreProps[] =[
  {
    classname : "bg-gradient-to-r from-pink-500 to-pink-800 ",
    children : <h2>Music</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb',
    id : 1,

  },
  {
    classname : "bg-gradient-to-r from-green-500 to-yellow-600 ",
    children : <h2>Podcast</h2>,
    image : 'https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa',
    id : 2,

  },
  {
    classname : "bg-gradient-to-r from-blue-700 to-orange-500 ",
    children : <h2>Live Events</h2>,
    image : 'https://concerts.spotifycdn.com/images/live-events_category-image.jpg',
    id : 3,
  },
  {
    classname : "bg-gradient-to-r from-purple-700 to-blue-600 ",
    children : <h2>Made For You</h2>,
    image : 'https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe',
    id : 4,
  },
  {
    classname : "bg-gradient-to-r from-red-800 to-orange-800 ",
    children : <h2>New Release</h2>,
    image : 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
    id : 5,
  },
  {
    classname : "bg-genre-09-orange",
    children : <h2>OPM</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005caff1c44c2b801af93881139b32',
    id : 6,
  },
  {
    classname : "bg-genre-12-brown",
    children : <h2>Pop</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768',
    id : 7,
  },
  {
    classname : "bg-genre-06-darkblue",
    children : <h2>Hip-Hop</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f',
    id : 8,
  },
  {
    classname : "bg-genre-12-brown",
    children : <h2>K-pop</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a',
    id : 9,
  },
  {
    classname : "bg-genre-02-green",
    children : <h2>Podcast Charts</h2>,
    image : 'https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg',
    id : 10,
  },
  {
    classname : "bg-genre-10-red",
    children : <h2>Pag-ibig</h2>,
    image : 'https://i.scdn.co/image/ab6765630000ba8a08b5cb121b43a14c45ff65b9',
    id : 11,
  },
  {
    classname : "bg-genre-07-purple",
    children : <h2>Video Podcast</h2>,
    image : 'https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg',
    id : 12,
  },
  {
    classname : "bg-genre-01-green",
    children : <h2>Charts</h2>,
    image : 'https://i.scdn.co/image/ab6765630000ba8a215c59e66f1e7bc7b6b6b7e8',
    id : 13,
  }, {
    classname : "bg-genre-10-red",
    children : <h2>In the car</h2>,
    image : 'https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112',
    id : 14,
  },
  {
    classname : "bg-genre-09-orange",
    children : <h2>Chill</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005caff1c44c2b801af93881139b32',
    id : 15,
  },
  {
    classname : "bg-genre-12-brown",
    children : <h2>R&B</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768',
    id : 16,
  },
  {
    classname : "bg-genre-06-darkblue",
    children : <h2>At Home</h2>,
    image : 'https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f',
    id : 17,
  },
]


export const queueSong : SongRowProps []=[
  {
    id: 1,
    image: "https://i.scdn.co/image/ab67616d00001e0233c52ca8309741c6999ca742",
    title: "A little Piece of Heaven",
    artist: "Avenged Sevenfold",
    album: "Paradise",
    duration: "8:00",
  },

  {
    id: 2,
    image: "https://i.scdn.co/image/ab67706f0000000281b1c03176a914df48d38319",
    title: "Hot Hits Philippines",
    artist: "Silent Santuary, Parokya ni Edgar and mrld",
    album: "Kalye",
    duration: "3:45",
  },

  {
    id: 3,
    image:
      "https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb4bdb3888818637acb71c4a13/1/en/default",
    title: "Daily Mix 1",
    artist: "Cavetown",
    album: "Animal Kingdom",
    duration: "3:45",
  },
   {
    id: 4,
    image:
      "https://seed-mix-image.spotifycdn.com/v6/img/artist/4DAcJXcjX0zlQAZAPAx4Zb/en/default",
    title: "16 Mirrors",
    artist: "Alex G",
    album: "Trick",
    duration: "3:20",
  },
  {
    id: 5,
    image:
      "https://i.scdn.co/image/ab67616d00001e020990bdde089e517245a9d423",
    title: "Inggit",
    artist: "Skusta Clee",
    album: "Skusta clee",
    duration: "4:32",
  },
  {
    id: 6,
    image:
      "https://i.scdn.co/image/ab67616d000048519c93931e7cfa4d8216056795",
    title: "Vacation",
    artist: "Young",
    album: "Vibes",
    duration: "4:32",
  },
 

  {
    id: 7,
    image:
      "https://i.scdn.co/image/ab67616d00001e027300c1e7edcdbd15a42e1579",
    title: "Sumugal",
    artist: "Hev Abi",
    album: "Kung Alam Mo Lang",
    duration: "4:45",
  },
  
]