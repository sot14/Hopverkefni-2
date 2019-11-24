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

<<<<<<< HEAD
=======
function getData () {
  fetch('./lectures.json') 
  .then(res => res.json()) 
  .then (res => console.log(res));
}

>>>>>>> e295627d8d32b11848f8817c32a08c096502aeae
