export interface StatusState {
  direction: DirectionTypes;
  isGameStarted: boolean;
  isAlive: boolean;
  controllerId: number;
}

export enum DirectionTypes {
  Right = 'right',
  Left = 'left',
  Top = 'top',
  Bottom = 'bottom',
}
