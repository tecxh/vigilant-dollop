import { mockAlbums } from "../../mocks/albumMocks";
import { Album } from "../../types";

interface AlbumListProps {
  onSave?: (albumId: string) => void;
  editable?: boolean;
  albums: Album[];
}

export const AlbumList = ({ albums, onSave, editable = false }: AlbumListProps) => {

  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: 20 }}>
      {albums.map((album) => {
        const { title, artist, numberOfTracks, _id } = album;

        return (
          <div style={{ backgroundColor: 'black', padding: 16 }}>
            <p>{`${title} - ${artist}`}</p>
            <p>{`Track length: ${numberOfTracks}`}</p>
            {editable && onSave && (
              <button onClick={() => onSave(_id)} style={{ backgroundColor: 'pink' }}>save</button>
            )}
          </div>
        )
      })}
    </div>
  )
}