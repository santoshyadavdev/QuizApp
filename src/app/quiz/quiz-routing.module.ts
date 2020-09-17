import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionComponent } from './question/question.component';

import { QuizComponent } from './quiz.component';
import { QuizresolverGuard } from './quizresolver.guard';

const routes: Routes = [
  {
    path: '', component: QuizComponent,
    children: [
      {
        path: ':id', component: QuestionComponent,
        resolve: {
          quizData: QuizresolverGuard
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
