import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [UpdateComponent, ListComponent, CreateComponent];

const modules = [
  CommonModule,
  MatInputModule,
  MatListModule,
  MatButtonModule,
  ReactiveFormsModule,
  FormsModule,
];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class TodoListModule {}
