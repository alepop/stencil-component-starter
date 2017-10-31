import { Component, Prop } from '@stencil/core';
import { SomeBase } from '../../utils/some-base';

@Component({
  tag: 'my-name',
  styleUrl: 'my-name.scss'
})
export class MyName extends SomeBase {
  constructor() {
    super();
  }

  @Prop() first: string;

  @Prop() last: string;

  render() {
    this.log();
    return (
      <div>
        Hello, my name is {this.first} {this.last}
      </div>
    );
  }
}
