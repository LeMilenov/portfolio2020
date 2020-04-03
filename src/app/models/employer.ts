import * as moment from 'moment';
export class Employer{
    public id:number;
    public name: string;
    public title:string;
    public dateStart:moment.Moment;
    public dateEnd: moment.Moment;
    public tasks: string[];	

    constructor(id:number, name:string,title:string, dateStart:moment.Moment, dateEnd:moment.Moment, tasks:string[]){
        this.id = id;
        this.name = name;
        this.title = title;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.tasks = tasks;
    }
}