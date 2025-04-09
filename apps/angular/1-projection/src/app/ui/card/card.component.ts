import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  input,
  Output,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: 'ng-template [card-list-item]',
  standalone: true,
})
export class CardListItemDirective {}

@Component({
  selector: 'app-card',
  template: `
    <ng-content select="[my-card]" />
    <section>
      @for (item of list(); track item) {
        <ng-template
          [ngTemplateOutlet]="myTemplate"
          [ngTemplateOutletContext]="{ $implicit: item }" />
      }
    </section>
    <button
      class="rounded-sm border border-blue-500 bg-blue-300 p-2"
      (click)="addNewItemEvent.emit()">
      Add
    </button>
  `,
  host: {
    class: 'flex w-fit flex-col gap-3 rounded-md border-2 border-black p-4',
  },
  imports: [NgTemplateOutlet],
  standalone: true,
})
export class CardComponent<T> {
  @Output() deleteItemEvent = new EventEmitter<number>();
  @Output() addNewItemEvent = new EventEmitter<void>();

  readonly list = input<T[] | null>(null);

  @ContentChild(CardListItemDirective, { read: TemplateRef })
  myTemplate!: TemplateRef<{ $implicit: T }>;
}
