import { empty } from './helpers';
<<<<<<< HEAD

=======
>>>>>>> 5f0e800d56ffd9ca0285d7761e9c84680d228a24

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

>>>>>>> 5f0e800d56ffd9ca0285d7761e9c84680d228a24

/*
 "lectures": [
  {
    "slug": "html-sagan",
    "title": "Sagan",
    "category": "html",
    "image": "img/code.jpg",
    "thumbnail": "img/thumb1.jpg",
    "content": [
<<<<<<< HEAD
*/
=======
/*

>>>>>>> 5f0e800d56ffd9ca0285d7761e9c84680d228a24
