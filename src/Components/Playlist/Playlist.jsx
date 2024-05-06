import React from "react";
import TrackList from '../TrackList/TrackList';

export default function Playlist() {
  return (
    <div class="Playlist">
      <input value="New Playlist" />
      <TrackList />
      <button class="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
