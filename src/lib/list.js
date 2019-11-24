import { empty } from './helpers';
export default class List {
constructor() {
this.container = document.querySelector('.list');

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


// eslint-disable-next-line spaced-comment
/* "lectures": [
  {
    "slug": "html-sagan",
    "title": "Sagan",
    "category": "html",
    "image": "img/code.jpg",
    "thumbnail": "img/thumb1.jpg",
    "content": [
/*