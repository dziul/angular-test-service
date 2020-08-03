import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StrawberryComponent } from './strawberry.component';

const routes: Routes = [
  {
    path: '',
    component: StrawberryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrawberryRoutingModule {}
