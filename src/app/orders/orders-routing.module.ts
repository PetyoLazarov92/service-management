//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { OrdersAllComponent } from './orders-all/orders-all.component';
import { OrdersDetailsComponent } from './orders-details/orders-details.component';

export const ordersRoutes : Routes = [
    { path: 'create', component: OrdersCreateComponent },
    { path: 'all', component: OrdersAllComponent },
    { path: 'details/:id', component: OrdersDetailsComponent }
]

@NgModule({
    imports: [
        RouterModule.forChild(ordersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class OrdersRoutingModule {}