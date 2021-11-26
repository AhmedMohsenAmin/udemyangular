import {Ingrdiant} from "../shared/Ingrediant.model";

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingerdiantes: Ingrdiant[];

    constructor(name: string, desc: string, imgPath: string,ingerdiantes:Ingrdiant[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imgPath;
        this.ingerdiantes = ingerdiantes;
    }
}
