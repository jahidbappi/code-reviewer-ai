
export interface CodeReviewFeedback {
  summary: string;
  bugs: string[];
  performance: string[];
  readability: string[];
  security: string[];
  fixedCode: string;
  changedLines: number[];
}
