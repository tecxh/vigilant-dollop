import { AlbumList } from "../AlbumList"
import { SongList } from "../SongList"

export const UserContent = () => {
    const { songs, albums } = (() => {
        return {
            songs: [],
            albums: []
        }
    })();

    return (
        <div>
            <h2>User Content</h2>
            <SongList songs={songs} />
            <AlbumList albums={albums} />
        </div>
    )
}