import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedStorageService {
  private storage = localStorage;
  private storageSubject = new BehaviorSubject<any>(null);

  constructor() {
    this.storageSubject.next(this.getAllItems());
  }

  public setItem(key: string, value: any): void {
    this.storage.setItem(key, JSON.stringify(value));
    this.storageSubject.next(this.getAllItems());
  }

  public getItem(key: string): any {
    const value = this.storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  public removeItem(key: string): void {
    this.storage.removeItem(key);
    this.storageSubject.next(this.getAllItems());
  }

  public getAllItems(): { [key: string]: any } {
    const items: { [key: string]: any } = {};
    for (let i = 0; i < this.storage.length; i++) {
      const key = this.storage.key(i);
      const value = this.getItem(key as string);
      items[key as string] = value;
    }
    return items;
  }

  public watchStorage(): BehaviorSubject<any> {
    return this.storageSubject;
  }
}
