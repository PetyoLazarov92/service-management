import {
    HttpResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

const appKey = "kid_B1uNxw987";
const appSecret = "d68ee413df0e414c8d3514cdf951c8a1";

@Injectable()
export class KinveyInterceptor implements HttpInterceptor{

    constructor(private toastr : ToastrService, private router: Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable< HttpEvent<any> > {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(btoa(`${appKey}:${appSecret}`));

        if (request.url.endsWith('login') || request.url.endsWith(`${appKey}`)){
            request = request.clone({
                setHeaders: {
                    'Authorization' : `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type' : 'application/json'
                }
            })
        } else {
            request = request.clone({
                setHeaders: {
                    'Authorization' : `Kinvey ${currentUser.authtoken}`,
                    'Content-Type' : 'application/json'
                }
            })
        }

        return next.handle(request)
            .pipe(tap((res : any) => {
                console.log(res);
                //AuthService Handling
                if(res instanceof HttpResponse && res.status === 200 && res.url.endsWith('/login')) {
                    this.saveAuthToken(res.body);
                    this.toastr.success("login successful", "Success!");
                    this.router.navigate(['/home']);
                }

                if(res instanceof HttpResponse && res.status === 201 && res.url.endsWith(`${appKey}`)) {
                    this.toastr.success("register successful", "Success!");
                    this.router.navigate(['/login']);
                }

                if(res instanceof HttpResponse && res.status === 204 && res.url.endsWith('_logout')) {
                    localStorage.clear();
                    this.toastr.success('logaout successful', "Success!");
                    this.router.navigate(['/login']);
                }
                //ClientService handling
                if(res instanceof HttpResponse && res.status === 201 && res.url.endsWith('/clients')) {
                    this.toastr.success("New client added successfully!", "Success!");
                }
                //OrderService handling
                if(res instanceof HttpResponse && res.status === 201 && res.url.endsWith('/orders')) {
                    this.toastr.success("New order added successfully!", "Success!");
                }
            }));
    }

    private saveAuthToken(data){
        localStorage.setItem('currentUser', JSON.stringify({
            'username': data.username,
            'authtoken': data._kmd.authtoken
            // 'isAdmin': data.user.isAdmin
        }));
    }
}
