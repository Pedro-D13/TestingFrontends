import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  current_list: any;
  constructor(private crud: CrudService) {}

  ngOnInit(): void {
    this.current_list = this.crud.globalList;
  }

  delete(index: number) {
    this.crud.deleteFunc(index);
  }
}
