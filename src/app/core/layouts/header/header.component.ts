import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { PageAService, PageBService } from '../../services/page/page.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  titleA: string;
  titleB: Observable<string>;

  itemsA: string[];
  itemsB: Observable<string[]>;
  constructor(private pageAService: PageAService, private pageBService: PageBService) {}

  ngOnInit() {
    this.titleA = this.pageAService.title;
    this.titleB = this.pageBService.getTitle();

    this.itemsA = this.pageAService.items;
    this.itemsB = this.pageBService.getItems();
  }
}
