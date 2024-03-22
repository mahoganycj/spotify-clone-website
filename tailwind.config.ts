import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "genre-01-green": "#148A08",
        "genre-02-green": "#27856A",
        "genre-03-green": "#056952",
        "genre-04-pink": "#DC148C",
        "genre-05-purple": "#8400E7",
        "genre-06-darkblue": "#1E3264",
        "genre-07-purple": "#8D67AB",
        "genre-08-blue": "#0D73EC",
        "genre-09-orange": "#D84000",
        "genre-10-red": "#E8115B",
        "genre-11-orange": "#E13300",
        "genre-12-brown": "#7D4B32",
        primary: "#65D36E",
        secondary01: "#000",
        secondary02: "#121212",
        secondary03: "##ffffff",
        neutral01: "#B2B2B2",
        neutral02: "#777777",
        neutral03: "#535353",
        anothablack: "#181818",
        brand: "#1ed760",
        "accent-1": "#ae2997",
        "accent-2": "#519af4",
      },
      screens: {
        'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
export default config;
