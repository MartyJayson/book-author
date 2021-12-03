import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { SumComponent } from './sum/sum.component';
import { DateComponent } from "./date/date.component";
import { BookComponent} from "./book/book.component";
import {AuthorComponent} from "./author/author.component";
import { CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {CreateAuthorComponent} from "./create-author/create-author.component";
import {EditAuthorComponent} from "./edit-author/edit-author.component";
import {RegistrationComponent} from "./registration/registration.component";
import {LoginComponent} from "./login/login.component";
import {ProfileComponent} from "./profile/profile.component";
import {ChangePasswordComponent} from "./change-password/change-password.component";

const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'sum', component: SumComponent},
  {path: 'date', component: DateComponent},
  {path: 'book', component: BookComponent},
  {path: 'author', component: AuthorComponent},
  {path: 'author/editAuthor/:id', component:EditAuthorComponent},
  {path: 'author/createAuthor', component:CreateAuthorComponent},
  {path: 'book/createBook', component: CreateBookComponent},
  {path: 'book/editBook/:id', component: EditBookComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile/:id', component:ProfileComponent},
  {path: 'profile/changePassword', component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
