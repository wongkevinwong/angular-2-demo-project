import {Component, OnChanges, Input, Output, EventEmitter} from "angular2/core";
/**
 * Created by kevin on 8/1/2016.
 */

@Component({
    selector:'star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})
export class StarComponent implements OnChanges{
    starWidth:number;
    @Input() rating:number;
    @Output() ratingClicked :EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges():void{
        this.starWidth = this.rating * 86/5;
    };

    onClick():void{
      this.ratingClicked.emit(`rating : ${this.rating} was clicked`);
    };
}