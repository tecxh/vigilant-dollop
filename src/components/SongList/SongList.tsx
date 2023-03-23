import { mockSongs } from '../../mocks';

interface SongListProps {
  onSave: (songId: string) => void;
}

export const SongList = ({ onSave }: SongListProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', columnGap: 20 }}>
      {mockSongs.map((song) => {
        const { title, artist, _id } = song;

        return (
          <div key={_id} style={{ backgroundColor: 'black', padding: 16 }}>
            <p>{`${title} - ${artist}`}</p>
            <button onClick={() => onSave(_id)} style={{ backgroundColor: 'pink' }}>save</button>
          </div>
        )
      })}
    </div>
  )
}