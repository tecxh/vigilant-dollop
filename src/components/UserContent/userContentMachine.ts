import { createMachine } from "xstate";

export enum UserContentMachineStates {
  Albums = 'albums',
  Songs = 'songs',
}

export enum UserContentMachineActions {
  Toggle = 'toggle',
}

export const userContentMachine = createMachine({
  id: 'user-content-tab-machine',
  initial: UserContentMachineStates.Albums,
  states: {
    [UserContentMachineStates.Albums]: {
      on: {
        [UserContentMachineActions.Toggle]: UserContentMachineStates.Songs,
      }
    },
    [UserContentMachineStates.Songs]: {
      on: {
        [UserContentMachineActions.Toggle]: UserContentMachineStates.Albums,
      }
    },
  }
})