import {IProduct} from "./product";
import {IProduct} from "./product";
import {Injectable} from "angular2/core";

import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService{
    private _url = 'api/products/products.json';

    constructor(private _http: Http){}

    getProducts() : Observable<IProduct[]>{
        return this._http.get(this._url)
            .map((response:Response)=> <IProduct[]>response.json())
            .do(data => console.log('All:' + JSON.stringify(data) ))
            .catch(this.handleError)
            ;
    }

    private handleError(error:Response){
     console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}