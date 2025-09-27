import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { API_URL } from '../app.config';
import { TodoApiModel } from './todo.api.model';

@Injectable({ providedIn: 'root' })
export class TodoApiService {
  private httpClient = inject(HttpClient);
  private apiUrl = inject(API_URL);

  getAll() {
    return this.httpClient.get<TodoApiModel[]>(`${this.apiUrl}/todos`);
  }

  update(id: number, title: string) {
    return this.httpClient.put<TodoApiModel>(
      `${this.apiUrl}/todos/${id}`,
      JSON.stringify({
        title: title,
      }),
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      },
    );
  }

  delete(id: number) {
    return this.httpClient.delete<unknown>(`${this.apiUrl}/todos/${id}`);
  }
}
