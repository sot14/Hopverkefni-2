/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */ 
import { empty } from './helpers';

export default class List {
  constructor() {
    this.container = document.querySelector('.list');
  }
  
  load() {
    empty(this.container);
  }
}


/*
 "lectures": [
  {
    "slug": "html-sagan",
    "title": "Sagan",
    "category": "html",
    "image": "img/code.jpg",
    "thumbnail": "img/thumb1.jpg",
    "content": [
*/
