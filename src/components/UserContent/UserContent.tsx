import { useMachine } from "@xstate/react";
import { useContext, useState } from "react";

import { UserContext } from "../../context/userContext";
import { AlbumList } from "../AlbumList"
import { SongList } from "../SongList"
import { userContentMachine, UserContentMachineActions, UserContentMachineStates } from "./userContentMachine";

export const UserContent = () => {
  const [state, dispatch] = useMachine(userContentMachine);
  const activeTab = state.value;
  const { saves: { albums, songs } } = useContext(UserContext)

  const toggle = () => dispatch({ type: UserContentMachineActions.Toggle })

  return (
    <div>
      <h2>User Content</h2>
      <button onClick={toggle}>Albums</button>
      <button onClick={toggle}>Songs</button>
      <hr />
      {activeTab === UserContentMachineStates.Songs && (
        <div>
          <h3>Songs</h3>
          <SongList songs={songs} />
        </div>
      )}
      {activeTab === UserContentMachineStates.Albums && (
        <div>
          <h3>Albums</h3>
          <AlbumList albums={albums} />
        </div>
      )}
    </div>
  )
}