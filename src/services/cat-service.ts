import Cat from "../models/cat.model";

export class CatService{
    public createANewCatByConstructor(name: string, age: number){
        const cat = new Cat({
            name: name,
            age: age
        })
    }
}