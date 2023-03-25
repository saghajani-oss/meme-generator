import React, { useState } from "react";
import memesData from "./memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  console.log(meme)

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function memeImgGenerate() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const imageUrl = memeArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: imageUrl,
    }));
  }

  function handleTextChange(event) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <main className="meme">
      <div>
        <input
          type="text"
          placeholder="top text"
          name="topText"
          value={meme.topText}
          onChange={handleTextChange}
        />
        <input
          type="text"
          placeholder="button text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleTextChange}
        />
        <button onClick={memeImgGenerate}>Get a new meme image 🖼</button>
      </div>
      <img src={meme.randomImage} alt="meme-img" />
      <h2 className="image-text top">{meme.topText}</h2>
      <h2 className="image-text bottom">{meme.bottomText}</h2>
    </main>
  );
}
