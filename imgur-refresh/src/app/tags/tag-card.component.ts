import {Component, Input} from "@angular/core"

@Component({
    selector: "tag-card",
    templateUrl:"tag-card.component.html"
})

export class TagCardComponent{
        @Input() 
        topic! :string;
        @Input() 
        posts! :string;
        @Input() 
        imagePath! :string;
}