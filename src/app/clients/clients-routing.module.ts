//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { ClientsAllComponent } from './clients-all/clients-all.component';
import { ClientsCreateComponent } from './clients-create/clients-create.component';

export const ordersRoutes : Routes = [
    { path: 'create', component: ClientsCreateComponent },
    { path: 'all', component: ClientsAllComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(ordersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ClientsRoutingModule {}