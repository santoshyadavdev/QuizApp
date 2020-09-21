export interface Quiz {
  prevQId?: number;
  id: number;
  question: string;
  options: string[];
  nextQId?: number;
}

// export interface Qoptions {
//   [key: string]: boolean;
// }
