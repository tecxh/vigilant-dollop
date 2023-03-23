import './App.css';
import { AlbumList, SongList, UserContent } from './components';
import { UserContext } from './context/userContext';
import { mockSongs, mockAlbums } from './mocks';

function App() {
  const handleContentSave = (contentId: string) => {
    console.info(`todo - save song ${contentId}`)
  }

  return (
    <div className="App">
      <UserContext.Provider value={{
        _id: '7a7a7a',
        displayName: 'Velma Dinkley',
        email: 'crytidFan87@dinkley.net',
        saves: {
          albums: [],
          songs: [],
        }
      }}>
        <header className="App-header">
          <SongList songs={mockSongs} editable onSave={handleContentSave} />
          <AlbumList albums={mockAlbums} editable onSave={handleContentSave} />
        </header>
        <UserContent />
      </UserContext.Provider>
    </div>
  );
}

export default App;
