import React,{useState} from 'react'
import Player from './components/player'
import Song from './components/song'
import "./styles/app.scss"
import data from './util'

function App() {

  const [songs,setSongs]=useState(data())
  const [currentSong, setcurrentSong] = useState(songs[0])
  const [isPlaying, setisPlaying] = useState(false)

  return (
    <div className="App">
      <Song  currentSong={currentSong}/>
      <Player isPlaying={isPlaying} setisPlaying={setisPlaying} currentSong={currentSong} />
    </div>
  );
}

export default App;
