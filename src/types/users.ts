import { Album } from "./albums";
import { Song } from "./songs";

export interface UserSaves {
    albums: Album[];
    songs: Song[]
}

export interface UserContextType {
  _id: string;
  displayName: string;
  email: string;
  saves: UserSaves;
}