import { IImage } from 'ng-simple-slideshow';

export interface Project{
    id:number;
    imageUrls: IImage[];
    icons: string[];
    desc:string;
    githubLink:string;
    websiteLinnk?:string;
}