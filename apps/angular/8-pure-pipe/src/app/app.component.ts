import { NgFor } from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
  standalone: true,
})
export class MyPipePipe implements PipeTransform {
  transform(value: string, index: number) {
    return `${value} - ${index}`;
  }
}

@Component({
  imports: [NgFor, MyPipePipe],
  selector: 'app-root',
  template: `
    <div *ngFor="let person of persons; let index = index">
      {{ person | myPipe: index }}
    </div>
  `,
  standalone: true,
})
export class AppComponent {
  persons = ['toto', 'jack'];
}
