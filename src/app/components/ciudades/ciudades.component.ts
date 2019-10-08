import { Component, OnInit } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { BuscadorComponent } from '../buscador/buscador.component';

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.css']
})
export class CiudadesComponent implements OnInit {

  durationInSeconds = 1;

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  openDialog(){
    this.dialog.open(BuscadorComponent,{
      height: '100%',
      width: '600px',
    })
  }

  favorite(mensaje){
    this.snackBar.open(mensaje,null,{ duration:this.durationInSeconds * 1000});
  }

}
