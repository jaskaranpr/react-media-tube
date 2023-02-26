import { useState } from "react";
import "./App.css";
import { VideoPlayer } from "./Components/Video";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <VideoPlayer
        width={500}
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
        aspectRatio={16 / 9}
      />
    </div>
  );
}

export default App;
