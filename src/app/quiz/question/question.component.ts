import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question$: Observable<Quiz>;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    // this.questionId$ = this.router.paramMap.pipe(
    //   map((res) => + res.get('id'))
    // );

    this.question$ = this.router.data.pipe(
      pluck('quizData')
    )

    // this.router.paramMap.subscribe(data => console.log(data.get('id')));
  }

}
