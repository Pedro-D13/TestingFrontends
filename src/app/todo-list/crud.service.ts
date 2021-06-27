import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor() {}

  private StringArray = new BehaviorSubject<Array<string>>([
    'this',
    'is',
    'the',
    'starting',
    'list',
  ]);

  globalList = this.StringArray;

  createFunc(input: string): void {
    const arr = this.globalList.getValue();
    arr.push(input);
    this.globalList.next(arr);
  }

  updateFunc(): void {}

  deleteFunc(position: number): void {
    const arr = this.globalList.getValue();
    arr.splice(position, 1);
    this.globalList.next(arr);
  }
}
