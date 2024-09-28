import "./App.css";
import { AudioPlayerProvider } from "./AudioContext";
import { Glob } from "./glo";
function App() {
  return (
    <div className="App">
      <AudioPlayerProvider>
        <Glob />
      </AudioPlayerProvider>
    </div>
  );
}

export default App;
