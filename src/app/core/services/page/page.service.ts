import { Injectable } from '@angular/core';

import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageAService {
  private title$ = new BehaviorSubject('');
  private itemsData: string[] = [];
  private items$ = new BehaviorSubject<string[]>(this.itemsData);

  constructor() {}

  get title() {
    return this.title$.value;
  }

  set title(needle: string) {
    this.title$.next(needle);
  }

  get items() {
    return this.items$.value;
  }
  set items(needle: string[]) {
    this.itemsData = [...this.itemsData, ...needle];
    this.items$.next(this.itemsData);
  }
}

@Injectable({
  providedIn: 'root',
})
export class PageBService {
  private title = new BehaviorSubject('');
  private items: string[] = [];
  private itemsSource = new BehaviorSubject(this.items);
  constructor() {}

  getTitle() {
    return this.title;
  }

  setTitle(needle: string) {
    this.title.next(needle);
  }

  getItems() {
    return this.itemsSource;
  }

  setItems(needle: string[]) {
    this.items = [...this.items, ...needle]; // usando desse modo para ficar igual o exemplo A
    // this.items.push(needle);//o ideal aqui
    this.itemsSource.next(this.items);
  }
}
