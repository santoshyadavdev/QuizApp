import { Injectable } from '@angular/core';
import { Quiz } from './quiz';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  question: Quiz[] = [];

  constructor() { }

  getQuestion() {
    return this.question = [
      {
        id: 1,
        options: ['A', 'B', 'C', 'D'],
        question: 'Who is best',
        nextQId: 2
      },
      {
        prevQId: 1,
        id: 2,
        options: ['A', 'B', 'C', 'D'],
        question: 'Best club in the world?',
        nextQId: 3
      },
      {
        prevQId: 2,
        id: 3,
        options: ['A', 'B', 'C', 'D'],
        question: 'Best player in the world?',
      },
    ]
  }


}
