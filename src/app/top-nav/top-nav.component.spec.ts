/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { TopNavComponent } from './top-nav.component';

describe('Component: TopNav', () => {
  it('should create an instance', () => {
    let component = new TopNavComponent();
    expect(component).toBeTruthy();
  });
});
