import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../model/todo.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo:Todo;
  chkField: FormControl;
  txtField: FormControl;

  constructor() { }

  ngOnInit() {
    console.log(this.todo)
  }

}
