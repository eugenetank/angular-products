import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component'; 
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'auth', component: AuthComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/product-list', pathMatch: 'full' },
  { path: '**', redirectTo: '/product-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

