import { NgModule } from '@angular/core';

/* Importacion de componentes */
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations: [
        ContadorComponent
    ],
    exports: [
        ContadorComponent
    ]
})
export class ContadorModule { }
