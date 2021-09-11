import { Identifiers } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValueCacheService {
  cache: any;

  constructor() { 
    this.cache = {};
  }

  store<T>(id: string, value: T): void {
    this.cache[id] = value;
  }

  fetch<T>(id: string): T {
    return this.cache[id];
  }

  delete(id: string): void {
    delete this.cache[id];
  }
}
