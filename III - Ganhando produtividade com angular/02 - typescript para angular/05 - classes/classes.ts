class Character {
    protected nome: string
    poder: string
    age?: number
    skill:number
    

    constructor(name:string, poder:string, age:number, skill:number) {
        this.nome = name;
        this.poder = poder;
        this.age = age;
        this.skill = skill;
        
    }


    attack(): void{
        console.log(`Attack whith ${this.skill} points`)
    }
}

const p1 = new Character('Joka', 'Soco', 6, 10)

/* data modifiers 
 - public -> prop default, qulaquer um pode acessar e alterar uma propredade
 - private - só pode ser alterado dentro da classe
 - protectd - só pode ser enxergado dentro da classe e das classes que extendem dela

 ** também se aplicam a métodos das classes **
*/

// subclass

class Mago extends Character{
    magicPoits: number
    
    constructor(name: string, poder: string, age: number, skill: number, magicPoints: number) {
        super(name, poder,age, skill)      
        this.magicPoits = magicPoints
    }
}

const p2 = new Mago('Magoo','Poderzinho', 10, 9,100)