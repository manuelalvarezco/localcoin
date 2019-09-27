import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
 } from "@angular/material";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
]

@NgModule({
  imports: [
    material
  ],
  exports:[
    material
  ]
})
export class MaterialModule { }
