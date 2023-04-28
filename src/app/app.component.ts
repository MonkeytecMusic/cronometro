import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'pracCronometro';
    public mensaje:string = ''; //Propiedad de mensaje para utilizar en el metodo actualizar

    //Metodo actualizar con parametro que recibira del evento de nuestro componente hijo
    public actualizar(tiempo:number):void{
        //Mensaje dinamico cada 10Seg
        this.mensaje = tiempo + '(se actualiza cada 10 segundos)';
    }
}
