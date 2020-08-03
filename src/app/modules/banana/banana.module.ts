import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BananaRoutingModule } from './banana-routing.module';
import { BananaComponent } from './banana.component';

@NgModule({
  declarations: [BananaComponent],
  imports: [CommonModule, BananaRoutingModule],
})
export class BananaModule {}
