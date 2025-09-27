import { inject, InjectionToken } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';
import { TodoApiModel } from './todo.api/todo.api.model';
import { TodoApiService } from './todo.api/todo.api.service';

const TODO_STATE = new InjectionToken<TodoState>('BookSearchState', {
  factory: () => initialState,
});

type TodoState = {
  todos: TodoApiModel[];
  loading: boolean;
  error: string | null;
};

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
};

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : 'Erreur inconnue';
}

export const TodoStore = signalStore(
  withState(() => inject(TODO_STATE)),
  withMethods((store, todoApiService = inject(TodoApiService)) => ({
    async loadAll() {
      try {
        patchState(store, { loading: true });
        const updated = await firstValueFrom(todoApiService.getAll());
        patchState(store, { todos: updated });
      } catch (error) {
        patchState(store, { error: getErrorMessage(error) });
      } finally {
        patchState(store, { loading: false });
      }
    },

    async update(todo: TodoApiModel, title: string) {
      try {
        patchState(store, { loading: true });
        const updatedTodo = await firstValueFrom(
          todoApiService.update(todo.id, title),
        );
        const updatedTodos = store
          .todos()
          .map((currentTodo) =>
            currentTodo.id === todo.id ? updatedTodo : currentTodo,
          );
        patchState(store, { todos: updatedTodos });
      } catch (error) {
        patchState(store, { error: getErrorMessage(error) });
      } finally {
        patchState(store, { loading: false });
      }
    },

    async delete(todo: TodoApiModel) {
      try {
        patchState(store, { loading: true });
        await firstValueFrom(todoApiService.delete(todo.id));
        const todosUpdated = store
          .todos()
          .filter((currentTodo) => currentTodo.id !== todo.id);
        patchState(store, { todos: todosUpdated });
      } catch (error) {
        patchState(store, { error: getErrorMessage(error) });
      } finally {
        patchState(store, { loading: false });
      }
    },
  })),
);
