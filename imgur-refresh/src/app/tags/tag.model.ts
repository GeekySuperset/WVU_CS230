export class Tag{
    topic:string;
    posts:string;
    imagePath: string;

    constructor({topic, posts, imagePath} : 
        {topic:string, posts:string, imagePath:string}) {
        this.topic = topic;
        this.posts = posts;
        this.imagePath = imagePath;
    }
}