import './App.css';
import { AlbumList, SongList } from './components';

function App() {
  const handleContentSave = (contentId: string) => {
    console.info(`todo - save song ${contentId}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SongList onSave={handleContentSave} />
        <AlbumList onSave={handleContentSave} />
      </header>
    </div>
  );
}

export default App;
