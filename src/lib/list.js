import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
    this.filters = document.querySelectorAll('.filters__filter');
    this.url = 'lectures.json';
  }

  load() {
    empty(this.container);
  }
}

