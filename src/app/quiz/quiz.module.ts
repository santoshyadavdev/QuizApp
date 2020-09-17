import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { QuestionComponent } from './question/question.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [QuizComponent, QuestionComponent],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class QuizModule { }
