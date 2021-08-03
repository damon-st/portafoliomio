import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
    exports:[
        MatButtonModule,
        MatIconModule,
        MatTabsModule,
        MatProgressBarModule
    ]
})
export class MaterialModule{}