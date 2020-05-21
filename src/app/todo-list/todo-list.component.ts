import { TodoListService } from './../todolist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  itemsList: { description: string }[] = []


  constructor(private todolistService: TodoListService) {
    todolistService.onInitialiseList()
  }
  ngOnInit(): void {
    this.itemsList = this.todolistService.itemsList
  }

  onRemoveItem(i: number) {
    this.todolistService.removeItemToList(i)
  }

}
