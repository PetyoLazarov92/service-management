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
export class JwtInterceptor implements HttpInterceptor{

    constructor(private toastr : ToastrService, private router: Router){}

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable< HttpEvent<any> > {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if (request.url.endsWith('signup') || request.url.endsWith('signup')){
            request = request.clone({
                setHeaders: {
                    'Authorization' : `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                    'Content-Type' : 'application/json'
                }
            })
        } else {
            request = request.clone({
                setHeaders: {
                    'Authorization' : `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type' : 'application/json'
                }
            })
        }

        return next.handle(request)
            .pipe(tap((res : any) => {
                if(res instanceof HttpResponse && res.body.token) {
                    this.saveToken(res.body);
                    this.toastr.success(res.body.message, "Success!");
                    this.router.navigate(['/furniture/all']);
                }

                if(res instanceof HttpResponse && res.body.success && res.url.endsWith('signup')) {
                    this.toastr.success(res.body.message, "Success!");
                    this.router.navigate(['/signin']);
                }

                if(res instanceof HttpResponse && res.body.success && res.url.endsWith('create')) {
                    this.toastr.success(res.body.message, "Success!");
                    this.router.navigate(['/furniture/all']);
                }
            }));
    }

    private saveToken(data){
        localStorage.setItem('currentUser', JSON.stringify({
            'username': data.user.name,
            'token': data.token,
            'isAdmin': data.user.isAdmin
        }));
    }
}
