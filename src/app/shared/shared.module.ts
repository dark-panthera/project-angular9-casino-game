import { CardHolderComponent } from './../components/card-holder/card-holder.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './../components/card/card.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule],
    exports: [CardComponent]
    // entryComponents: [CardHolderComponent]
})
export class SharedModule { }
