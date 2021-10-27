export class PersonaN{
    constructor(){
        this.nombre = null;
        this.edad = null;
        this.sexo = null;
        this.peso = null;
        this.altura = null;
        this.anio = null;
    }

    set nuevoNombre(nombre){
        this.nombre = nombre;
    }
    set nuevoSexo(sexo){
        this.sexo = sexo;
    }
    set nuevoPeso(peso){
        this.peso = peso;
    }
    set nuevaAltura(altura){
        this.altura = altura;
    }
    set nuevoAnio(anio){
        this.anio = anio;
    }

    get mostrarNombre(){
        return this.nombre;
    }
    get mostrarEdad(){
        return this.edad;
    }
    get mostrarSexo(){
        return this.sexo;
    }
    get mostrarPeso(){
        return this.peso;
    }
    get mostrarAltura(){
        return this.altura;
    }
    get mostrarAnio(){
        return this.anio;
    }

    calcularEdad(){
        this.edad = 2021 - this.anio;
    }


    mostrarGeneracion(){
        let generaciones = [
            ['Salient generation', 'Austeridad'],
            ['Baby room', 'Ambición'],
            ['Generación X', 'Obsesión por el éxito'],
            ['Generación Y millenials', 'Fustración'],
            ['Generación Z', 'Irreverencia'],
        ];

        let ide = -1;
        if (this.anio>=1930 && this.anio<=1948){
            ide = 0;
        }else if (this.anio>=1949 && this.anio<=1968){
            ide = 1;
        }else if (this.anio>=1969 && this.anio<=1980){
            ide = 2;
        }else if (this.anio>=1981 && this.anio<=1993){
            ide = 3;
        }else if (this.anio>=1994 && this.anio<=2010){
            ide = 4;
        }

        let cadena = "";
        if (ide >= 0){
            cadena = `La persona ${this.nombre} pertenece a ${generaciones[ide][0]} y su rasgo
            característico es ${generaciones[ide][1]} <br>`;
        }else{
            cadena = `El año está fuera del rango considerado <br>`;
        }   
        return cadena;
    }

    esMayor(){
        let cadena = "";
        if (this.edad >= 18){
            cadena = `La persona es ${this.sexo} y tiene ${this.edad} años, por tanto, es mayor de edad. <br>`;
        }else{
            cadena = `La persona es ${this.sexo} y tiene ${this.edad} años, por tanto, es menor de edad. <br>`;
        }
        return cadena;
    }
}