import { Component, computed, signal } from '@angular/core';

type Difficulty = 'Easy' | 'Normal';
type Direction = 'Left' | 'Right';

@Component({
  imports: [],
  selector: 'app-root',
  template: `
    <section>
      <div>
        <button mat-stroked-button (click)="difficulty.set('Easy')">
          Easy
        </button>
        <button mat-stroked-button (click)="difficulty.set('Normal')">
          Normal
        </button>
      </div>
      <p>Selected Difficulty: {{ difficultyLabel() }}</p>
    </section>

    <section>
      <div>
        <button mat-stroked-button (click)="direction.set('Left')">Left</button>
        <button mat-stroked-button (click)="direction.set('Right')">
          Right
        </button>
      </div>
      <p>{{ directionLabel() }}</p>
    </section>
  `,
  styles: `
    section {
      @apply mx-auto my-5 flex w-fit flex-col items-center gap-2;

      > div {
        @apply flex w-fit gap-5;
      }
    }

    button {
      @apply rounded-md border px-4 py-2;
    }
  `,
  standalone: true,
})
export class AppComponent {
  readonly difficulty = signal<Difficulty>('Easy');
  readonly direction = signal<Direction | undefined>(undefined);

  readonly difficultyLabel = computed<string>(() => {
    return this.difficulty().toString().toUpperCase();
  });

  readonly directionLabel = computed<string>(() => {
    return this.direction()
      ? `You chose to go ${this.direction()?.toString().toUpperCase()}`
      : 'Choose a direction!';
  });
}
