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
        question: 'Who is best'
      }
    ]
  }


}
