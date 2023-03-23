import './App.css';
import { AlbumList, SongList } from './components';
import { mockSongs, mockAlbums } from './mocks';

function App() {
  const handleContentSave = (contentId: string) => {
    console.info(`todo - save song ${contentId}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SongList songs={mockSongs} editable onSave={handleContentSave} />
        <AlbumList albums={mockAlbums} editable onSave={handleContentSave} />
      </header>
    </div>
  );
}

export default App;
