export class Ingrdiant {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}

/*
i cana replace all above code with this code which give me the same result


export class Ingrdiant {
    constructor(public name:string,public amount:number) {
        
    }
}

*/ 
