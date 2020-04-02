export class project {
    public id:number;
    public title:string;
    public github:string;
    public pictures:string[];
    public tasks:string[];

    constructor(id:number, title:string, github:string, pictures:string[], tasks:string[]){
        this.id = id;
        this.title = title;
        this.github = github;
        this.pictures = pictures;
        this.tasks = tasks;
    }
}