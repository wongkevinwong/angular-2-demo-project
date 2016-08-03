///<reference path="../../node_modules/angular2/src/core/change_detection/pipe_transform.d.ts"/>
import {PipeTransform, Pipe} from "angular2/core";
import {IProduct} from "./product";
/**
 * Created by kevin on 7/29/2016.
 */

@Pipe({name:'ProductFilter'})
export class ProductFilterPipe implements PipeTransform{
    transform(value:IProduct[], args:string[]):IProduct[]{
        let filter=args[0]?args[0].toLocaleLowerCase():null;

        return filter? value.filter((product:IProduct)=>
            product.productName.toLocaleLowerCase().indexOf(filter)!= -1
        ): value;
    }
}