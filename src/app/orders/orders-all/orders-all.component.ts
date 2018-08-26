import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../models/order.model';
import { Observable } from 'rxjs';
import { OrdersService } from '../orders.service';
import { AuthService } from '../../authentication/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders-all',
  templateUrl: './orders-all.component.html',
  styleUrls: ['./orders-all.component.css']
})
export class OrdersAllComponent implements OnInit {
  orders : Observable<OrderModel[]>;
  pageSize: number = 5;
  currentPage: number = 1;

  constructor(
    private ordersService : OrdersService,
    private authService: AuthService,
    private toastr:ToastrService
  ) { }

  ngOnInit() {
    this.orders = this.ordersService.getAllOrders();
  }

  changePage(page){
    this.currentPage = page;
  }

  deleteItem(id: string) {
    this.ordersService.deleteOrder(id)
      .subscribe(() => {
        this.orders = this.ordersService.getAllOrders();
        this.toastr.success('Order Deleted!', "Warning!");
      })
  }
}
