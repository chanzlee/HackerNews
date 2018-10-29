export class Post {
    public id: number = 1;
    constructor (public title: string, public link: string){
        this.id++;
    }
}