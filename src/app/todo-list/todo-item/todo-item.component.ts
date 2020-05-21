import { TodoListService } from './../../todolist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  itemsList: { description: string }[] = []

  constructor(private todolistService: TodoListService) {
    todolistService.onInitialiseList()
  }

  ngOnInit(): void {
    this.itemsList = this.todolistService.itemsList
  }

  onAddItem(description: string) {
    this.todolistService.addItemToList(description)
  }

  onRemoveItem(i: number) {
    this.todolistService.removeItemToList(i)
  }
}
