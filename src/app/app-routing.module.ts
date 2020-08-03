import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentLayoutComponent } from './core/layouts/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: 'banana',
    children: [
      {
        path: '',
        component: ContentLayoutComponent,
        loadChildren: () => import('./modules/banana/banana.module').then((m) => m.BananaModule),
      },
    ],
  },
  {
    path: 'strawberry',
    children: [
      {
        path: '',
        component: ContentLayoutComponent,
        loadChildren: () =>
          import('./modules/strawberry/strawberry.module').then((m) => m.StrawberryModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
