//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { OrdersCreateComponent } from './orders-create/orders-create.component';
import { OrdersAllComponent } from './orders-all/orders-all.component';

export const ordersRoutes : Routes = [
    { path: 'create', component: OrdersCreateComponent },
    { path: 'all', component: OrdersAllComponent }
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