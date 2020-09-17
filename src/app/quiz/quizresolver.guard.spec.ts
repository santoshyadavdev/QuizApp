import { TestBed } from '@angular/core/testing';

import { QuizresolverGuard } from './quizresolver.guard';

describe('QuizresolverGuard', () => {
  let guard: QuizresolverGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(QuizresolverGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
