import { Component, inject, input as routerInput } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  private activatedRoute = inject(ActivatedRoute);

  // router inputs
  testId = routerInput.required<number>();
  permission = routerInput.required<string>();
  user = routerInput.required<string>();
}
