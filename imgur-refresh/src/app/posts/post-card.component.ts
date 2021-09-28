import {Component, Input} from "@angular/core"

@Component({
    selector: "post-card",
    templateUrl:"post-card.component.html"
})

export class PostCardComponent{
        @Input() 
        title! :string;
        @Input() 
        upvotes! :string;
        @Input() 
        comments! :string;
        @Input()
        post_views!: string;
        @Input()
        imagePath!: string;
}