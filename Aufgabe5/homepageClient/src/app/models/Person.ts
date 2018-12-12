export class Person {
    public name: string;
    public picturePath: string;
    public birthdate: string;
    public bornIn: string;
    public profession: string;

    public constructor(name: string, path: string, birthdate: string, bornIn: string, 
            profession: string) {
        this.name = name;
        this.picturePath = path;
        this.birthdate = birthdate;
        this.bornIn = bornIn;
        this.profession = profession;
    }
}