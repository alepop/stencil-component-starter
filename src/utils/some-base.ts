import { Component } from '@stencil/core';

@Component({
  tag: 'some-base'
})
export class SomeBase {
  public log() {
    console.warn('log');
  }
}
