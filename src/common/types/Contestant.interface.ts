export interface IContestant {
  userID: string;
  displayName: string;
  picture: string;
  score: number;
  currentPosition: number | 0;
  previousPosition: number | 0;
}
