import './App.css';
import { AlbumList, SongList } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SongList />
        <AlbumList />
      </header>
    </div>
  );
}

export default App;
