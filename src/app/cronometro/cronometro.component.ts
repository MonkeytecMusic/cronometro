import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
//Importacion de herramientas

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {
    public segundo:number = 0; //creacion de propiedad de segundos
    @Input() public inicio:number = 0; //creacion de decorador Input
    @Output() public multiplo10 = new EventEmitter(); //Creacion de decorador Output con instancia de EventEmitter

    //Creacion de metodo ngOnInit
    ngOnInit(): void {
        this.segundo = this.inicio; //Asignacion de valores a las propiedades
        setInterval(this.actualizarSegundo.bind(this),1000); //Asignacion de tiempo en el intervalo
    }

    //Creacion de metodo para actualizar los segundos del contador
    private actualizarSegundo():void{
        this.segundo++;//Contador ascendente
        if (this.segundo%10 === 0) { //Condicion para multiplos de 10
            this.emitirMultiplo10();
        }
    }
    //Creacion de metodo para emitir cada 10 segundos un evento
    private emitirMultiplo10():void{
        this.multiplo10.emit(this.segundo);//Asignacion de parametros con la propiedad creada
    }
}
