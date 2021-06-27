import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {
  constructor(private crud: CrudService, private fb: FormBuilder) {}

  myForm = this.fb.group({
    newItem: new FormControl(''),
  });

  add() {
    let text = this.myForm.get('newItem')?.value;
    console.log(text);
    this.crud.createFunc(text);
  }
}
