import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function SpotifyPlayerComponent({
  access_token,
  currentTrack,
  playing,
}: SpotifyPlayerType) {
  return (
    <div>
      {access_token ? (
        <SpotifyPlayer
          token={access_token}
          play={playing}
          styles={{
            bgColor: "rgb(19, 18, 18)",
            color: "#ffffff",
            sliderColor: "#1cb954",
            sliderHandleColor: "whitesmoke",
            trackArtistColor: "#ffffff",
            trackNameColor: "#fff",
          }}
          uris={[currentTrack]}
        />
      ) : (
        <></>
      )}{" "}
    </div>
  );
}