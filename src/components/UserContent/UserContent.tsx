import { useContext, useState } from "react";

import { UserContext } from "../../context/userContext";
import { AlbumList } from "../AlbumList"
import { SongList } from "../SongList"

enum UserContentTabs {
  Songs = 'songs',
  Albums = 'albums',
}

export const UserContent = () => {
  const [activeTab, setActiveTab] = useState<UserContentTabs>(UserContentTabs.Albums)
  const { saves: { albums, songs } } = useContext(UserContext)

  return (
    <div>
      <h2>User Content</h2>
      <button onClick={() => setActiveTab(UserContentTabs.Albums)}>Albums</button>
      <button onClick={() => setActiveTab(UserContentTabs.Songs)}>Songs</button>
      <hr />
      {activeTab === UserContentTabs.Songs && (
        <div>
          <h3>Songs</h3>
          <SongList songs={songs} />
        </div>
      )}
      {activeTab === UserContentTabs.Albums && (
        <div>
          <h3>Albums</h3>
          <AlbumList albums={albums} />
        </div>
      )}
    </div>
  )
}