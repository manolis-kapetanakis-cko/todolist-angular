import { TodoListService } from './../../todolist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  constructor(private todolistService: TodoListService) { }

  ngOnInit(): void {
  }

  onAddItem(description: string) {
    this.todolistService.addItemToList(description)
  }

}
