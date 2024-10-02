export interface ScoreState {
  scoreList: ScoreListItem[];
  currScore: number;
  level: number;
  mul: number;
}

export interface ScoreListItem {
  score: number;
  date: string;
}
