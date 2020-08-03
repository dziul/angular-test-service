import { Component, OnDestroy, OnInit } from '@angular/core';

import { interval, Subscription } from 'rxjs';
import { PageAService, PageBService } from 'src/app/core/services/page/page.service';

@Component({
  selector: 'app-banana',
  templateUrl: './banana.component.html',
  styleUrls: ['./banana.component.scss'],
})
export class BananaComponent implements OnInit, OnDestroy {
  private interval: Subscription;

  constructor(private pageAService: PageAService, private PageBService: PageBService) {}

  ngOnInit() {
    this.pageAService.title = 'Banana girl! A';
    this.PageBService.setTitle('Banana girl! B');

    this.interval = interval(1000).subscribe(() => {
      const time = new Date().getTime().toString();
      const message = `Banana #${time}`;
      this.pageAService.items = [message];
      this.PageBService.setItems([message]);
    });
  }

  ngOnDestroy() {
    this.interval.unsubscribe();
  }
}
