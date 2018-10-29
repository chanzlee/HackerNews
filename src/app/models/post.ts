export class Post {
    public id = null;
    constructor (public title: string, public link: string) {
        this.id = counter++;
    }
}

let counter = 1;