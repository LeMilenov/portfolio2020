import { IImage } from 'ng-simple-slideshow';

export interface Project{
    id:number;
    title:string;
    imageUrls: IImage[];
    icons: string[];
    desc:string;
    githubLink:string;
    websiteLinnk?:string;
}