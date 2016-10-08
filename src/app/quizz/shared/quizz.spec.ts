/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import {Quizz} from './quizz.model';

describe('Quizz', () => {
  it('should create an instance', () => {
    expect(new Quizz('','','')).toBeTruthy();
  });
});
