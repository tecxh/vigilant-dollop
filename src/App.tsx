import { useState } from 'react';

import './App.css';
import { AlbumList, SongList, UserContent } from './components';
import { UserContext } from './context/userContext';
import { mockSongs, mockAlbums } from './mocks';
import { Album, Song } from './types';

function App() {
  const [savedAlbums, setSavedAlbums] = useState<Album[]>([])
  const [savedSongs, setSavedSongs] = useState<Song[]>([]);

  const handleAlbumClick = (albumId: string) => {
    const index = savedAlbums.findIndex((album) => album._id === albumId);

    if (index !== -1) {
      const copy = [...savedAlbums]
      copy.splice(index, 1)
      setSavedAlbums(copy)
    } else {
      const album = mockAlbums.find((album) => album._id === albumId)
      if (!album) {
        console.error('no song with matching id found')
        return;
      }
      setSavedAlbums([...savedAlbums, album])
    }
  }

  const handleSongClick = (songId: string) => {
    const index = savedSongs.findIndex((song) => song._id === songId);

    if (index !== -1) {
      const copy = [...savedSongs]
      copy.splice(index, 1)
      setSavedSongs(copy)
    } else {
      const song = mockSongs.find((song) => song._id === songId)
      if (!song) {
        console.error('no song with matching id found')
        return;
      }
      setSavedSongs([...savedSongs, song])
    }
  }

  return (
    <div className="App">
      <UserContext.Provider value={{
        _id: '7a7a7a',
        displayName: 'Velma Dinkley',
        email: 'crytidFan87@dinkley.net',
        saves: {
          albums: savedAlbums,
          songs: savedSongs,
        }
      }}>
        <header className="App-header">
          <SongList songs={mockSongs} editable onSave={handleSongClick} />
          <AlbumList albums={mockAlbums} editable onSave={handleAlbumClick} />
        </header>
        <UserContent />
      </UserContext.Provider>
    </div>
  );
}

export default App;
