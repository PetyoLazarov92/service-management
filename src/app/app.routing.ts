//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModule } from './orders/orders.module';
import { ClientsModule } from './clients/clients.module';
import { AdminModule } from './admin/admin.module';

// Components
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './authentication/signin/signin.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AuthGuard } from './authentication/guards/auth.guard';


const routes : Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: SigninComponent },
  { path: 'register', component: SignupComponent },
  { path: 'orders',canActivate: [AuthGuard], loadChildren: () => OrdersModule},
  { path: 'clients',canActivate: [AuthGuard], loadChildren: () => ClientsModule},
  { path: 'admin',canActivate: [AuthGuard], loadChildren: () => AdminModule},
  { path: '**', redirectTo: '/home' }
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {  }