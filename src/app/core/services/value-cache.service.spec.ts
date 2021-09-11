import { TestBed } from '@angular/core/testing';

import { ValueCacheService } from './value-cache.service';

describe('ValueCacheService', () => {
  let service: ValueCacheService;
  let id: string;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    id = 'test';
    service = TestBed.inject(ValueCacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('store should store the provided string with matching id', () => {
    const value = 'Cats are cute';
    service.store(id, value);
    expect(service.cache[id]).toBe(value);
  });

  it('store should store the provided object with matching id', () => {
    const value = { text: 'Cats are cute'};
    service.store(id, value);
    expect(service.cache[id]).toBe(value);
  });

  it('store should store the provided number with matching id', () => {
    const value = 1233;
    service.store(id, value);
    expect(service.cache[id]).toBe(value);
  });

  it('store should store the provided date with matching id', () => {
    const value = new Date();
    service.store(id, value);
    expect(service.cache[id]).toBe(value);
  });

  it('fetch should return a store valid matching provided id', () => {
    const value = { text: 'Dogs are cute too' };
    service.store(id, value);
    expect(service.fetch(id)).toBe(value);
  });

  it('delete should delete a stored entry matching provided id', () => {
    const value = { text: 'Dogs are cute too' };
    service.store(id, value);
    expect(service.fetch(id)).toBe(value);
    service.delete(id);
    expect(service.fetch(id)).not.toBe(value);
    expect(service.fetch(id)).toBeUndefined();
  });
});
