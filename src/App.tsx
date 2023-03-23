import './App.css';
import { AlbumList, SongList } from './components';

function App() {
  const handleContentSave = (contentId: string) => {
    console.info(`todo - save song ${contentId}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <SongList editable onSave={handleContentSave} />
        <AlbumList editable onSave={handleContentSave} />
      </header>
    </div>
  );
}

export default App;
