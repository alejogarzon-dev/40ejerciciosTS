/*
Crea una clase Pila<T> con métodos: apilar(item: T), desapilar() que retorne el 
último y lo quite, tope() que retorne el último sin quitarlo, y vacia() que retorne 
boolean. Prueba la pila con números y luego con strings. 
*/

class Pila<T> {
    private elementos: T[] = [];

    apilar(item: T): void {
        this.elementos.push(item);
    }

    desapilar(): T | undefined {
        return this.elementos.pop();
    }

    tope(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }

    vacia(): boolean {
        return this.elementos.length === 0;
    }

// Método para mostrar el contenido de la pila (opcional)
    mostrarPila(): void {
        console.log(this.elementos);
    }
}

// Prueba con números
let pilaNumeros = new Pila<number>();
pilaNumeros.apilar(1);
pilaNumeros.apilar(2);

console.log("Tope de la pila de números:", pilaNumeros.tope());
pilaNumeros.desapilar();
console.log("Pila de números después de desapilar:", pilaNumeros);
console.log("¿La pila de números está vacía?", pilaNumeros.vacia());

// Prueba con strings
let pilaStrings = new Pila<string>();
pilaStrings.apilar("Hola");
pilaStrings.apilar("Mundo");

console.log("Tope de la pila de strings:", pilaStrings.tope());
pilaStrings.desapilar();
console.log("Pila de strings después de desapilar:", pilaStrings);
console.log("¿La pila de strings está vacía?", pilaStrings.vacia());

