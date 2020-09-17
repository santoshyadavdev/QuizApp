import { Injectable } from '@angular/core';
import { Resolve, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Quiz } from './quiz';
import { QuizService } from './quiz.service';

@Injectable({
  providedIn: 'root'
})
export class QuizresolverGuard implements Resolve<Quiz> {
  constructor(private quizService: QuizService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Quiz | Observable<Quiz> | Promise<Quiz> {
   return this.quizService.getQuestion().find((res) => res.id === + route.paramMap.get('id'));
  }



}
