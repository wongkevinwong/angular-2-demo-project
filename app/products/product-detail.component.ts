import {Component} from "angular2/core";
import {RouteParams, Router} from "angular2/router";
/**
 * Created by kevin on 8/2/2016.
 */

@Component({
    templateUrl:'app/products/product-detail.component.html'
})
export class ProductDetailComponent{
    pageTitle:string="Product Detail";

    constructor(private _routeParams : RouteParams,
                private _router : Router
    ){
        let id = +_routeParams.get('id');
        this.pageTitle += `: ${id}`;
    }

    onClick():void{
        this._router.navigate(['Products']);
    }
}