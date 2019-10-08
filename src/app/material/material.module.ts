import { NgModule } from '@angular/core';
import { 
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatInputModule,
  MatListModule
 } from "@angular/material";

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatIconModule,
  MatDialogModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatButtonToggleModule,
  MatInputModule,
  MatListModule
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
