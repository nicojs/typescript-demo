require('reflect-metadata');

function log(descriptor: { name: string }): (constructor: Function) => void {
    return function(constructor: Function) {
        return function() {
            var args = '';
            for (var i in arguments) {
                args += arguments[i];
            }
            console.log(`constructing ${descriptor.name} using: ${args}`);
            return constructor.apply(this, arguments);
        }
    }
}

function sealed(constructor: Function){
    Object.seal(constructor);
    Reflect.defineMetadata('sealed', true, constructor);
}

@sealed
@log({ name: 'Person' })
class Person {
    constructor(public name: string) { }
}


let nicoJS = new Person('NicoJS');
console.log(nicoJS);
console.log(Reflect.getMetadata('sealed', Person));

