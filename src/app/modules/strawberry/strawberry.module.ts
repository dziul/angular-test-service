import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { StrawberryRoutingModule } from './strawberry-routing.module';
import { StrawberryComponent } from './strawberry.component';

@NgModule({
  declarations: [StrawberryComponent],
  imports: [CommonModule, StrawberryRoutingModule],
})
export class StrawberryModule {}
