export class Post{ 
    title:string; 
    upvotes:string; 
    comments:string;
    post_views: string;
    imagePath: string;

    constructor({title, upvotes, comments, post_views, imagePath} : 
        {title:string, upvotes:string, comments:string, post_views:string, imagePath:string }) {
        this.title = title;
        this.upvotes = upvotes;
        this.comments = comments;
        this.post_views = post_views;
        this.imagePath = imagePath;
    }
}