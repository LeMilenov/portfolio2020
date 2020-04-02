export class Employer{
    public id:number;
    public name: string;
    public title:string;
    public dateStart:Date;
    public dateEnd: Date;
    public tasks: string[];	

    constructor(id:number, name:string,title:string, dateStart:Date, dateEnd:Date, tasks:string[]){
        this.id = id;
        this.name = name;
        this.title = title;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.tasks = tasks;
    }
}