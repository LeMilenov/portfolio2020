export class project {
    public id:number;
    public title:string;
    public github:string;
    public directLink:string;
    public picturesFolder:string;
    public nbPictures:number;
    public tags:string[];
    public description: string;

    constructor(id:number, title:string,  description: string,picturesFolder:string, nbPictures:number, tags:string[],github?:string,directLink?:string){
        this.id = id;
        this.title = title;
        this.github = github;
        this.description = description;
        this.picturesFolder = picturesFolder;
        this.nbPictures = nbPictures;
        this.tags = tags;
        this.directLink = directLink;
    }
}