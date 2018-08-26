//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
// import { UsersComponent } from './clients-all/clients-all.component';
// import { ClientsCreateComponent } from './clients-create/clients-create.component';
// import { ClientsDetailsComponent } from './clients-details/clients-details.component';
import { UsersComponent } from './users/users.component';

export const adminRoutes : Routes = [
    // { path: 'create', component: ClientsCreateComponent },
    { path: 'users', component: UsersComponent },
    // { path: 'details/:id', component: ClientsDetailsComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(adminRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule {}