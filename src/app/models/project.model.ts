import { IImage } from 'ng-simple-slideshow';

export interface Project{
    id:number;
    title:string;
    imageUrls: IImage[];
    icons: string[];
    desc:string;
    tags: string[];
    githubLink:string;
    fastDesc?:string;
    preview?: string;
    websiteLink?:string;
}