import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContentLayoutComponent } from './content-layout/content-layout.component';
import { HeaderComponent } from './header/header.component';

const components = [ContentLayoutComponent];

@NgModule({
  declarations: [...components, HeaderComponent],
  exports: [...components],
  imports: [CommonModule, RouterModule],
})
export class LayoutsModule {}
