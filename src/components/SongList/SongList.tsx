import { mockSongs } from '../../mocks';

interface SongListProps {
  onSave?: (songId: string) => void;
  editable?: boolean;
}

export const SongList = ({ onSave, editable = false }: SongListProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: 20 }}>
      {mockSongs.map((song) => {
        const { title, artist, _id } = song;

        return (
          <div key={_id} style={{ backgroundColor: 'black', padding: 16 }}>
            <p>{`${title} - ${artist}`}</p>
            {editable && onSave && (
              <button onClick={() => onSave(_id)} style={{ backgroundColor: 'pink' }}>save</button>
            )}
          </div>
        )
      })}
    </div>
  )
}