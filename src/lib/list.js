import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }

  load() {
    empty(this.container);
  }
}

function getData () {
  fetch('./lectures.json') 
  .then(res => res.json()) 
  .then (res => console.log(res));
}

