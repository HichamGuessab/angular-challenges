import { Component, inject, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { randText } from '@ngneat/falso';
import { TodoApiModel } from './todo.api/todo.api.model';
import { TodoStore } from './todo.store';

@Component({
  standalone: true,
  imports: [MatProgressSpinnerModule],
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [],
  providers: [TodoStore],
})
export class AppComponent implements OnInit {
  /** Injects **/
  readonly todoStore = inject(TodoStore);

  /** Signals **/
  todos = this.todoStore.todos;
  loading = this.todoStore.loading;

  /** LifeCycle **/
  ngOnInit() {
    this.getAll();
  }

  /** Public methods **/
  update(todo: TodoApiModel, title: string = randText()) {
    this.todoStore.update(todo, title);
  }

  delete(todo: TodoApiModel) {
    this.todoStore.delete(todo);
  }

  /** Private methods **/
  private getAll() {
    this.todoStore.loadAll();
  }
}
