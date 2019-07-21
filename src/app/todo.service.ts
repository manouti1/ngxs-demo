import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "./models/Todo";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  private ToDO_URL: string;
  constructor(private http: HttpClient) {
    this.ToDO_URL = "https://jsonplaceholder.typicode.com/todos";
  }

  fetchTodos() {
    return this.http.get<Todo[]>(this.ToDO_URL);
  }

  getTodoById(id: number) {
    return this.http.get<Todo>(`${this.ToDO_URL}/${id}`);
  }

  deleteTodo(id: number) {
    return this.http.delete(`${this.ToDO_URL}/${id}`);
  }

  addTodo(payload: Todo) {
    return this.http.post<Todo>(`${this.ToDO_URL}`, payload);
  }

  updateTodo(payload: Todo, id: number) {
    return this.http.put<Todo>(`${this.ToDO_URL}/${id}`, payload);
  }
}
