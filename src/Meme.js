import React from "react";

export default function Meme() {
    return (
      <main className="meme">
        <form>
          <input type="text" placeholder="top text" />
          <input type="text" placeholder="button text" />
          <button>Get a new meme image 🖼</button>
        </form>
        <img src="../img/memeimg.png" alt="meme-img" />
      </main>
    );
}