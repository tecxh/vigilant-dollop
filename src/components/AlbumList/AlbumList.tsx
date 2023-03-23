import { mockAlbums } from "../../mocks/albumMocks";

interface AlbumListProps {
  onSave: (albumId: string) => void;
}

export const AlbumList = ({ onSave }: AlbumListProps) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: 20 }}>
      {mockAlbums.map((album) => {
        const { title, artist, numberOfTracks, _id } = album;

        return (
          <div style={{ backgroundColor: 'black', padding: 16 }}>
            <p>{`${title} - ${artist}`}</p>
            <p>{`Track length: ${numberOfTracks}`}</p>
            <button onClick={() => onSave(_id)} style={{ backgroundColor: 'pink' }}>save</button>
          </div>
        )
      })}
    </div>
  )
}