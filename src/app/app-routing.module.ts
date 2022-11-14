import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddNewComponent } from './add-new/add-new.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './core/login/login.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: 'new', component: AddNewComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: LoginComponent },
    { path: 'details/:id', component: DetailsComponent },
    { path: '**', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
