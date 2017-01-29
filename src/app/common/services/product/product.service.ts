import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private _products = [];
  private _key = '__products__';
  private _counter = '__counter__';

  constructor() { }

  save(product) {
    const _product = this.find(product.id);
    if (!_product) {
      product.id = this.getCounter();
      this._products.push(product);
    } else if (product.id === _product.id) {
      Object.assign(_product, product);
    } else {
      return false;
    }
    this._set();
    return true;
  }

  private _get() {
    return JSON.parse(window.localStorage.getItem(this._key));
  }

  private _set() {
    window.localStorage.setItem(this._key, JSON.stringify(this._products));
  }

  find(id) {
    return this.getList().find(item => item.id === id);
  }

  getList() {
    this._products = (this._products && this._products.length? this._products: this._get()) || [];
    return this._products;
  }

  getCounter() {
    let counter = +window.localStorage.getItem(this._counter) || 0;
    counter += 1;
    window.localStorage.setItem(this._counter, JSON.stringify(counter));
    return '' + counter;
  }

  remove(id) {
    const list = this.getList();
    const index = list.findIndex(item => item.id === id);
    if (index < 0) {
      return false;
    } else {
      this._products.splice(index, 1);
      this._set();
      return true;
    }
  }
}
