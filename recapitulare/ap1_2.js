class Person{
    constructor(name){
        this.name = name;
    }

    say(name){
        if(name){
            this.#sayWithName();
        }else{
            this.#sayWithoutName();
        }
    }

    #sayWithName(){
        console.log(`Salut, sunt ${this.name}!`);
    }

    #sayWithoutName(){
        console.log(`Salut!`);
    }
}

let Dan = new Person("Dan");
Dan.say("Dan");
Dan.say();
