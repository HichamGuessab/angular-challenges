import { Component, input as routerInput } from '@angular/core';

@Component({
  selector: 'app-subscription',
  template: `
    <div>TestId: {{ testId() }}</div>
    <div>Permission: {{ permission() }}</div>
    <div>User: {{ user() }}</div>
  `,
  standalone: true,
})
export default class TestComponent {
  testId = routerInput.required<number>();
  permission = routerInput.required<string>();
  user = routerInput.required<string>();
}
