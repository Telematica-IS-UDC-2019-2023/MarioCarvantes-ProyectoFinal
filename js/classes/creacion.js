import Nodo from "./Nodo.js"
export default class creacion {
    constructor(){
        raiz = null;
    }

    //crear raiz
    agregar(nuevo){
        if(this.raiz === null){
            this.raiz = nuevo;
        }else{
            this.agregate(nuevo,this.raiz);
        }
    }

    //acomodo del arbol
    agregate(nuevo, raiz){
        if(nuevo.numero < raiz.numero){
            console.log(nuevo.numero, 'a la Izquierda');
            if(raiz.Izq === null){
                raiz.Izq = nuevo;
                console.log(`\n ${nuevo.numero} esta a la izquierda de ${raiz.numero}\n`);
            }else{
                console.log('Recursiva(',nuevo.numero, ',', raiz.Izq.numero, ')');
                this.agregate(nuevo.Izq);
            }
        }else{
            console.log(nuevo.numero, 'a la Derecha');
            if(raiz.derc === null){
                raiz.derc = nuevo;
                console.log('\n ${nuevo.numero} esta a la derecha de ${raiz.numero}\n');
            }else{
                console.log('recursiva', nuevo,numero, ',', raiz.derc.numero, ')');
                this.agregate(nuevo.derc);
            }
        }
    }


}