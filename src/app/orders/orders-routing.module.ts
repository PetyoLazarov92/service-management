//Modules
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { OrdersCreateComponent } from './orders-create/orders-create.component';
// import { FurnitureAllComponent } from './furniture-all/furniture-all.component';
// import { FurnitureMyComponent } from './furniture-my/furniture-my.component';
// import { FurnitureCreateComponent } from './furniture-create/furniture-create.component';
// import { FurnitureDetailsComponent } from './furniture-details/furniture-details.component';
// import { FurnitureEditComponent } from './furniture-edit/furniture-edit.component';

export const ordersRoutes : Routes = [
        { path: 'create', component: OrdersCreateComponent },
//     { path: 'all', component: FurnitureAllComponent },
//     { path: 'my', component: FurnitureMyComponent },
//     { path: 'details/:id', component: FurnitureDetailsComponent },
//     { path: 'edit/:id', component: FurnitureEditComponent }
// ]

@NgModule({
    imports: [
        RouterModule.forChild(ordersRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class OrdersRoutingModule {}