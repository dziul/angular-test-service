import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BananaComponent } from './banana.component';

const routes: Routes = [
  {
    path: '',
    component: BananaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BananaRoutingModule {}
