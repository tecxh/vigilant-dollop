import './App.css';
import { AlbumList, SongList } from './components';

function App() {
  const handleSaveSong = (songId: string) => {
    console.info(`todo - save song ${songId}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SongList onSave={handleSaveSong} />
        <AlbumList />
      </header>
    </div>
  );
}

export default App;
