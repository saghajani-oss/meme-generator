import React, {useState} from "react";
import memesData from "./memesData";

export default function Meme() {
  // let [memeImage, setMemeImage] = useState("");
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData)

  function memeImgGenerate() {
    const memeArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const imageUrl = memeArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: imageUrl
    }));
  }
    return (
      <main className="meme">
        <div>
          <input type="text" placeholder="top text" />
          <input type="text" placeholder="button text" />
          <button onClick={memeImgGenerate}>Get a new meme image 🖼</button>
        </div>
        <img src={meme.randomImage} alt="meme-img" />
      </main>
    );
}