import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual!: filtrosValidos;

  constructor( private strore: Store<AppState> ) { }

  ngOnInit(): void {

    // this.strore.select('todos')
    //   .subscribe( todos => this.todos =todos );
    this.strore.subscribe( ({ todos, filtro }) => {

      this.todos        = todos;
      this.filtroActual = filtro;

    })

  }

}
