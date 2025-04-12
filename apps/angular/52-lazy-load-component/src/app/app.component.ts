import { Component } from '@angular/core';
import { PlaceholderComponent } from './placeholder.component';
import { TopComponent } from './top.component';

@Component({
  selector: 'app-root',
  template: `
    <div class="h-screen bg-gray-500">
      @defer (on interaction(myButton)) {
        <app-top />
      } @loading {
        <p>caca</p>
      } @placeholder {
        <app-placeholder />
        <button
          #myButton
          class="rounded-sm border border-blue-500 bg-blue-300 p-2">
          Load Top
        </button>
      }
    </div>
  `,
  standalone: true,
  imports: [PlaceholderComponent, TopComponent],
})
export class AppComponent {}
