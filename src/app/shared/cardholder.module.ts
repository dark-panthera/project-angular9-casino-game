import { SharedModule } from './shared.module';
import { CardHolderComponent } from '../components/card-holder/card-holder.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [CardHolderComponent],
    imports: [CommonModule],
    exports: [CardHolderComponent]
})
export class CardHolderModule { }
