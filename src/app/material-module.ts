import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
    exports:[
        MatButtonModule,
        MatIconModule,
        MatTabsModule
    ]
})
export class MaterialModule{}