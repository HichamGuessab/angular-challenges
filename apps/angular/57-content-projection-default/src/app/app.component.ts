import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardComponent } from './card.component';

@Component({
  imports: [CardComponent],
  selector: 'app-root',
  template: `
    <app-card message="Message1">
      <div ngProjectAs="titre">Titre 1</div>
      <div ngProjectAs="message">Message 1</div>
    </app-card>
    <app-card>
      <div ngProjectAs="titre">Titre 2</div>
    </app-card>
  `,
  host: {
    class: 'p-4 block flex flex-col gap-1',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
