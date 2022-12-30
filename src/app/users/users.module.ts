import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {UsersRoutingModule} from "./users-routing.module";
import {ListComponent} from "./list.component";
import {LayoutComponent} from "./layout.component";
import {AddEditComponent} from "./add-edit.component";



@NgModule({
	imports: [
		CommonModule,
		ReactiveFormsModule,
		UsersRoutingModule
	],
	declarations: [
		LayoutComponent,
		ListComponent,
		AddEditComponent
	]
})
export class UsersModule { }
