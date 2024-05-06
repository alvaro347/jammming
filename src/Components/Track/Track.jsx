import React from "react";

export default function Track({ track }) {
  return (
    <div class="Track">
      <div class="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      <button class="Track-action">+ - </button>
    </div>
  );
}
