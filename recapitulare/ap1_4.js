class SpaceObject{
    constructor(name, size, color){
        this.name = name;
        this.size = size;
        this.color = color;
    }

    fly(){
        console.log(`${this.name} is flying through space.`);
    }
}

class Star extends SpaceObject{
    constructor(name, size, color, temperature){
        super(name, size, color);
        this.temperature = temperature;
    }

    shine(){
        console.log(`${this.name} is shining brightly at a temperaute of ${this.temperature}`);
    }
}

class Plane extends SpaceObject{
    constructor(name, size, color, distanceFromSun){
        super(name, size, color);
        this.distanceFromSun = distanceFromSun;
    }

    orbit(){
        console.log(`${this.name} orbits around it's sun at ${this.distanceFromSun} million kilometers away.`)
        }
}

class SpaceObjectFactory{
    createObject(type,name,size,color, extraParams){
        switch(type){
            case 'star':
                return new Star(name, size, color, extraParams.temperature);
            case 'planet':
                return new Plane(name, size, color, extraParams.distanceFromSun);
            default:
                throw new Error(`Invalind sapce oject type:${type}`);         
        }
    }
}

const factory = new SpaceObjectFactory;
const sun = factory.createObject('star', 'Sun', '1 Solar Mass', 'yellow', {temperature: 5000});
const earth = factory.createObject('planet', 'Earth', "12,742 km diameter", "blue",{distanceFromSun: 7});
sun.shine();
earth.orbit();