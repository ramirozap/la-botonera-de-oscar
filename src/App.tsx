import React from "react";
import "./App.css";

function App() {
  const audioFiles: { [key: string]: { path: string; color: string } } = {
    "veni oscar": {
      color: "#f6dbba",
      path: "audio/veni-oscar.mp3",
    },
    "veni amigo": {
      color: "#db604c",
      path: "audio/veni-amigo.mp3",
    },
    hola: {
      color: "#b13353",
      path: "audio/hoooola.mp3",
    },
    "que te has puesto": {
      color: "#5e2052",
      path: "audio/que-te-has-puesto.mp3",
    },
    "andas con frio": {
      color: "#74c99e",
      path: "audio/andas-con-frio.mp3",
    },
    "a que vieja se lo robaste": {
      color: "#317c87",
      path: "audio/a-que-vieja-se-lo-robaste.mp3",
    },
    "pero que lindo te queda": {
      color: "#271854",
      path: "audio/pero-que-lindo-te-queda.mp3",
    },
    "pero que linda bufanda": {
      color: "#1a1016",
      path: "audio/pero-que-linda-bufanda.mp3",
    },
  };

  const play = (path: string) => {
    const audio = new Audio(path);
    audio.play();
  };

  return (
    <div className="App">
      {Object.keys(audioFiles).map((key) => (
        <button
          onClick={() => play(audioFiles[key].path)}
          style={{ background: audioFiles[key].color }}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default App;
