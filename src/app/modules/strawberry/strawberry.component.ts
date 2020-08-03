import { Component, OnInit } from '@angular/core';

import { PageAService, PageBService } from 'src/app/core/services/page/page.service';

@Component({
  selector: 'app-strawberry',
  templateUrl: './strawberry.component.html',
  styleUrls: ['./strawberry.component.scss'],
})
export class StrawberryComponent implements OnInit {
  constructor(private pageAService: PageAService, private PageBService: PageBService) {}

  ngOnInit() {
    this.pageAService.title = 'Strawberry guy! A';
    this.PageBService.setTitle('Strawberry guy! B');

    const time = new Date().getTime().toString();
    const message = `Strawberry #${time}`;
    this.pageAService.items = [message];
    this.PageBService.setItems([message]);
  }
}
